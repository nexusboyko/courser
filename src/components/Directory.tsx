'use client';
import React, { useEffect, useState } from 'react'
import Collapsible from './Collapsible';
import { DirectoryType } from '@/types/types';

const getDirFromLocalStorage = (): DirectoryType | null => {
  const dirJSON = localStorage.getItem('courser-directory-json');
  if (dirJSON) {
    return JSON.parse(dirJSON);
  }
  return null;
};

const setDirToLocalStorage = (dir: DirectoryType): void => {
  localStorage.setItem('courser-directory-json', JSON.stringify(dir));
};


const Directory = () => {
  const [dir, setDir] = useState<DirectoryType>({} as DirectoryType);
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const clear = () => {
    setUrl("")
  }

  useEffect(() => {
    clear()
    setUrl('')
    const savedDir = getDirFromLocalStorage();
    setDir(savedDir !== null ? savedDir : {});
  }, [])

  useEffect(() => {
    if (error !== "") {
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }, [error]);

  const unionJSONs = (json1: any, json2: any): DirectoryType => {
    const result: any = {};

    for (const key in json1) {
      if (json1.hasOwnProperty(key)) {
        result[key] = json1[key];
      }
    }

    for (const key in json2) {
      if (json2.hasOwnProperty(key)) {
        if (result.hasOwnProperty(key) && typeof result[key] === 'object' && typeof json2[key] === 'object') {
          result[key] = unionJSONs(result[key], json2[key]);
        } else {
          result[key] = json2[key];
        }
      }
    }

    return result;
  }

  const runCourserOnSourceURL = async (sourceURL: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/courser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: sourceURL,
        })
      })

      return res.json()
    } catch (error: Error | any) {
      console.error(error);

    } finally {
      setLoading(false)
      setUrl("");
    }
  }

  const runCrawler = async () => {
    if (url === "") {
      setError("No URL provided");
      return;
    }

    const source = url;

    setUrl("Crawling...");
    if (Object.keys(dir).length == 0) {
      setDir(await runCourserOnSourceURL(source));
    } else {
      const newDir: DirectoryType = unionJSONs(dir, await runCourserOnSourceURL(source));
      setDir(newDir);
    }
  }

  const saveDir = () => {
    setDirToLocalStorage(dir);
  }

  return (
    <>
      {
        error && (
          <p className='text-center text-sm text-error m-5'>Error fetching directory: {error}</p>
        )
      }

      <div className="flex w-[45%] justify-center items-center m-5">
        <input type="text" className='input w-[85%] input-bordered text-center rounded-2xl font-light' name="URL"
          placeholder={loading ? 'Crawling...' : 'Copy the URL you\'d like to crawl here!'} id="url" value={url} onChange={(e) => setUrl(e.target.value)} />

      </div>

      <div className="flex gap-2">
        <button className='btn btn-md btn-outline btn-secondary' onClick={runCrawler} disabled={loading}>Crawl</button>

        <button className='btn btn-md btn-outline btn-success' onClick={saveDir} disabled={Object.keys(dir).length == 0}>Save</button>
      </div>

      <Collapsible dir={dir} />
    </>
  )
}

export default Directory