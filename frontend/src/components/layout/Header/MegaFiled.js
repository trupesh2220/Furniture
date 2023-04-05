import React from "react";
import './MoblieNavbar.css'
function MegaFiled(props) {
  return (
    <>
      <div className=" group p " >
        <div className="w-full  h-full py-2 ">
          <span className="relative before:absolute before:transition-all before:duration-300 before:w-0 group-hover:before:w-full before:h-1 before:bottom-0 before:left-[50%] group-hover:before:left-0 before:bg-firstColor font-bold before:top-5">{props.filed}</span>
        </div>
        <div
          className={`absolute top-[90%] left-0 w-[100%] space-y-4 pt-3  shadow-2xl  transition-all duration-300 bg-white scale-0 group-hover:scale-100 origin-bottom z-10`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="md:border-l-2 border-b-2 md:border-b-0 border-b-firstColor pb-3 pl-5 md:pl-10 space-y-2">
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M1F1}
                  
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M1F2}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M1F3}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M1F4}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M1F5}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M1F6}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M1F7}
                </span>
              </div>
            </div>

            <div className="md:border-l-2 border-b-2 md:border-b-0 border-b-firstColor pb-3 pl-5 md:pl-10 space-y-2">
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M2F1}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M2F2}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M2F3}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M2F4}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M2F5}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M2F6}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M2F7}
                </span>
              </div>
            </div>

            <div className="md:border-l-2 border-b-2 md:border-b-0 border-b-firstColor pb-3 pl-5 md:pl-10 space-y-2">
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M3F1}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M3F2}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M3F3}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M3F4}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M3F5}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M3F6}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M3F7}
                </span>
              </div>
            </div>
            
            <div className="md:border-l-2 border-b-2 md:border-b-0 border-b-firstColor pb-3 pl-5 md:pl-10 space-y-2">
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M4F1}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M4F2}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M4F3}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M4F4}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M4F5}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M4F6}
                </span>
              </div>
              <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group ">
                <span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">
                  {props.M4F7}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MegaFiled;
