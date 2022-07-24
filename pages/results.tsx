import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SongCard from "../components/SongCard";
import Layout from "../components/Layout";

type Props = {};

const Results: React.FC<Props> = (props: Props) => {
  const [songs, setSongs] = useState([]);
  const router = useRouter();
  const { genre, artist, year, tags } = router.query;

  useEffect(() => {
    fetchSongRecommendations();
  }, []);

  const fetchSongRecommendations = async (): Promise<void> => {
    //,artist:${artist},year:${year}
    const searchRes = await fetch(
      `https://api.spotify.com/v1/search?q=genre:${genre}&type=track&include_external=audio&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    const searchData = await searchRes.json();
    console.log(searchData);
    setSongs(searchData.tracks.items);
  };

  const populateSongCards = (): JSX.Element[] => {
    return songs.map((song) => {
      return <SongCard key={song.id} imgLink={song.album.images[1].url} songName={song.name} artists={song.artists} />;
    });
  };

  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="sm:w-[90%] w-[95%] mt-[5vh] flex flex-wrap gap-10 justify-center">{populateSongCards()}</div>
      </div>
    </Layout>
  );
};

export default Results;
