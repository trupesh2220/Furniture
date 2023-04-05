import React from "react";

function Filed(props) {
  return (
    <>
      <div className="relative group">
        <div className="w-full  h-full py-2   font-bold"><span className="relative before:absolute before:transition-all before:duration-300 before:w-0 group-hover:before:w-full before:h-1  before:left-[50%] group-hover:before:left-0 before:bg-firstColor before:top-5">{props.filed1}</span></div>
        <div
          className={`absolute top-[100%] l-0 w-[260px] space-y-4 py-3  shadow-2xl pl-3 border-l-2 transition-all duration-300 bg-white scale-0 group-hover:scale-100 origin-bottom z-10`}
          // style={{position:"unset",width:"100%"}}
        >
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed2}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed3}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed4}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed5}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed6}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed7}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed8}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed9}</span></div>
          <div className="hover:px-5 transition-all duration-300 hover:text-firstColor group "><span className="relative before:absolute before:w-0 hover:before:w-full before:transition-all before:duration-300 before:bottom-0 before:h-1 before:bg-firstColor py-2">{props.filed10}</span></div>
        </div>
      </div>
    </>
  );
}

export default Filed;
