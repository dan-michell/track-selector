import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { TbVinyl } from "react-icons/tb";
import NoScrollLink from "./NoScrollLink";

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  return (
    <div className="navbar rounded-box justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle hover:text-primary">
            <RiMenu2Fill size={24} />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-accent">
            <li>
              <NoScrollLink href={"/"}>
                <a>Home</a>
              </NoScrollLink>
            </li>
            <li>
              <NoScrollLink href={"/profile"}>
                <a>Profile</a>
              </NoScrollLink>
            </li>
            <li>
              <NoScrollLink href={"/about"}>
                <a>About</a>
              </NoScrollLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <TbVinyl size={44} />
      </div>
      <div className="navbar-end">
        <NoScrollLink href={"/"}>
          <div className="btn btn-ghost normal-case text-xl hover:text-primary">
            <BiHomeAlt size={28} />
          </div>
        </NoScrollLink>
      </div>
    </div>
  );
};

export default Header;
