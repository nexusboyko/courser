"use client";

import { useEffect, useState } from "react";
import { NestedItem, formatUrls } from "@/lib/utils";

import Image from "next/image";
import CoursesMenu from "@/components/CoursesMenu";
import CourseDirectory from "@/components/CourseDirectory";

const crawl = async (url: string) => {
  if (url) {
    try {
      const res = await fetch(
        `${
          process.env.NEXT_API_URL_DEV || "http://localhost:8080"
        }/api/courser`,
        {
          method: "POST",
          body: JSON.stringify({ url }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("No URL provided");
  }
};

// https://courses.cs.washington.edu/courses/cse473/24sp/
export default function Home() {
  const [loading, setLoading] = useState(false);
  // list of found urls
  const [dir, setDir] = useState([]);
  // source url
  const [url, setUrl] = useState("");

  // nested "directory" JSON
  const [json, setJson] = useState({});

  useEffect(() => {
    // console.log(formatUrls(dir));
    setJson(formatUrls(dir));
  }, [dir]);

  useEffect(() => {
    console.log("updated", json);
  }, [json]);

  // edit key string in JSON
  const editKeyInJson = (path: string[], newKey: string) => {
    const updateNestedItem = (item: NestedItem, keys: string[]): NestedItem => {
      const [key, ...rest] = keys;
      if (rest.length === 0) {
        const value = item[key];
        const newItem = { ...item };
        delete newItem[key];
        newItem[newKey] = value;
        return newItem;
      }
      return {
        ...item,
        [key]: updateNestedItem(item[key] as NestedItem, rest),
      };
    };
    setJson((prev) => updateNestedItem(prev, path));
  };

  return (
    <>
      <CoursesMenu setJson={setJson} />
      <main className="flex min-h-screen flex-col justify-start p-24">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center mb-2">
            <Image
              src={"/courser.svg"}
              alt="courser"
              width={30}
              height={30}
              className="object-contain"
            />
            <h1 className="font-bold flex text-lg p-2 text-[#727bb9]">
              courser
            </h1>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              setJson({});
              setDir(await crawl(url));
              setLoading(false);
            }}
            className="flex items-center"
          >
            {/* <label htmlFor="url" className="border p-2">URL</label> */}
            <div className="border p-2">
              <label htmlFor="url">URL</label>
            </div>
            <input
              type="text"
              name="url"
              className="m-0 border-t border-b p-2"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <button type="submit" className="border hover:bg-gray-200 p-2">
              submit
            </button>
          </form>
          {loading && <p className="p-3 text-base animate-spin">⏳</p>}
        </div>
        <CourseDirectory formatted={json} editKeyInJson={editKeyInJson} />
      </main>
    </>
  );
}
