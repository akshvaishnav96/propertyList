"use client";

import HeaderAdminLogo from "./navbar/HeaderAdminLogo";
import React, { useCallback, useState } from "react";

import SearchFrom from "./navbar/SearchForm";

export default function layoutMain({ children, SideBarMain, LogoutBtn }) {
  const [mode, setMode] = useState("dark");

  let lightMode = useCallback(function lightMode() {
    setMode("light");
  }, []);

  let darkMode = useCallback(function darkMode() {
    setMode("dark");
  }, []);

  return (
    <>
      <div className={mode}>
        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
          <HeaderAdminLogo
            imageUrl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
            }
            text={"ADMIN"}
          />
          <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
            <SearchFrom />
            <ul className="flex items-center">
              <li>
                <button
                  aria-hidden="true"
                  className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                >
                  <svg
                    x-show="isDark"
                    width="24"
                    height="24"
                    className={` ${
                      mode === "dark" ? "" : "hidden"
                    } fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke=""
                    onClick={lightMode}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <svg
                    x-show="!isDark"
                    width="24"
                    height="24"
                    className={` ${
                      mode === "light" ? "" : "hidden"
                    } fill-current  text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke=""
                    onClick={darkMode}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
              </li>
              <li>{LogoutBtn}</li>
            </ul>
          </div>
        </div>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          {SideBarMain}

          {children}
        </div>
      </div>
    </>
  );
}
