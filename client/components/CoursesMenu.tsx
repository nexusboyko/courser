"use client";

import React from "react";
import { motion } from "framer-motion";

import { NestedItem } from "@/lib/utils";

const CoursesMenu = ({
  setJson,
  toast
}: {
  setJson: React.Dispatch<React.SetStateAction<NestedItem>>;
  toast: boolean;
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
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: { 
          opacity: 0, 
          translateX: -100 
        },
        show: {
          translateX: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.3,
            ease: "easeIn",
          },
        }
      }}
      id="courses-menu"
      className="absolute left-0 top-1/4 ml-2"
    >
      {
        Object.keys(items).length !== 0 &&
        <div className="flex flex-col justify-center items-center p-2 text-base">
          <p className="text-2xl">🗃️</p>
          <p className="text-center text-base font-semibold">my courses</p>
        </div>
      }
      <div className="border-t border-l border-r rounded-lg">
        {Object.entries(items).map(([item, json]) => (
          <div key={item} className="border-b last:rounded-b-lg flex justify-between">
            <div className="m-0 p-0 w-[15ch] flex justify-center items-center text-center hover:bg-gray-200">
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
                    className="p-2 w-full cursor-pointer"
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
      </div>
    </motion.section>
  );
};

export default CoursesMenu;
