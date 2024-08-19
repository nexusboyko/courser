"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

type NestedItem = {
  [key: string]: NestedItem | string;
};

const formatUrls = (urls: string[]): NestedItem => {
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

const Folder = ({
  formatted,
  editKeyInJson,
}: {
  formatted: NestedItem;
  editKeyInJson: (path: string[], newKey: string) => void;
}) => {
  const [save, setSave] = useState("");
  const [toast, setToast] = useState(false);

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
      <small className="p-10 h-[60vh] w-[50vw] mx-auto overflow-y-scroll">
        <Collapsible nestedItem={formatted} editKeyInJson={editKeyInJson} />
      </small>
      <div className="flex justify-center">
        <form>
          <input
            type="text"
            placeholder="save as..."
            value={save}
            onChange={(e) => setSave(e.target.value)}
            className="border-t border-b border-l p-2"
          />
          <button
            className="border p-2 hover:bg-gray-200"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (save) {
                localStorage.setItem(
                  "courser",
                  JSON.stringify({
                    ...JSON.parse(localStorage.getItem("courser") ?? "{}"),
                    [save]: formatted,
                  })
                );
              }
              setToast(true);
              setTimeout(() => setToast(false), 2000);
              setSave("");
            }}
          >
            save
          </button>
        </form>
      </div>
    </>
  );
};

const Collapsible = ({
  nestedItem,
  level = 0,
  path = [],
  editKeyInJson,
}: {
  nestedItem: NestedItem;
  level?: number;
  path?: string[];
  editKeyInJson: (path: string[], newKey: string) => void;
}) => {
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [newKey, setNewKey] = useState("");

  const toggleCollapse = (key: string) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleEditKeySubmit = (
    e: React.FormEvent,
    key: string,
    path: string[]
  ) => {
    e.preventDefault();
    editKeyInJson([...path, key], newKey);
    setEditingKey(null);
  };

  const countItems = (value: NestedItem): number => {
    return Object.values(value).reduce(
      (sum, el) => (typeof el === "string" ? sum + 1 : sum + countItems(el)),
      0
    );
  };

  const naturalSort = (a: string, b: string): number => {
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

  return (
    <ul className={`ms-10`}>
      {Object.entries(nestedItem)
        // .sort(([A], [B]) => A.localeCompare(B))
        .sort(([A], [B]) => naturalSort(A, B))
        .map(([key, value]) => {
          const isLink = typeof value === "string";
          const isEditing = editingKey === key;

          return (
            <li key={key} className="mb-2">
              {isLink ? (
                isEditing ? (
                  <form onSubmit={(e) => handleEditKeySubmit(e, key, path)}>
                    <input
                      value={newKey}
                      onChange={(e) => setNewKey(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          setEditingKey(null);
                        }
                      }}
                      onBlur={() => setEditingKey(null)}
                      autoFocus
                      className="border-gray-300 focus:ring-indigo-500"
                      type="text"
                    />
                  </form>
                ) : (
                  <span>
                    <a
                      href={value as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                    >
                      {"📄"} {key}
                    </a>
                    <button
                      onClick={() => {
                        setEditingKey(key);
                        setNewKey(key);
                      }}
                      className="ml-2 text-gray-500 opacity-50"
                    >
                      ✏️
                    </button>
                  </span>
                )
              ) : isEditing ? (
                <form onSubmit={(e) => handleEditKeySubmit(e, key, path)}>
                  <input
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setEditingKey(null);
                      }
                    }}
                    onBlur={() => setEditingKey(null)}
                    autoFocus
                    className="border-gray-300 focus:ring-indigo-500"
                    type="text"
                  />
                </form>
              ) : (
                <>
                  <span
                    onClick={() => toggleCollapse(key)}
                    className="cursor-pointer"
                  >
                    {collapsed[key] ? "📂" : "📁"} {key}{" "}
                    <span className="text-xs text-gray-400">
                      ({countItems(value as NestedItem)})
                    </span>
                  </span>
                  <button
                    onClick={() => {
                      setEditingKey(key);
                      setNewKey(key);
                    }}
                    className="ml-2 text-gray-500 opacity-50"
                  >
                    ✏️
                  </button>
                </>
              )}
              {collapsed[key] && (
                <Collapsible
                  nestedItem={value as NestedItem}
                  level={level + 1}
                  path={[...path, key]}
                  editKeyInJson={editKeyInJson}
                />
              )}
            </li>
          );
        })}
    </ul>
  );
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
      <section
        id="sidebar"
        className="absolute left-0 top-1/4 ml-2 border-t border-l border-r"
      >
        {Object.entries(
          JSON.parse(localStorage.getItem("courser") ?? "{}")
        ).map(([key, nestedItem]) => (
          <div key={key} className="border-b flex justify-between">
            <small
              className="p-2 w-full hover:bg-gray-200 cursor-pointer flex justify-center items-center"
              onClick={() => {
                setJson(nestedItem as NestedItem);
              }}
            >
              {key}
            </small>
            <button
              className="border-l p-2 hover:bg-red-200 cursor-pointer"
              onClick={() => {
                localStorage.setItem(
                  "courser",
                  JSON.stringify(
                    Object.fromEntries(
                      Object.entries(
                        JSON.parse(localStorage.getItem("courser") ?? "{}")
                      ).filter(([k]) => k !== key)
                    )
                  )
                );
              }}
            >
              🗑️
            </button>
          </div>
        ))}
      </section>
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
        <Folder formatted={json} editKeyInJson={editKeyInJson} />
      </main>
    </>
  );
}
