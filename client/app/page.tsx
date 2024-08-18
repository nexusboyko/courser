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

const Folder = ({ formatted, editKeyInJson }: { formatted: NestedItem, editKeyInJson: (path: string[], newKey: string) => void }) => {
  // const [nestedItem, setNestedItem] = useState<NestedItem>(formatted);
  const [save, setSave] = useState("");

  return (
    <>
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
            className="border"
          />
          <button className="border hover:bg-gray-200" type="submit" onClick={(e)  => {
            e.preventDefault();
            if (save) {
              localStorage.setItem("courser", JSON.stringify({
                ...JSON.parse(localStorage.getItem("courser") ?? "{}"),
                [save]: formatted,
              }));
            }
            alert("Saved!");
            setSave("");
          }}>
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

  const handleEditKeySubmit = (e: React.FormEvent, key: string, path: string[]) => {
    e.preventDefault();
    editKeyInJson([...path, key], newKey);
    setEditingKey(null);
  };

  return (
    <ul className={`ms-10`}>
      {Object.entries(nestedItem)
        .sort(([A], [B]) => A.localeCompare(B))
        .map(([key, value]) => {
          const isLink = typeof value === "string";
          const isEditing = editingKey === key;

          return (
            <li key={key} className="mb-2">
              {isLink ? (
                isEditing ? (
                  <form
                    onSubmit={(e) => handleEditKeySubmit(e, key, path)}
                  >
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
              ) : (
                isEditing ? (
                  <form
                    onSubmit={(e) => handleEditKeySubmit(e, key, path)}
                  >
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
                      {collapsed[key] ? "📂" : "📁"} {key}
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
                )
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
    console.log('updated', json);
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
      <section id="sidebar" className="absolute left-0 top-1/4">
        {
          Object.entries(JSON.parse(localStorage.getItem("courser") ?? "{}")).map(([key, nestedItem]) => (
            <div key={key} className="my-2">
              <small className="font-semibold" onClick={() => {
                setJson(nestedItem as NestedItem);
              }}>{key}</small>
            </div>
          ))
        }
      </section>
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
        <Folder formatted={json} editKeyInJson={editKeyInJson} />
      </main>
    </>
  );
}
