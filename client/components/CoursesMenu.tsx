"use client";

import { NestedItem } from "@/app/layout";
import React from "react";

const CoursesMenu = ({
  setJson,
}: {
  setJson: React.Dispatch<React.SetStateAction<NestedItem>>;
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
  }, [window]);

  const deleteItem = (key: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");

    if (!confirmDelete) {
      return;
    }

    const newJson = Object.fromEntries(
      Object.entries(items).filter(([k]) => k !== key)
    )

    // remove item from saved items JSON
    localStorage.setItem(
      "courser",
      JSON.stringify(newJson)
    );

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
    localStorage.setItem(
      "courser",
      JSON.stringify(newJson)
    );
    
    setItems(newJson);
  };

  return (
    <section
      id="courses-menu"
      className="absolute left-0 top-1/4 ml-2 border-t border-l border-r"
    >
      {Object.entries(items).map(([item, json]) => (
        <div key={item} className="border-b flex justify-between">
          <div className="m-0 p-0 w-[15ch] flex justify-center items-center text-center">
            {
              editingItem === item ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateItem(item, newKey);
                    setEditingItem("");
                  }}
                >
                  <small>
                    <input
                      type="text"
                      value={newKey ? newKey : item}
                      onChange={(e) => setNewKey(e.target.value)}
                      className="p-2 w-full"
                      autoFocus
                    />
                  </small>
                </form>
              ) : (
                <small
                  className="p-2 w-full hover:bg-gray-200 cursor-pointer"
                  onClick={() => setJson(json as NestedItem)}
                >
                  {item}
                </small>
              )
            }
          </div>
          <button
            className="border-l p-2 hover:bg-red-200 cursor-pointer"
            onClick={() => deleteItem(item)}
          >
            🗑️
          </button>
          <button
            className="border-l p-2 hover:bg-green-200 cursor-pointer"
            onClick={() => setEditingItem(item)}
          >
            ✒️
          </button>
        </div>
      ))}
    </section>
  );
};

export default CoursesMenu;
