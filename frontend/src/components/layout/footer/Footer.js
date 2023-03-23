import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import Icon from "../icons/Icon";
import PaddingAndColor from "../colorHover/ColorHover";

function Footer() {
  return (
    <>
      <div className="bg-[#000000]">
        <div className="py-28">
          <div className="container md:cpx-10 mx-auto">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg lg:grid-cols-3 xl:grid-cols-4 px-7 text-white text-2xl font-bold">

              <div className="text-center md:text-start">
                <PaddingAndColor>Contact Info </PaddingAndColor>
                <div className="text-base font-light space-y-3 pt-10">
                  <PaddingAndColor>123 Street, Old Trafford, NewYork, USA</PaddingAndColor>
                  <PaddingAndColor> info@sitename.com</PaddingAndColor>
                  <PaddingAndColor> + 457 789 789 65</PaddingAndColor>
                  <div className="flex justify-around  md:justify-between  md:w-[80%]">
                    <Icon>
                      <FaFacebookF />
                    </Icon>

                    <Icon>
                      <BsInstagram />
                    </Icon>
                    <Icon>
                      <BsWhatsapp />
                    </Icon>
                    <Icon>
                      <BsLinkedin />
                    </Icon>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-start">
                <PaddingAndColor>Useful Links </PaddingAndColor>
                <div className="text-base font-light space-y-3 pt-10">
                  <PaddingAndColor>About Us</PaddingAndColor>
                  <PaddingAndColor>FAQ</PaddingAndColor>
                  <PaddingAndColor>Location</PaddingAndColor>
                  <PaddingAndColor>Affiliates</PaddingAndColor>
                  <PaddingAndColor>Contact</PaddingAndColor>
                </div>
              </div>
              <div className="text-center md:text-start">
                <PaddingAndColor>My Account </PaddingAndColor>
                <div className="text-base font-light space-y-3 pt-10">
                  <PaddingAndColor>About Us</PaddingAndColor>
                  <PaddingAndColor>FAQ</PaddingAndColor>
                  <PaddingAndColor>Location</PaddingAndColor>
                  <PaddingAndColor>Affiliates</PaddingAndColor>
                  <PaddingAndColor>Contact</PaddingAndColor>
                </div>
              </div>
              <div className="text-center md:text-start">
                <PaddingAndColor>Subscribe Our Newsletter </PaddingAndColor>
                <div className="text-base font-light space-y-3 pt-10">
                  <PaddingAndColor className="text-justify">
                    If you want to get an email from us every time we have a new
                    special offer, then sign up here!
                  </PaddingAndColor>
                  <div className="w-full h-12 p-2 rounded-full bg-white flex justify-between items-center ">
                    <input
                      className="outline-none text-black pl-5 w-[80%] "
                      placeholder="Enter Email Address"
                      type="text"
                    />
                    <div className="w-11 h-11    text-[#ff324d]   flex justify-center items-center rounded-full">
                      <MdAttachEmail />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
