import React from 'react'

function PaddingAndColor(props) {
  return (
    <>
      <div className={`${props.className} hover:text-firstColor transition-all duration-300 group`}>
        <span className='relative before:absolute before:transition-all before:duration-300 before:w-0 hover:before:w-full before:h-1 before:right-0 hover:before:left-0 before:bg-firstColor before:top-[100%]'>{props.children}</span>
      </div>
    </>
  )
}

export default PaddingAndColor
