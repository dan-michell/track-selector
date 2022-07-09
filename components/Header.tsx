import React from "react";
import { TbVinyl } from "react-icons/tb";
import NoScrollLink from "./NoScrollLink";

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  return (
    <div className="navbar rounded-box justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
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
        <NoScrollLink href={"/"}>
          <div className="btn btn-ghost normal-case text-xl hover:text-primary">
            <TbVinyl size={44} />
          </div>
        </NoScrollLink>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Header;
