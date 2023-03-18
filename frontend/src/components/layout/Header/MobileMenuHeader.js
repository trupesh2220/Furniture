import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MobileSubmenu from "./MobileSubmenu";
import SubHeaderLine from "./SubHeaderLine";

function MobileMenuHeader(props) {
  return (
    <>
      <div>
        <div className="flex justify-between items-center bg-white">
          <div className="">{props.name}</div>
          <div>
            <AiFillCaretDown />
          </div>{" "}
        </div>
        <div className="">
          <MobileSubmenu name={"Home1"} />
          <MobileSubmenu name={"Home1"} />
          <MobileSubmenu name={"Home1"} />
          <MobileSubmenu name={"Home1"} />
          <MobileSubmenu name={"Home1"} />
          <MobileSubmenu name={"Home1"} />
        </div>
      </div>
    </>
  );
}

export default MobileMenuHeader;
