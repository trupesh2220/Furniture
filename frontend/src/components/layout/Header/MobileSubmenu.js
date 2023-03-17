import React from 'react'

function MobileSubmenu(props) {
  return (
    <div>
      <div className="relative pt-3 transition-all duration-300 h-full  hidden hover:transition-all hover:duration-300 text-start hover:px-5 text-black hover:text-[#ff324d]     mt-5">
        <div className="w-min group">{props.name} <div className="w-full text-center  transition-all duration-500 h-0.5 hover:bg-[#ff324d]"></div></div>
      </div>
    </div>
  )
}

export default MobileSubmenu
