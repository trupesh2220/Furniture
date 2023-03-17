import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="bg-[#000000]">
        <div className="py-28">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-4 px-7 text-white text-2xl font-bold">
              <div className="text-center sm:text-start">
                <div>Contact Info </div>
                <div className="text-base font-light space-y-3 pt-10">
                  <div>123 Street, Old Trafford, NewYork, USA</div>
                  <div> info@sitename.com</div>
                  <div> + 457 789 789 65</div>
                  <div className="flex justify-around  sm:justify-between sm:w-[80%]">
                    <div className="w-12 h-12 border-2 transition-all duration-300 hover:scale-110 scale-95 hover:border-[#ff324d] hover:text-[#ff324d] border-white text-white flex justify-center items-center rounded-full"><FaFacebookF /></div>
                    <div className="w-12 h-12 border-2 transition-all duration-300 hover:scale-110 scale-95 hover:border-[#ff324d] hover:text-[#ff324d] border-white text-white flex justify-center items-center rounded-full"><BsInstagram /></div>
                    <div className="w-12 h-12 border-2 transition-all duration-300 hover:scale-110 scale-95 hover:border-[#ff324d] hover:text-[#ff324d] border-white text-white flex justify-center items-center rounded-full"><BsWhatsapp /></div>
                    <div className="w-12 h-12 border-2 transition-all duration-300 hover:scale-110 scale-95 hover:border-[#ff324d] hover:text-[#ff324d] border-white text-white flex justify-center items-center rounded-full"><BsLinkedin /></div>
                  </div>
                </div>
              </div>
              <div className="text-center sm:text-start">
                <div>Useful Links </div>
                <div className="text-base font-light space-y-3 pt-10">
                  <div>About Us</div>
                  <div> FAQ</div>
                  <div> Location</div>
                  <div> Affiliates</div>
                  <div> Contact</div>
                </div>
              </div>
              <div className="text-center sm:text-start">
                <div>My Account </div>
                <div className="text-base font-light space-y-3 pt-10">
                  <div>About Us</div>
                  <div> FAQ</div>
                  <div> Location</div>
                  <div> Affiliates</div>
                  <div> Contact</div>
                </div>
              </div>
              <div className="text-center sm:text-start">
                <div>Subscribe Our Newsletter </div>
                <div className="text-base font-light space-y-3 pt-10">
                  <div className="text-justify">
                    If you want to get an email from us every time we have a new
                    special offer, then sign up here!
                  </div>
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
