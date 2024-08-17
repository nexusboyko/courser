'use client'

import Image from "next/image";
import { env } from "process";
import { useEffect, useState } from "react";


const crawl = async (url : string) => {
  if (url) {
    try {
      const res = await fetch(`${process.env.NEXT_API_URL_DEV || 'http://localhost:8080'}/api/courser`, {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("No URL provided");
  }
}

type NestedItem = {
  [key: string]: NestedItem | string;
};

const formatUrls = (urls: string[]): NestedItem => {
  const root: NestedItem = {};

  urls.forEach((url) => {
    if (!url) return;
    try {
      const parsedUrl = new URL(url);
      const pathParts = parsedUrl.pathname.split('/').filter(Boolean);

      let currentLevel = root;

      pathParts.forEach((part, index) => {
        const isFile = part.includes('.');

        if (isFile || index === pathParts.length - 1) {
          currentLevel[part] = parsedUrl.href;
        } else {
          if (!currentLevel[part]) {
            currentLevel[part] = {};
          }
          currentLevel = currentLevel[part] as NestedItem;
        }
      });
    } catch (e) {
      console.error(`Invalid URL: ${url}`);
    }
  });

  return root;
}

const Collapsible = ({ nestedItem, level = 0 }: { nestedItem: NestedItem; level?: number }) => (
  <ul className="ms-10">
    {Object.entries(nestedItem)
      .sort(([A], [B]) => A.localeCompare(B))
      .map(([key, value]) => {
        const isLink = typeof value === 'string';
        const [collapsed, setCollapsed] = useState(true);

        return (
          <li key={key} className="mb-2">
            {isLink ? (
              <a href={value as string} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                {'📄'} {key}
              </a>
            ) : (
              <>
                <span
                  onClick={() => setCollapsed(!collapsed)}
                  className="cursor-pointer text-gray-500"
                >
                  {collapsed ? '📁' : '📂'} {key}
                </span>
                {!collapsed && <Collapsible nestedItem={value as NestedItem} level={level + 1} />}
              </>
            )}
          </li>
        );
      })}
  </ul>
);

// https://courses.cs.washington.edu/courses/cse473/24sp/
export default function Home() {
  const [dir, setDir] = useState([]);
  const [url, setUrl] = useState("");

  const [json, setJson] = useState({});

  useEffect(() => {
    // console.log(formatUrls(dir));
    setJson(formatUrls(dir));
  }, [dir]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-semibold">courser</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setDir(await crawl(url));
        }}
      >
        <label htmlFor="url">URL</label>
        <input type="text" name="url" className="border" onChange={(e) => setUrl(e.target.value)} value={url} />
        <button type="submit">crawl</button>
      </form>
      <small className="p-10">
        {
          json && <Collapsible nestedItem={json} />
        }
      </small>
    </main>
  );
}
