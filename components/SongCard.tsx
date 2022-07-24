import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import { RiPlayListAddFill } from "react-icons/ri";
import { Artist } from "../types";

type Props = {
  imgLink: string;
  songName: string;
  artists: Artist[];
};

const SongCard = ({ imgLink, songName, artists }: Props) => {
  const [artistNames, setArtistNames] = useState<string>("");

  useEffect(() => {
    setArtistNames(artists.map((artist) => artist.name).join(", "));
  }, []);

  return (
    <div className="tooltip p-2 tooltip-primary" data-tip={`${songName} - ${artistNames}`}>
      <div className="card sm:card-side bg-base-100 max-w-[300px] min-w-[300px] sm:min-w-[250px] sm:max-w-[250px] flex-1 shadow-xl hover:scale-105 duration-300">
        <figure className="min-w-[200px]">
          <Image
            loader={() => `${imgLink}`}
            src={imgLink}
            alt="Shoes"
            width={"300px"}
            height={"300px"}
            className="rounded-lg"
          />
        </figure>
        <div className="flex sm:flex-col items-center justify-center sm:gap-5 gap-8  w-full my-3 sm:my-0 ">
          <button>
            <RiPlayListAddFill size={26} className="hover:text-primary" />
          </button>
          <button>
            <TbPlayerPlay size={34} className="hover:text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
