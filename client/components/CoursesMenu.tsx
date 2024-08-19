"use client";

import { NestedItem } from "@/app/layout";
import React from "react";

const CoursesMenu = ({
  setJson,
}: {
  setJson: React.Dispatch<React.SetStateAction<NestedItem>>;
}) => {
  const [items, setItems] = React.useState<NestedItem>({});

  React.useEffect(() => {
    // load saved items, if any
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("courser");
      setItems(saved ? JSON.parse(saved) : {});
    }
  }, [window]);

  const deleteItem = (key: string) => {
    // remove item from saved items JSON
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

    // reflect change in items list
    setItems((prev) => {
      const newItems = { ...prev };
      delete newItems[key];
      return newItems;
    });
  };

  return (
    <section
      id="courses-menu"
      className="absolute left-0 top-1/4 ml-2 border-t border-l border-r"
    >
      {Object.entries(items).map(([item, json]) => (
        <div key={item} className="border-b flex justify-between">
          <small
            className="p-2 w-full hover:bg-gray-200 cursor-pointer flex justify-center items-center"
            onClick={() => setJson(json as NestedItem)}
          >
            {item}
          </small>
          <button
            className="border-l p-2 hover:bg-red-200 cursor-pointer"
            onClick={() => deleteItem(item)}
          >
            🗑️
          </button>
        </div>
      ))}
    </section>
  );
};

export default CoursesMenu;
