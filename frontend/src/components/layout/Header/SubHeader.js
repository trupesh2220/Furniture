import React, { useState } from "react";
import SubHeaderLine from "./SubHeaderLine";

function SubHeader(props) {
  // const [subName, setSubName] = useState([
  //   { id: 1, name: "HOME" },
  //   { id: 2, name: "PAGES" },
  //   { id: 3, name: "PRODUCT" },
  //   { id: 4, name: "BLOGS" },
  //   { id: 5, name: "SHOP" },
  //   { id: 6, name: "CONTACT US" },
  // ]);
  return (
    <>
      <div className="group  group-hover:transition-all pt-1 bg-transparent  transition-all duration-300 group-hover:duration-300 group-hover:visible absolute   top-[200%] left-[-10%]    group-hover:opacity-100 group-hover:top-[100%] invisible  shadow-2xl  rounded-lg  w-60   opacity-0  font-semibold ">
        <div className="pl-4 border-b-2 border-l-2 border-r-2  border-[#ff324d] bg-white">
          <SubHeaderLine name={"Home1"} />
          <SubHeaderLine name={"Home2"} />
          <SubHeaderLine name={"Home3"} />
          <SubHeaderLine name={"Home4"} />
          <SubHeaderLine name={"Home5"} />
        </div>
      </div>
    </>
  );
}

export default SubHeader;
