import React from "react";
import Image from "next/image";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import { RiPlayListAddFill } from "react-icons/ri";

type Props = {};

const SongCard = (props: Props) => {
  return (
    <div className="card sm:card-side bg-base-100 min-w-[300px] max-w-[300px] flex-1 shadow-xl">
      <figure className="min-w-[250px]">
        <Image
          loader={() => "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"}
          src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          alt="Shoes"
          width={"250px"}
          height={"250px"}
        />
      </figure>
      <div className="flex sm:flex-col items-center justify-center gap-3 w-full my-2 sm:my-0">
        <RiPlayListAddFill size={26} />
        <TbPlayerPlay size={34} />
      </div>
    </div>
  );
};

export default SongCard;
