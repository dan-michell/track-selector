/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import Layout from "../components/Layout";
import NoScrollLink from "../components/NoScrollLink";

const Home: NextPage = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash: string = window.location.hash;
    let authToken: string | null = window.localStorage.getItem("token");
    if (!authToken && hash) {
      let urlParams: URLSearchParams = new URLSearchParams(hash.replace("#", "?"));
      authToken = urlParams.get("access_token");
      window.location.hash = "";
      if (typeof authToken === "string") window.localStorage.setItem("token", authToken);
    }
    if (typeof authToken === "string") setToken(authToken);
  }, []);

  const spotifyLogout = (): void => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <Layout>
      <div className="w-full flex justify-center relative">
        <div className="flex flex-col w-full max-w-[1000px] items-center gap-20 px-5 sm:px-0">
          <p className="sm:text-8xl text-6xl text-center mt-[18vh] font-medium duration-300">Find some groovy tunes!</p>
          {token ? (
            <div className="flex items-center justify-center flex-col">
              <NoScrollLink href="/selection">
                <button className="sm:text-6xl text-4xl flex items-center justify-center gap-5 hover:scale-110 duration-300">
                  <p>Let's go </p>
                  <AiOutlineArrowRight size={62} color={"#1cb955"} />
                </button>
              </NoScrollLink>
              <button
                onClick={spotifyLogout}
                className="mt-8 gap-2 flex bg-primary text-secondary px-3 py-2 rounded-2xl text-md hover:scale-105 duration-300"
              >
                <BsSpotify size={24} />
                Logout
              </button>
            </div>
          ) : (
            <a
              href={`${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=${process.env.NEXT_PUBLIC_RES_TYPE}`}
            >
              <button className="sm:text-5xl text-4xl flex items-center justify-center gap-5 hover:scale-110 duration-300">
                <p>Login with</p>
                <BsSpotify size={62} color={"#1cb955"} />
              </button>
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
