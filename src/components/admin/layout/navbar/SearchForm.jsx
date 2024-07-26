"use client";
import React from "react";
import SearchBtn from "./SearchBtn";
import InputElem from "../../../InputElem";
import { useState } from "react";
export default function SearchForm() {
  const [searchVal, setSearchValue] = useState("");
  function formSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={formSubmitHandler}
      className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200"
    >
      <SearchBtn />

      <InputElem
        name={"search"}
        type={"search"}
        placeholder={"search"}
        id="search"
        value={searchVal}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}
