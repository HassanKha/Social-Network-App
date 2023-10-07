import Image from "next/image";
import Head from "next/head";
import Header from './././../components/Header';
import {getSession} from "next-auth/react"
import { useSession, SessionProvider } from 'next-auth/react';
import Login from './../components/Login';
import Sidebar from './../components/Sidebar';
import Feed from './../components/Feed';
import Widgets from './../components/Widgets';

export default function Home() {
   const { data: session } = useSession()
  console.log(session,'b')
  if (!session) {return <Login/>}
  else {
console.log(session)
  return (
    <div className="">
      <Head>
        <title>facebook</title>
      </Head>
      
      {/* header */}
<Header/>
      <main className="flex">
        {/* sidebar */}
        <Sidebar/>
        {/* feed */}
        <Feed/>
        {/* widgets */}
        <Widgets />
      </main>
    </div>
  )
  }
}

export async function getServerSideProps(context){
  const session = await getSession(context)

  return {
    props : {
      session
    }
  }
}