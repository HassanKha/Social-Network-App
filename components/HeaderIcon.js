import React from 'react'
import Image from "next/image";

function HeaderIcon({Icon, active}) {
  return (
    <div className='active:border-b-2 group active:border-blue-500 cursor-pointer md:hover:bg-gray-100 rounded-xl flex items-center md:px-10 sm:h-14'>
        <Icon className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && 'text-blue-500' }`} />
    </div>
  )
}

export default HeaderIcon