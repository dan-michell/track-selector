import React, { useState } from "react";
import NoScrollLink from "./NoScrollLink";
import Router from "next/router";

type Props = {};

const TextInput = (props: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>, path: string) => {
    e.preventDefault();
    Router.push({
      pathname: path,
      query: { searchValue },
    });
  };

  return (
    <form className="flex w-full justify-center mt-[30vh]">
      <NoScrollLink href="/">
        <input
          type="text"
          placeholder="What genre of music are you looking to explore?"
          className="input sm:w-[70%] sm:text-2xl w-[90%] text-xl py-4 sm:py-8 px-5 sm:rounded-3xl rounded-2xl"
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e, "/results");
            }
          }}
        />
      </NoScrollLink>
    </form>
  );
};

export default TextInput;
