"use client";

import React, { useEffect, useState } from "react";
import { NestedItem, formatUrls } from "@/lib/utils";

import Image from "next/image";
import CoursesMenu from "@/components/CoursesMenu";
import CourseDirectory from "@/components/CourseDirectory";

const crawl = async (url: string): Promise<Array<string>> => {
  if (url) {
    try {
      const validURL = new URL(url);
    } catch (error) {
      console.error("Invalid URL: ", error);

      return [];
    }

    try {
      const res = await fetch(`${process.env.NEXT_ENV === "production" ? process.env.NEXT_API_URL_PROD : process.env.NEXT_API_URL_DEV}/api/courser`, {
        method: "POST",
        body: JSON.stringify({
          url: url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return res.json();
    } catch (error) {
      console.error(error);

      return [];
    }
  } else {
    console.error("No URL provided");

    return [];
  }
};

const CourseSearchBox = ({
  url,
  setUrl,
  setLoading,
  setJson,
  setDir,
}: {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setJson: React.Dispatch<React.SetStateAction<NestedItem>>;
  setDir: React.Dispatch<React.SetStateAction<Array<string>>>;
}) => {
  return (
    <div className="flex flex-col items-center p-3">
      <div className="flex items-center mb-2">
        <Image
          priority
          src={"/courser.svg"}
          alt="courser"
          width={30}
          height={30}
          className="object-contain w-[50px] h-auto aspect-square"
        />
        {/* <h1 className="font-bold flex text-lg p-2 text-[#727bb9]">courser</h1> */}
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
        <div className="border p-2 rounded-l-lg">
          <label htmlFor="url">URL</label>
        </div>
        <input
          type="text"
          name="url"
          className="m-0 border-t border-b p-2 rounded-r-lg outline-none"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <button
          type="submit"
          className="border hover:bg-gray-200 p-2 rounded-lg"
        >
          submit
        </button>
      </form>
    </div>
  );
};

// https://courses.cs.washington.edu/courses/cse473/24sp/
export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  // show toast message
  const [toast, setToast] = useState<boolean>(false);

  // list of found urls
  const [dir, setDir] = useState<Array<string>>([]);
  // source url
  const [url, setUrl] = useState<string>("");
  // nested "directory" JSON
  const [json, setJson] = useState<NestedItem>({});

  useEffect(() => {
    setTimeout(() => {
      setJson(formatUrls(dir));
    }, 300);
  }, [dir]);

  // testing
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

  const saveItem = (name: string, json: NestedItem) => {
    if (name) {
      localStorage.setItem(
        "courser",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("courser") ?? "{}"),
          [name]: json,
        })
      );
    }
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <>
      {
        <small
          className={`absolute bottom-6 left-1/2 rounded-lg bg-green-500 text-white p-2 text-center transition-all duration-500 ease-in-out ${
            toast
              ? "opacity-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-[50%]"
          }`}
        >
          Saved!
        </small>
      }
      <main className="flex min-h-screen flex-col justify-start p-3">
        <CourseSearchBox
          url={url}
          setUrl={setUrl}
          setLoading={setLoading}
          setJson={setJson}
          setDir={setDir}
        />

        <CoursesMenu setJson={setJson} />
        <CourseDirectory
          formatted={json}
          editKeyInJson={editKeyInJson}
          saveItem={saveItem}
          loader={
            dir &&
            (loading ||
              (dir.length !== 0 && Object.keys(json).length === 0)) && (
              <div className="w-full flex justify-center items-center opacity-75 text-sm">
                {loading && <small>scraping...</small>}
                {dir.length !== 0 && Object.keys(json).length === 0 && (
                  <small>formatting...</small>
                )}
                <small className="animate-spin mx-1">⏳</small>
              </div>
            )
          }
        />
      </main>
    </>
  );
}
