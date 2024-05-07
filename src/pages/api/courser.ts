import { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { load as cheerioLoad } from 'cheerio';
import url from 'url';
import axiosRetry from 'axios-retry';

// Function to create directory and file structure
function createDirectoryStructure(links: string[]): any {
  const rootDirectory: any = {}; // Root directory

  links.forEach(link => {
    let stringURL = '';
    let currentDir = rootDirectory;
    const components = link.substring(link.indexOf('//') + 2).split('/');
    const lastComponent = components[components.length - 1];

    if (lastComponent === "") components.pop();

    // check if URL is a file
    let isFile = false;
    if (lastComponent.includes(".")) isFile = true;

    components.forEach(component => {
      if (component != lastComponent) {
        stringURL += component + "/";
      } else {
        if (isFile) stringURL += component;
        else stringURL += component + "/";
      }

      if (isFile && component === lastComponent) { // File
        currentDir[component] = { url: 'https://' + stringURL };
      } else { // Directory
        if (!currentDir[component]) {
          currentDir[component] = {
            url: 'https://' + stringURL
          };
        }
        currentDir = currentDir[component];
      }
    });
  });

  return rootDirectory;
}

// retries request if socket hang up
axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log("Request retries:", retryCount);
    return retryCount * 1000;
  },
  retryCondition: (error) => {
    if (error.response === undefined || error.response.status === undefined) {
      console.error(`Axios retry error: Response is undefined`);
      return false;
    }
    return error.response.status === 503;
  },
});

var SOURCE_URL : string = "";

var toVisitURLs: string[] = [];

const visitedURLs: Set<string> = new Set();


async function discoverURLs(targetURL: string, sourceURL: string): Promise<boolean> {
  try {
    const response: AxiosResponse = await axios.get(targetURL);

    if (response === undefined) {
      throw new Error("Response is undefined");
    } else if (response.status >= 400) {
      throw new Error("Request failed with status code " + response.status);
    }

    const $ = cheerioLoad(response.data);

    $("a").each((index, element) => {
      const link = $(element).attr("href");

      
      if (link && !link.startsWith("javascript:")) {
        const absolutePath = url.resolve(targetURL, link);
        
        if (absolutePath.includes(sourceURL) && !absolutePath.includes("?")) {
          console.log('\t' + absolutePath);
          toVisitURLs.push(absolutePath);
        }
      }
    });

    return true;
  } catch (error : AxiosError | any) {
    // console.error(`Error for ${targetURL}: ${error.message}\n ${error}`);

    return false;
  }
}

async function courseURL(sourceURL: string): Promise<Set<string>> {
  toVisitURLs.push(sourceURL);

  while (toVisitURLs.length > 0) {
    let constructedURLString = "https://";
    const absoluteUrlPathString = toVisitURLs.pop();
    if (absoluteUrlPathString === undefined) break;
    const components = absoluteUrlPathString.split("/").slice(2);
    // current path ending
    const lastComponent = components[components.length - 1];

    if (lastComponent === "") components.pop();

    // check if URL is a file
    let isFile = false;
    if (lastComponent.includes(".")) isFile = true;


    for (let i = 0; i < components.length; i++) {
      if (components[i] != lastComponent) {
        constructedURLString += components[i] + "/";
      } else {
        if (isFile) constructedURLString += components[i];
        else constructedURLString += components[i] + "/";
      }

      // console.log(constructedURLString);

      if (constructedURLString.includes(SOURCE_URL) &&
        !visitedURLs.has(constructedURLString)
      ) {
        if (constructedURLString.includes('#') || constructedURLString.includes('?')) break;

        visitedURLs.add(constructedURLString);

        console.log("-> " + constructedURLString);
        await discoverURLs(constructedURLString, SOURCE_URL);
      }
    }
    // console.log("toVisitURLs length: " + toVisitURLs.length + "\n");
  }

  // console.log(visitedURLs);

  return visitedURLs;
}

async function CheckExistsURL(url: string): Promise<boolean> {
  try {
    const response: AxiosResponse = await axios.get(url);

    if (response === undefined) {
      throw new Error("Response is undefined");
    }
    if (response.status >= 400) {
      throw new Error("Request failed with status code " + response.status);
    }

    return true;
  } catch (error : AxiosError | any) {
    // console.error(`Error for ${url}: ${error.message}\n ${error}`);

    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { source } = req.body;

  if (!source || typeof source !== 'string') {
    res.status(400).json({ error: 'Invalid source URL' });
    return;
  }

  SOURCE_URL = source;
  toVisitURLs = [];
  visitedURLs.clear();

  try {
    await courseURL(source);

    const urls: string[] = Array.from(visitedURLs);

    // loop through each URL and verify it exists;
    // if it does not remove it from the array
    for (let i = 0; i < urls.length; i++) {
      const exists = await CheckExistsURL(urls[i]);
      if (!exists) {
        urls.splice(i, 1);
        i--;
      }
    }

    const dir = createDirectoryStructure(urls);

    console.log(JSON.stringify(dir, null, 1));
    
    res.status(200).json(dir);
    
  } catch (error : Error | any) {
    console.error('Error:', error.message);
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

