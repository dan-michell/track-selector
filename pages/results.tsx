import React from "react";
import { useRouter } from "next/router";
import SongCard from "../components/SongCard";
import Layout from "../components/Layout";

type Props = {};

const Results: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const { searchValue } = router.query;

  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="sm:w-[90%] w-[95%] mt-[5vh] flex flex-wrap gap-10 justify-center">
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
    </Layout>
  );
};

export default Results;
