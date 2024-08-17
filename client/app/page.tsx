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
    try {
      const parsedUrl = new URL(url);
      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

      let currentLevel = root;

      pathParts.forEach((part, index) => {
        const isFile = part.includes(".");

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
};

const Folder = ({ urls }: { urls: string[] }) => {
  const [nestedItem, setNestedItem] = useState<NestedItem>(formatUrls(urls));

  // edit key string in JSON
  const editKey = (path: string[], newKey: string) => {
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
    setNestedItem((prev) => updateNestedItem(prev, path));
  };

  return (
    <Collapsible nestedItem={nestedItem} editKey={editKey} />
  );
};

const Collapsible = ({
  nestedItem,
  level = 0,
  path = [],
  editKey,
}: {
  nestedItem: NestedItem;
  level?: number;
  path?: string[];
  editKey: (path: string[], newKey: string) => void;
}) => {
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});

  const toggleCollapse = (key: string) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ul className={`ms-10`}>
      {Object.entries(nestedItem)
        .sort(([A], [B]) => A.localeCompare(B))
        .map(([key, value]) => {
          const isLink = typeof value === "string";
          const [isEditing, setIsEditing] = useState(false);
          const [newKey, setNewKey] = useState(key);

          return (
            <li key={key} className="mb-2">
              {isLink ? (
                isEditing ? (
                  <>
                    <form
                      action=""
                      onSubmit={(e) => {
                        e.preventDefault();
                        editKey([...path, key], newKey);
                        setIsEditing(false);
                      }}
                    >
                      <input
                        value={newKey}
                        onChange={(e) => setNewKey(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") {
                            setIsEditing(false);
                          }
                        }}
                        onBlur={() => setIsEditing(false)}
                        autoFocus
                        className="border-gray-300 focus:ring-indigo-500"
                        type="text"
                      />
                    </form>
                  </>
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
                      onClick={() => setIsEditing(true)}
                      className="ml-2 text-gray-500 opacity-50"
                    >
                      ✏️
                    </button>
                  </span>
                )
              ) : isEditing ? (
                <>
                  <form
                    action=""
                    onSubmit={(e) => {
                      e.preventDefault();
                      editKey([...path, key], newKey);
                      setIsEditing(false);
                    }}
                  >
                    <input
                      value={newKey}
                      onChange={(e) => setNewKey(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          setIsEditing(false);
                        }
                      }}
                      onBlur={() => setIsEditing(false)}
                      autoFocus
                      className="border-gray-300 focus:ring-indigo-500 text-sm"
                      type="text"
                    />
                  </form>
                  {collapsed[key] && (
                    <Collapsible
                      nestedItem={value as NestedItem}
                      level={level + 1}
                      path={[...path, key]}
                      editKey={editKey}
                    />
                  )}
                </>
              ) : (
                <>
                  <span
                    onClick={() => toggleCollapse(key)}
                    className="cursor-pointer"
                  >
                    {collapsed[key] ? "📁" : "📂"} {key}
                  </span>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="ml-2 text-gray-500 opacity-50"
                  >
                    ✏️
                  </button>
                  {collapsed[key] && (
                    <Collapsible
                      nestedItem={value as NestedItem}
                      level={level + 1}
                      path={[...path, key]}
                      editKey={editKey}
                    />
                  )}
                </>
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

  return (
    <main className="flex min-h-screen flex-col justify-start p-24">
      <div className="flex flex-col items-center mb-6">
        <h1 className="font-semibold flex gap-x-1 p-2 text-[#727bb9]">
          <Image
            src="https://github.com/nexusboyko/courser/assets/71574111/39e85446-bda3-44dd-a109-b8f327d42d6c"
            alt="courser"
            width={15}
            height={15}
            className="object-contain"
          />
          courser
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setDir(await crawl(url));
            setLoading(false);
          }}
        >
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            className="border mx-2"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
          <button type="submit" className="border hover:bg-gray-200">
            crawl
          </button>
        </form>
        {loading && <small className="pt-2">loading. . .</small>}
      </div>
      <small className="p-10 h-[60vh] w-[50vw] mx-auto overflow-y-scroll">
        {dir && <Folder urls={dir} />}
      </small>
    </main>
  );
}
