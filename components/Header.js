import React from 'react'
import Image from "next/image";

import {
    FlagIcon,PlayIcon,SearchIcon,ShoppingCartIcon
} from "@heroicons/react/outline"
import {
 BellIcon,ChatIcon,ChevronDownIcon,HomeIcon,UserGroupIcon,ViewGridIcon,
} from "@heroicons/react/solid"

import HeaderIcon from './HeaderIcon';
import { useSession, signIn, signOut } from "next-auth/react"

function Header() {

  const { data: session } = useSession()

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg-px-5 shadow-md'>
     
        {/* left */}
        <div className='flex items-center'>
            <Image alt={session.user.name} src="https://links.papareact.com/5me" width={40} height={40} layout="fixed"/>
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-6 text-gray-600'/>
                <input className=' hidden md:inline-flex  flex-shrink ml-2 bg-transparent items-center outline-none placeholder-gray-500 '  type="text" placeholder="Search Facebook"/>
            </div>
        </div>
        {/* center  */}
        <div className="flex justify-center flex-grow">
          <div className='flex space-x-6 md:space-x-2'>
<HeaderIcon active Icon={HomeIcon}/>
<HeaderIcon Icon={FlagIcon}/>
<HeaderIcon Icon={ShoppingCartIcon}/>
<HeaderIcon Icon={UserGroupIcon}/>
          </div>
        </div>
        {/* right */}

        <div className='flex items-center sm:space-x-2 justify-end'>
         {/* profile pic  */}
         <Image
         onClick={signOut}
         src={session.user.image}
         width={40}
         height={40}
         layout="fixed"
         alt={session.user.name}
         className='rounded-full cursor-pointer pl-1'
         />
         <p className='font-semibold whitespace-nowrap'>{session.user.name}</p>
         <ViewGridIcon className='icon'/>
         <ChatIcon className='icon'/>
         <BellIcon className='icon'/>
         <ChevronDownIcon className='icon'/>
        </div>
    </div>
  )
}

export default Header