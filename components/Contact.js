import React from 'react'
import  Image  from 'next/image';

function Contact({src , name }) {
  return (
    <div className='cursor-pointer p-2 rounded-xl flex items-center space-x-3 mb-2 relative hover:bg-gray-200'>
        <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
        alt={name}
         />
         <p>{name}</p>
         <div className="h-3 w-3 animate-bounce rounded-full  absolute bottom-2 left-7 bg-green-400"></div>
    </div>
  )
}

export default Contact