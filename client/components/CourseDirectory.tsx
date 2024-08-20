import React from "react";

import { NestedItem, naturalSort } from "@/lib/utils";

const Collapsible = ({
  nestedItem,
  level = 0,
  path = [],
  editKeyInJson,
  collapsed,
  toggleCollapse
}: {
  nestedItem: NestedItem;
  level?: number;
  path?: string[];
  editKeyInJson: (path: string[], newKey: string) => void;
  collapsed: { [key: string]: boolean };
  toggleCollapse: (key: string) => void
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
    <ul className={`ms-10`}>
      {Object.entries(nestedItem)
        .sort(([A], [B]) => naturalSort(A, B))
        .map(([key, value]) => {
          const isLink = typeof value === "string";
          const isEditing = editingKey === key;

          // open all folders by default
          if (!isLink && collapsed[key] === undefined) {
            toggleCollapse(key)
          }

          return (
            <li key={key} id={key} className="mb-2 select-none">
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
                    {"📄"}
                    {' '}
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
                  {collapsed[key] ? "📂" : "📁"}
                  {' '}
                  <span
                    onClick={() => toggleCollapse(key)}
                    className="cursor-pointer hover:underline"
                  >
                    {key}
                  </span>
                  {" "}
                  <span className="text-xs text-gray-400">
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
              {!isLink && collapsed[key] && (
                <Collapsible
                  nestedItem={value as NestedItem}
                  level={level + 1}
                  path={[...path, key]}
                  editKeyInJson={editKeyInJson}
                  collapsed={collapsed}
                  toggleCollapse={toggleCollapse}
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
  loader
}: {
  formatted: NestedItem;
  editKeyInJson: (path: string[], newKey: string) => void;
  saveItem: (name: string, json: NestedItem) => void
  loader: React.ReactNode
}) => {
  const [savename, setSaveName] = React.useState(""); 
  const [collapsed, setCollapsed] = React.useState<{ [key: string]: boolean }>({});

  const toggleCollapse = (key: string) => {
    setTimeout(() => {
      if (collapsed[key]) setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
      else setCollapsed({ ...collapsed, [key]: true });
    }, 0);
  };

  return (
    <>
      <small className="py-8 h-[70vh] w-[40vw] mx-auto overflow-y-scroll bg-slate-900 rounded-lg text-white">
        {loader && <div className="w-full h-full flex justify-center items-center">{loader}</div>}
        <Collapsible nestedItem={formatted} editKeyInJson={editKeyInJson} collapsed={collapsed} toggleCollapse={toggleCollapse} />
      </small>
      <div className="flex justify-center p-3">
        <form>
          <input
            type="text"
            placeholder="save as..."
            value={savename}
            onChange={(e) => setSaveName(e.target.value)}
            className="border-t border-b border-l p-2 rounded-lg outline-none"
          />
          <button
            className="border p-2 hover:bg-gray-200 rounded-lg"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              saveItem(savename, formatted);
              setSaveName("");
            }}
          >
            save
          </button>
        </form>
      </div>
    </>
  );
};

export default CourseDirectory;