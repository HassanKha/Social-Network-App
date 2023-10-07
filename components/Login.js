import React from 'react'
import Image from "next/image";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react"


function Login() {
  return (
    <div className ="grid place-items-center">
        <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
         />
         <h1 onClick={() => signIn()} className='p-5 text-center cursor-pointer text-white bg-blue-500 rounded-full'>Login with Facebook</h1>
    </div>
  )
}

export default Login