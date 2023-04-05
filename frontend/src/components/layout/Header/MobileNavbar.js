import React, { useState } from "react";
import Filed from "./Filed";
import MegaFiled from "./MegaFiled";
import { BsSearch, BsFillCartCheckFill } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai";
import {GrFormClose} from "react-icons/gr";

function MobileNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const setMobileM = ()=>{
    setMobileMenu(!mobileMenu)
  }
  return (
    <div>
      <div className=" flex justify-between relative">
        <div>
          <img src={require("../../../assets/4.png")} alt="" />
        </div>

        <div className="flex items-center justify-center gap-5 ">
          <div className="hover:text-firstColor font-extrabold text-[23px]">
            <BsSearch />
          </div>
          <div className="hover:text-firstColor text-[23px] relative group">
            <BsFillCartCheckFill />
            <div className="border-2 border-black w-5 h-5 rounded-full absolute flex justify-center items-center text-[10px] top-[-50%] left-[50%] group-hover:border-firstColor">
              2
            </div>
          </div>
          {!mobileMenu && <div onClick={setMobileM } className="hover:text-firstColor font-extrabold text-[23px]">
            <AiOutlineMenu />
          </div>}
          {mobileMenu && <div onClick={setMobileM } className="hover:text-firstColor font-extrabold text-[23px]">
            <GrFormClose />
          </div>}
        </div>
      </div>
      {mobileMenu && (
        <div  className="flex-col gap-3 justify-center  items-center ">
          <Filed
            width={"60"}
            filed1={"HOME"}
            filed2={"Home1"}
            filed3={"Home2"}
            filed4={"Home3"}
            filed5={"Home4"}
            filed6={"Home5"}
          />
          <Filed
            width={"w-full"}
            filed1={"ABOUT"}
            filed2={"About1"}
            filed3={"About2"}
          />
          <Filed
            width={"w-full"}
            filed1={"PRODUCTS"}
            filed2={"Product1"}
            filed3={"Product2"}
            filed4={"Product3"}
            filed5={"Product4"}
            filed6={"Product5"}
            filed7={"Product6"}
          />
          <Filed
            width={"w-full"}
            filed1={"BLOGS"}
            filed2={"Blogs1"}
            filed3={"Blogs2"}
            filed4={"Blogs3"}
          />
          <MegaFiled
            filed="SHOPS"
            M1F1="First Shop1"
            M1F2="First Shop2"
            M1F3="First Shop3"
            M1F4="First Shop4"
            M1F5="First Shop5"
            M1F6="First Shop6"
            M1F7="First Shop7"
            M2F1="Second Shop1"
            M2F2="Second Shop2"
            M2F3="Second Shop3"
            M2F4="Second Shop4"
            M2F5="Second Shop5"
            M2F6="Second Shop6"
            M2F7="Second Shop7"
            M3F1="Third Shop1"
            M3F2="Third Shop2"
            M3F3="Third Shop3"
            M3F4="Third Shop4"
            M3F5="Third Shop5"
            M3F6="Third Shop6"
            M3F7="Third Shop7"
            M4F1="Fourth Shop1"
            M4F2="Fourth Shop2"
            M4F3="Fourth Shop3"
            M4F4="Fourth Shop4"
            M4F5="Fourth Shop5"
            M4F6="Fourth Shop6"
            M4F7="Fourth Shop7"
          />
          <Filed
            width={"w-full"}
            filed1={"CONTACT US"}
            filed2={"Contact us With Dm"}
            filed3={"Contact us With Hr"}
          />
        </div>
      )}
    </div>
  );
}

export default MobileNavbar;
