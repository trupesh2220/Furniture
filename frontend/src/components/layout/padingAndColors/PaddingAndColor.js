import React from 'react'

function PaddingAndColor(props) {
  return (
    <>
      <div className={`${props.className} hover:text-firstColor hover:pl-4d duration-300`}>{props.children}</div>
    </>
  )
}

export default PaddingAndColor
