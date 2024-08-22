import React from "react";

import { NestedItem, naturalSort } from "@/lib/utils";

const Collapsible = ({
  nestedItem,
  level = 0,
  path = [],
  editKeyInJson,
  collapsed,
  toggleCollapse,
  isDarkMode,
}: {
  nestedItem: NestedItem;
  level?: number;
  path?: string[];
  editKeyInJson: (path: string[], newKey: string) => void;
  collapsed: { [key: string]: boolean };
  toggleCollapse: (key: string) => void;
  isDarkMode: boolean
}) => {
  const [editingKey, setEditingKey] = React.useState<string | null>(null);
  const [newKey, setNewKey] = React.useState("");

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

  return (
    <ul className={`first:ms-0 ms-10`}>
      {Object.entries(nestedItem)
        .sort(([A], [B]) => naturalSort(A, B))
        .map(([key, value]) => {
          const isLink = typeof value === "string";
          const isEditing = editingKey === key;

          // open all folders by default
          if (!isLink && collapsed[key] === undefined) {
            toggleCollapse(key);
          }

          return (
            <li key={key} id={key} className="mb-2 select-none">
              {isLink ? (
                <span className="flex items-center">
                  <span className="mr-1">{"📄"}</span>
                  {isEditing ? (
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
                        className={`w-[20ch] px-2 outline-none text-blue-600 ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}
                        type="text"
                      />
                    </form>
                  ) : (
                    <>
                      <a
                        href={value as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {key}
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
                    </>
                  )}{" "}
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="mr-1">{collapsed[key] ? "📂" : "📁"}</span>
                  {isEditing ? (
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
                        className={`w-[20ch] px-2 outline-none ${isDarkMode ? "bg-slate-900" : "bg-gray-50"}`}
                        type="text"
                      />
                    </form>
                  ) : (
                    <>
                      <span
                        onClick={() => toggleCollapse(key)}
                        className="cursor-pointer hover:underline"
                      >
                        {key}
                      </span>{" "}
                      <span className="text-xs text-gray-400 ms-1">
                        ({countItems(value as NestedItem)})
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
                </span>
              )}
              {!isLink && collapsed[key] && (
                <Collapsible
                  nestedItem={value as NestedItem}
                  level={level + 1}
                  path={[...path, key]}
                  editKeyInJson={editKeyInJson}
                  collapsed={collapsed}
                  toggleCollapse={toggleCollapse}
                  isDarkMode={isDarkMode}
                />
              )}
            </li>
          );
        })}
    </ul>
  );
};

const CourseDirectory = ({
  formatted,
  editKeyInJson,
  saveItem,
  loader,
  isDarkMode
}: {
  formatted: NestedItem;
  editKeyInJson: (path: string[], newKey: string) => void;
  saveItem: (name: string, json: NestedItem) => void;
  loader: React.ReactNode;
  isDarkMode: boolean
}) => {
  const [collapsed, setCollapsed] = React.useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleCollapse = (key: string) => {
    setTimeout(() => {
      if (collapsed[key])
        setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
      else setCollapsed({ ...collapsed, [key]: true });
    }, 0);
  };

  return (
    <>
      <small className="h-full w-full overflow-y-scroll">
        {loader && (
          <div className="w-full h-full flex justify-center items-center">
            {loader}
          </div>
        )}
        <Collapsible
          nestedItem={formatted}
          editKeyInJson={editKeyInJson}
          collapsed={collapsed}
          toggleCollapse={toggleCollapse}
          isDarkMode={isDarkMode}
        />
      </small>
    </>
  );
};

export default CourseDirectory;
