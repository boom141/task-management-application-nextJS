import React from 'react'

export default function Loader() {
  return (
    <div className="absolute gap-y-3 flex-col w-full h-full flex justify-center items-center bg-[#1c2637ab] bg-opacity-30 z-[1000]">
        <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
        </div>
        Loading
    </div>
  )
}
