export type NestedItem = {
  [key: string]: NestedItem | string;
};

export const formatUrls = (urls: string[]): NestedItem => {
  const root: NestedItem = {};

  urls?.forEach((url) => {
    if (!url) return;

    // Extract the path part from the URL string
    const path = url.split("//")[1].split("/").slice(1);
    let currentLevel: NestedItem = root;

    path.forEach((part, index) => {
      // if (path.length - 2 >= 0 && index === path.length - 2 && !path[path.length - 1]) {
      //   currentLevel[path[path.length - 2]] = url;
      // }
      // else {
      //   if (index === path.length - 1 && path[index]) {

      //         // Last part, should be a file
      //         currentLevel[part] = url;
      //   } else {
      //       if (path[index]) {
      //         // Intermediate part, should be a directory
      //         if (!currentLevel[part] || typeof currentLevel[part] === 'string') {
      //             currentLevel[part] = {};
      //         }
      //         currentLevel = currentLevel[part] as NestedItem;
      //       }
      //   }
      // }

      if (index === path.length - 1) {
        // Last part, should be a file or a leaf node
        if (part) {
          if (!currentLevel[part]) {
            currentLevel[part] = url;
          }
        } else {
          currentLevel[path[path.length - 2]] = url;
        }
      } else {
        // Intermediate part, should be a directory
        if (!currentLevel[part] || typeof currentLevel[part] === "string") {
          currentLevel[part] = {};
        }
        currentLevel = currentLevel[part] as NestedItem;
      }
    });
  });

  return root;
};

export const naturalSort = (a: string, b: string): number => {
  const extractParts = (str: string) =>
    str
      .split(/(\d+)/)
      .map((part) => (isNaN(parseInt(part)) ? part : parseInt(part)));

  const partsA = extractParts(a);
  const partsB = extractParts(b);

  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    if (partsA[i] === undefined) return -1;
    if (partsB[i] === undefined) return 1;
    if (partsA[i] < partsB[i]) return -1;
    if (partsA[i] > partsB[i]) return 1;
  }
  return 0;
};