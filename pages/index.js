import Head from 'next/head'
import Header from "../components/Header"
import Newsfeed from '../components/Newsfeed'
import Widgets from '../components/Widgets'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login'
import { getSession } from 'next-auth/client'

export default function Home({session}) {
  if(!session) return <Login/>
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main className="flex">
        <Sidebar/>
        <Newsfeed/>
        <Widgets/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props:{
      session
    }
  }
}
