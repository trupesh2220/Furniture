import React, { useEffect, useState } from "react";
import asset4 from "../../../assets/asset 4.png";
import MainHeader from "./MainHeader";
// import MainHeader
import SubHeader from "./SubHeader";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import MobileMenuHeader from "./MobileMenuHeader";
// import { AiOutlineShoppingCart,BiSearchAlt2 } from "@react-icons/all-files/fa/FaBeer";
function Header() {
  const [scroll, setScroll] = useState("");

  const [mobileMenu, setMobileMenu] = useState(false);
  const [layer, setLayer] = useState(false);
  // const [show, setShow] = useState(false);
  const [mobileButton, setMobileButton] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [header, setHeader] = useState([
    { id: 1, name: "HOME" },
    { id: 2, name: "PAGES" },
    { id: 3, name: "PRODUCT" },
    { id: 4, name: "BLOGS" },
    { id: 5, name: "SHOP" },
    { id: 5, name: "CONTACT US" },
  ]);
  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };
  useEffect(() => {
    setMobileButton(!mobileButton);
    return () => {};
  }, [mobileMenu]);
  const changeBackgroundHandler = () => {
    setLayer(!layer);
  };
  const Menu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div>
      <div onScroll={handleScroll} className="top-0  fixed bg-white w-full">
        <div className="container md:px-10 mx-auto">
          <div className={`hidden md:block`}>
            <div
              className=" flex  justify-between md:visible invisible  gap-10 md:text-[11px] lg:text-[15px] 
           h-full"
            >
              <div className=" py-2">
                <img
                  className="hover:scale-90 transition-all duration-300 animate-"
                  src={asset4}
                  alt=""
                />
              </div>
              <div className="flex  gap-5 justify-center items-center">
                
                 <MainHeader name={"HOME"} />
                 <MainHeader name={"PAGES"} />
                 <MainHeader name={"PRODUCT"} />
                 <MainHeader name={"BLOGS"} />
                 <MainHeader name={"SHOP"} />
                 <MainHeader name={"CONTACT US"} />

                <SubHeader />
              </div>
              <div className="flex justify-center items-center gap-x-5 text-firstColor text-[25px] ">
                <div onClick={changeBackgroundHandler}>
                  <BiSearchAlt2 />
                </div>
                <div>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>
          </div>
          <div className=" block md:hidden ">
            <div className="flex justify-between p-4">
              <div>
                <img className="w-32" src={asset4} alt="" />
              </div>
              <div>
                <div className="flex justify-center items-center gap-x-5 text-[#ff324d] text-[25px] ">
                  <div onClick={changeBackgroundHandler}>
                    <BiSearchAlt2 />
                  </div>
                  <div>
                    <AiOutlineShoppingCart />
                  </div>
                  <div onClick={Menu} className="w-full">
                    {!mobileMenu && (
                      <div className="w-[30px]">
                        <AiOutlineMenu />
                      </div>
                    )}

                    {mobileMenu && (
                      <div className="text-[15px] w-[30px] pl-2">
                        <ImCross />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {mobileMenu && (
              <div
                className={`shadow-lg w-full transition-all duration-500   ${
                  mobileButton ? "scale-0" : "scale-100"
                } space-y-3 px-6`}
              >
                {header.map((h, index) => {
                  return (
                    <div key={index}>
                      <MobileMenuHeader name={h.name} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-b-2"></div>
      {layer && (
        <div className="w-full h-full  overflow-hidden fixed   top-0 left-0 transition duration-500    bg-[black] opacity-90">
          <div className="flex justify-center items-center w-full ">
            <div
              className=" px-8 flex justify-end md:w-[60%] mx-auto h-[50%] absolute items-end text-white"
              onClick={() => setLayer(!layer)}
            >
              <ImCross />
            </div>
          </div>
          <div className=" flex justify-between items-center px-5  h-full md:w-[60%] mx-auto">
            <div className="w-full">
              <input
                type="text"
                className="focus:outline-none w-full transition-all duration-300 placeholder:transition-all bg-transparent h-full placeholder:hover:text-[#ff324d]  placeholder:text-3xl text-3xl placeholder:font-serif font-serif text-white placeholder: "
                placeholder="Search"
              />
              <div className="w-full h-0.5 mt-5 bg-white"></div>
            </div>
            <div className="">
              <div>
                <div
                  className="text-white  text-[25px]   transition-all duration-300 hover:text-[#ff324d]"
                  // onClick={() => setShow(!show)}
                >
                  <BiSearchAlt2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="my-16"></div>
      <div>
      </div>
    </div>
  );
}

export default Header;
