import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Menu = ({ setPage }) => {
  const [menu, setMenu] = useState(1);

  return (
    <div>
      <div className="bg-[#3D57C8] w-[38vh] h-[90vh] rounded-3xl grid place-items-center">
        <div className="flex flex-col ml-10 ">
          <div
            className="flex items-center justify-between w-full"
            onClick={(e) => {
              setMenu(1);
              setPage(1);
            }}
          >
            <span
              className={
                menu == 1
                  ? `mt-3 text-white font-medium cursor-pointer`
                  : "mt-3 text-slate-400 font-medium cursor-pointer"
              }
            >
              Profile
            </span>
            <div className="w-36"></div>
            <div
              className={
                menu == 1
                  ? `w-14 h-8 bg-white rounded-l-full grid place-items-center`
                  : `hidden`
              }
            >
              <AiOutlineArrowRight />
            </div>
          </div>

          <hr className="w-36 mt-2" />
          <div
            className="flex items-center justify-between w-full"
            onClick={(e) => {
              setMenu(2);
              setPage(2);
            }}
          >
            <span
              className={
                menu == 2
                  ? `mt-3 text-white font-medium cursor-pointer`
                  : "mt-3 text-slate-400 font-medium cursor-pointer"
              }
            >
              Posts
            </span>
            <div className="w-36"></div>
            <div
              className={
                menu == 2
                  ? `w-14 h-8 bg-white rounded-l-full grid place-items-center`
                  : `hidden`
              }
            >
              <AiOutlineArrowRight />
            </div>
          </div>
          <hr className="w-36 mt-2" />
          <div
            className="flex items-center justify-between w-full"
            onClick={(e) => {
              setMenu(3);
              setPage(3);
            }}
          >
            <span
              className={
                menu == 3
                  ? `mt-3 text-white font-medium cursor-pointer`
                  : "mt-3 text-slate-400 font-medium cursor-pointer"
              }
            >
              Gallery
            </span>
            <div className="w-36"></div>
            <div
              className={
                menu == 3
                  ? `w-14 h-8 bg-white rounded-l-full grid place-items-center`
                  : `hidden`
              }
            >
              <AiOutlineArrowRight />
            </div>
          </div>
          <hr className="w-36 mt-2" />
          <div
            className="flex items-center justify-between w-full"
            onClick={(e) => {
              setMenu(4);
              setPage(4);
            }}
          >
            <span
              className={
                menu == 4
                  ? `mt-3 text-white font-medium cursor-pointer`
                  : "mt-3 text-slate-400 font-medium cursor-pointer"
              }
            >
              Todo
            </span>
            <div className="w-36"></div>
            <div
              className={
                menu == 4
                  ? `w-14 h-8 bg-white rounded-l-full grid place-items-center`
                  : `hidden`
              }
            >
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
