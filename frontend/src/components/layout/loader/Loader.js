import React from 'react'

function Loader() {
  return (
    <>
     <div className="flex justify-center items-center h-screen w-full gap-4">
          <div
              class="w-20 h-20 rounded-full animate-spin
                    border-8 border-solid border-firstColor border-t-transparent relative before:absolute before:w-4 before:rounded-full before:h-4 before:top-0 before:bg-firstColor"
            ></div>
        </div> 
    </>
  )
}

export default Loader
