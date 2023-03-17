import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import SubHeader from "./SubHeader";

function MainHeader(props) {
  return (
    <>
      <div className="flex justify-center items-center group relative before:absolute before:w-[0%] before:h-1 before:transition-all before:duration-300  before:hover:w-[100%] before:bg-[#ff324d] before:top-[100%]  font-bold hover:text-[#ff324d]">
        <div className="">{props.name}</div>
        <div className="-rotate-90 group-hover:rotate-0 transition-all duration-300">
          <AiFillCaretDown />
        </div>
        <SubHeader  />
      </div>
    </>
  );
}

export default MainHeader;
