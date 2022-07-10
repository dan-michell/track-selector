import React from "react";
import Image from "next/image";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { TbPlayerPlay } from "react-icons/tb";
import { RiPlayListAddFill } from "react-icons/ri";

type Props = {};

const SongCard = (props: Props) => {
  return (
    <div className="card sm:card-side bg-base-100 max-w-[200px] min-w-[200px] sm:min-w-[250px] sm:max-w-[250px] flex-1 shadow-xl hover:scale-105 duration-300">
      <figure className="min-w-[200px]">
        <Image
          loader={() => "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"}
          src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
          alt="Shoes"
          width={"200px"}
          height={"200px"}
        />
      </figure>
      <div className="flex sm:flex-col items-center justify-center gap-3 w-full my-2 sm:my-0 ">
        <button>
          <RiPlayListAddFill size={26} className="hover:text-primary" />
        </button>
        <button>
          <TbPlayerPlay size={34} className="hover:text-primary" />
        </button>
      </div>
    </div>
  );
};

export default SongCard;
