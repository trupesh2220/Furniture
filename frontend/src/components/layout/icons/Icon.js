import React from 'react'

function Icon(props) {
  return (
    <>
     <div className={`${props.className} w-12 h-12 border-2 transition-all duration-300  hover:border-[#ff324d] hover:text-[#ff324d] border-white text-white flex justify-center items-center rounded-full`}>{props.children}</div> 
    </>
  )
}

export default Icon
