import type { NextPage } from "next";
import { AiOutlineArrowRight } from "react-icons/ai";
import Layout from "../components/Layout";
import NoScrollLink from "../components/NoScrollLink";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="flex flex-col w-full max-w-[1000px] items-center gap-20 px-5 sm:px-0">
          <p className="sm:text-8xl text-5xl text-center mt-[24vh] font-semibold duration-300">
            Find some groovy tunes!
          </p>
          <NoScrollLink href={"/selection"}>
            <button className="sm:text-6xl text-4xl font-light flex items-center justify-center gap-5 hover:scale-110 duration-300">
              <p>Let's go </p>
              <AiOutlineArrowRight size={62} color={"#1cb955"} />
            </button>
          </NoScrollLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
