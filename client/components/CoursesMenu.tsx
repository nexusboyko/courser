"use client";

import React from "react";

import { NestedItem } from "@/lib/utils";

const CoursesMenu = ({
  setJson,
  toast,
  isDarkMode,
}: {
  setJson: React.Dispatch<React.SetStateAction<NestedItem>>;
  toast: boolean;
  isDarkMode: boolean;
}) => {
  const [items, setItems] = React.useState<NestedItem>({});
  const [editingItem, setEditingItem] = React.useState<string>("");
  const [newKey, setNewKey] = React.useState<string>("");

  React.useEffect(() => {
    // load saved items, if any
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("courser");
      setItems(saved ? JSON.parse(saved) : {});
    }
  }, [toast]);

  const deleteItem = (key: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) {
      return;
    }

    const newJson = Object.fromEntries(
      Object.entries(items).filter(([k]) => k !== key)
    );

    // remove item from saved items JSON
    localStorage.setItem("courser", JSON.stringify(newJson));

    // reflect change in items list
    setItems((prev) => {
      const newItems = { ...prev };
      delete newItems[key];
      return newItems;
    });
  };

  const updateItem = (key: string, newKey: string) => {
    const newJson = Object.fromEntries(
      Object.entries(items).map(([k, v]) => [k === key ? newKey : k, v])
    );

    // update item in saved items JSON
    localStorage.setItem("courser", JSON.stringify(newJson));

    setItems(newJson);
  };

  return (
    <>
      {Object.entries(items).map(([item, json]) => (
        <div
          key={item}
          className={`w-full border-b ${
            isDarkMode ? "border-slate-800" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            {editingItem === item ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateItem(item, newKey);
                  setEditingItem("");
                }}
                className="px-4 py-2 w-full"
              >
                <small>
                  <input
                    type="text"
                    value={newKey ? newKey : item}
                    onChange={(e) => setNewKey(e.target.value)}
                    onBlur={() => setEditingItem("")}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setEditingItem("");
                      }
                    }}
                    className={`outline-none italic ${
                      isDarkMode ? "bg-[#111c35]" : ""
                    }`}
                    autoFocus
                  />
                </small>
              </form>
            ) : (
              <div
                className={`w-full hover:cursor-pointer px-4 py-2 ${
                  isDarkMode ? "hover:bg-slate-800" : "hover:bg-gray-200"
                }`}
                onClick={() => setJson(json as NestedItem)}
              >
                <small>{item}</small>
              </div>
            )}
            <>
              <button
                type="button"
                className={`border-l p-2 ${
                  isDarkMode
                    ? "border-slate-800 hover:bg-slate-800"
                    : "border-gray-200 hover:bg-gray-200"
                }`}
                onClick={() => deleteItem(item)}
              >
                🗑️
              </button>
              <button
                type="button"
                className={`border-l p-2 ${
                  isDarkMode
                    ? "border-slate-800 hover:bg-slate-800"
                    : "border-gray-200 hover:bg-gray-200"
                }`}
                onClick={() => setEditingItem(item)}
              >
                ✒️
              </button>
            </>
          </div>
        </div>
      ))}
    </>
  );
};

export default CoursesMenu;
