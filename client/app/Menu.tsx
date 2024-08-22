"use client";

import React from 'react'

type MenuProps = {
  CourseSearch: React.ReactNode;
  CourseDirectory: React.ReactNode;
  CoursesMenu: React.ReactNode;
  isDarkMode: boolean;
}

const Menu = ({ CourseSearch, CourseDirectory, CoursesMenu, isDarkMode }: MenuProps) => {
  return (
      <div className={`flex flex-col h-full w-full border rounded-lg ${isDarkMode ? "border-slate-800" : "border-gray-200"}`}>
        {/* search bar */}
        <div className={`flex items-center justify-between border-b ${isDarkMode ? "bg-[#111c35] text-white border-slate-800" : "bg-gray-50 text-black border-gray-200"} rounded-t-lg`}>
          {CourseSearch}
        </div>

        {/* JSON explorer */}
        <div className="grid grid-cols-[300px_1fr] w-full h-full overflow-auto">
          <div className={`flex flex-col border-r overflow-auto ${isDarkMode ? "bg-[#111c35] text-white border-slate-800" : "text-black border-gray-200"} rounded-bl-lg`}>
            {/* items list header */}
            <div className={`flex items-center justify-between border-b ${isDarkMode ? "border-slate-800" : "border-gray-200"}`}>
              <div className="flex items-center justify-between">
                <button type="button" className={`p-2 border-r ${isDarkMode ? "hover:bg-slate-800 border-slate-800" : "hover:bg-gray-200 border-gray-200"}`}>
                  🗃️
                </button>
                <h2 className="text-base font-medium px-4 py-2">my courses</h2>
              </div>
            </div>

            {/* items list */}
            <div className={`w-[100%] overflow-auto ${isDarkMode ? "bg-[#111c35] text-white" : "bg-gray-50 text-black"}`}>
              {CoursesMenu}
            </div>
          </div>
          {/* JSON editor */}
          <div className="flex flex-col overflow-auto">
            {/* main view */}
            <div className={`flex-1 overflow-auto ${isDarkMode ? "bg-slate-900 text-white" : "bg-gray-50 text-black"} rounded-br-lg`}>
                {CourseDirectory}
            </div>
            {/* toolbar? */}
            {/* <footer className="top-0 z-10 flex items-center justify-between border-t">
              <h1 className="text-base font-medium px-4 py-2">courser</h1>
              <button className="border-l border-gray-200 hover:bg-gray-200 p-2" onClick={() => {}}>
                💾
              </button>
            </footer> */}
          </div>
        </div>
      </div>
  )
}

export default Menu;