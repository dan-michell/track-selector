import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import TextInput from "../components/TextInput";
import NoScrollLink from "../components/NoScrollLink";
import Router from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";

const Selection: React.FC = () => {
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, path: string) => {
    e.preventDefault();
    Router.push({
      pathname: path,
      query: searchParams,
    });
  };

  const handleSearchInput = (attribute: string, value: string): void => {
    setSearchParams({
      ...searchParams,
      [attribute]: value,
    });
  };

  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] w-[95%] flex flex-col items-center">
          <h1 className="sm:text-5xl text-4xl mt-[6vh] self-start duration-300">Feeling a specific...</h1>
          <form className="flex flex-col items-center py-10 px-6 gap-10 max-w-[900px] w-full">
            <div className="flex flex-col items-center w-full gap-5">
              <label className="self-start sm:text-3xl text-2xl duration-300">Genre?</label>
              <TextInput placeholder="Type a genre..." type={"genre"} handleSearchInput={handleSearchInput} />
            </div>
            <div className="flex flex-col items-center w-full gap-5">
              <label className="self-start sm:text-3xl text-2xl duration-300">Artist?</label>
              <TextInput placeholder="Type an artist..." type={"artist"} handleSearchInput={handleSearchInput} />
            </div>
            <div className="flex flex-col items-center w-full gap-5">
              <label className="self-start sm:text-3xl text-2xl duration-300">Year?</label>
              <TextInput placeholder="Type a year..." type={"year"} handleSearchInput={handleSearchInput} />
            </div>
            <div className="flex flex-col items-center w-full gap-5">
              <label className="self-start sm:text-3xl text-2xl duration-300s">Tags?</label>
              <TextInput
                placeholder="e.g. 'new', 'retro', 'hipster'"
                type={"tags"}
                handleSearchInput={handleSearchInput}
              />
            </div>
          </form>
          <NoScrollLink href={"/"}>
            <button
              onClick={(e) => {
                handleSearch(e, "/results");
              }}
              className="sm:text-5xl text-4xl font-light flex items-center justify-center gap-5 hover:scale-110 duration-300 mb-5"
            >
              <p>Explore</p>
              <AiOutlineArrowRight size={42} color={"#1cb955"} />
            </button>
          </NoScrollLink>
        </div>
      </div>
    </Layout>
  );
};

export default Selection;
