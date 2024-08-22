"use client";

import React, { useEffect, useState } from "react";
import { NestedItem, formatUrls } from "@/lib/utils";

import Image from "next/image";
import CoursesMenu from "@/components/CoursesMenu";
import CourseDirectory from "@/components/CourseDirectory";
import Menu from "./Menu";

const crawl = async (url: string): Promise<Array<string>> => {
  if (url) {
    try {
      const validURL = new URL(url);
    } catch (error) {
      console.error("Invalid URL: ", error);

      return [];
    }

    try {
      const res = await fetch(
        `${
          process.env.NEXT_ENV === "production"
            ? process.env.NEXT_API_URL_PROD
            : process.env.NEXT_API_URL_DEV
        }/api/courser`,
        {
          method: "POST",
          body: JSON.stringify({
            url: url,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
  isDarkMode,
  setIsDarkMode,
}: {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setJson: React.Dispatch<React.SetStateAction<NestedItem>>;
  setDir: React.Dispatch<React.SetStateAction<Array<string>>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <form
        action=""
        className="flex w-full bg-transparent"
        onSubmit={async (e) => {
          e.preventDefault();
          setJson({});
          setLoading(true);
          setDir(await crawl(url));
          setLoading(false);
        }}
      >
        <input
          type="text"
          className={`text-base w-full bg-transparent px-4 py-2 outline-none border-slate-800 ${
            isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
          }`}
          placeholder="Enter your course link..."
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </form>
      <button
        className={`border-l p-2 ${
          isDarkMode
            ? "bg-[#111c35] text-white border-slate-800 hover:bg-slate-800"
            : "bg-gray-50 text-black border-gray-200 hover:bg-gray-200"
        }`}
        onClick={async (e) => {
          e.preventDefault();
          setJson({});
          setLoading(true);
          setDir(await crawl(url));
          setLoading(false);
        }}
      >
        🔍
      </button>
      <button
        className={`border-l p-2 ${
          isDarkMode
            ? "bg-[#111c35] text-white border-slate-800 hover:bg-slate-800"
            : "bg-gray-50 text-black border-gray-200 hover:bg-gray-200"
        } rounded-tr-lg`}
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </>
  );
};

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

  // item save name
  const [savename, setSaveName] = React.useState("");

  // dark mode
  const [isDarkMode, setIsDarkMode] = React.useState(false);

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
      <main className="flex min-h-screen flex-col justify-start items-center p-3">
        <Image
          priority
          src={"/courser.svg"}
          alt="courser"
          width={30}
          height={30}
          className="object-contain w-[50px] h-auto aspect-square m-4"
        />

        <div className="flex w-[50vw] h-[70vh]">
          <Menu
            isDarkMode={isDarkMode}
            CourseSearch={
              <CourseSearchBox
                url={url}
                setUrl={setUrl}
                setLoading={setLoading}
                setJson={setJson}
                setDir={setDir}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            }
            CourseDirectory={
              <CourseDirectory
                formatted={json}
                editKeyInJson={editKeyInJson}
                saveItem={saveItem}
                isDarkMode={isDarkMode}
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
            }
            CoursesMenu={
              <CoursesMenu
                setJson={setJson}
                toast={toast}
                isDarkMode={isDarkMode}
              />
            }
          />
        </div>

        <div className="flex justify-center p-3">
          <form>
            <input
              type="text"
              placeholder="Save course as..."
              value={savename}
              onChange={(e) => setSaveName(e.target.value)}
              className="border-t border-b border-l px-4 py-2 rounded-l-lg outline-none"
            />
            <button
              className="border p-2 hover:bg-gray-200 rounded-r-lg"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                saveItem(savename, json);
                setSaveName("");
              }}
            >
              💾
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
