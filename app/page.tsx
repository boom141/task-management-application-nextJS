'use client'

import { hasCookie } from "cookies-next";
import  Link  from "next/link"
import { useRouter } from "next/navigation"
import { GoogleLoginAuth}  from "./services/firebase"

export default function Page() {
  const navigate = useRouter()
  hasCookie('authorized') ? navigate.replace('/taskManager') : false;

  return (
    <div className="flex justify-center items-center h-full px-20">
      <div className="flex w-full gap-y-3 flex-col p-5 rounded-lg mt-20 backdrop-blur-sm  bg-white/30 px-10">
        <h1 className="text-3xl text-center font-bold">Task Manager Application</h1>
        <h1 className="text-center font-light">Sign in with</h1>
        <div onClick={GoogleLoginAuth} role="button" className="flex justify-center items-center bg-white rounded-lg p-2 transition-all hover:bg-slate-300">
          <img width="32" height="32" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
          <span className="text-black">oogle</span>
        </div>
        <div className="text-center font-light p-2">
          Or
        </div>
        <Link href='/taskManager' className="flex justify-center items-center rounded-lg p-2 border transition-all hover:bg-white hover:text-black">
          Sign in as guest
        </Link>
      </div>
    </div>
  )
}
