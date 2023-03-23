import React, { useState } from "react";
import Filed from "./Filed";

function WebNavbar() {
  return (
    <div>
      <div className=" flex justify-between">
        <div>
          <img src={require("../../../assets/4.png")} alt="" />
        </div>
        <div className="flex gap-3 justify-center  items-center relative">
        <Filed
              width={"60"}
              filed1={"Home1"}
              filed2={"Home2"}
              filed3={"Home3"}
              filed4={"Home4"}
            />
            <Filed
              width={'w-full'}
              filed1={"About"}
              filed2={"Home2"}
              filed3={"Home3"}
            />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default WebNavbar;
