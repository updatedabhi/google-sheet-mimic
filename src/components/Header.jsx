import React from "react";
import logo from "../assets/sheets.png";
import star from "../assets/star.png";
import padlock from "../assets/padlock.png";
import Toolbar from "./Toolbar";

function Header() {
  return (
    <header className="flex flex-col bg-[#f9fbfd] shadow-sm p-2">
      <div className="flex items-center px-4 py-2">
        <div className="flex items-center">
          <img src={logo} alt="Google Sheets Logo" className="h-8 w-8" />
          <div className="ml-3 flex items-center">
            <h3
              className="text-gray-900 text-sm font-medium p-1"
              contentEditable="true"
            >
              Untitled spreadsheet
            </h3>
            <img
              src={star}
              alt="Star Icon"
              className="h-5 w-5 ml-2 cursor-pointer"
            />
          </div>
        </div>

        <ul className="flex ml-10 space-x-4 text-sm text-gray-700">
          {[
            "File",
            "Edit",
            "View",
            "Insert",
            "Format",
            "Data",
            "Tools",
            "Extensions",
            "Help",
          ].map((item) => (
            <li
              key={item}
              className="cursor-pointer px-3 py-2 rounded hover:bg-gray-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="ml-auto">
          <button className="flex items-center gap-2 bg-[#c2e7ff] text-black px-4 py-1 rounded-full border border-[#c2e7ff] shadow-sm hover:bg-[#a8dcff]">
            <img src={padlock} alt="padlock" className="h-4 w-4" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>

      <div className="w-full">
        <Toolbar />
      </div>
    </header>
  );
}

export default Header;
