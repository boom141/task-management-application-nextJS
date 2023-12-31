'use client'

import React,{ useState,useEffect} from "react";
import { getCookie, deleteCookie, hasCookie } from "cookies-next";
import { useRouter } from "next/navigation"
import { fetcher } from "../services/apiFetching"
import dateFormat  from "dateformat";
import FadeIn from "react-fade-in/lib/FadeIn";
import useSWR from "swr";

import ItemsForm from "../components/itemsForm";
import TaskItem from "../components/taskItem";
import Loader from "../components/loader";

export default function App() {
  const [newTask, setNewTask] = useState(false);
  const [formType, setFormType] = useState('create');
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDescription, setUpdateDescription] = useState('')
  const [updateId, setUpdateId] = useState(null)
  const [user,setUser] : any = useState()
  const [loader,setLoader] = useState(false)

  const navigate = useRouter()
  
  useEffect(()=>{
    setUser(hasCookie('authorized') ? JSON.parse(getCookie('authorized') as any ) : false)
  },[])

  const { data: taskItems, mutate } = useSWR('/api/allTask',fetcher)
  
  const getDate = () =>{
    const current = new Date();
    return dateFormat(current, "dddd, mmmm dS, yyyy")
  }

  const signOut = () => {
    user ? deleteCookie('authorized') : false;
    navigate.replace('/')
  }

  type itemProps = {
    id: any,
    title: string,
    description: string,
    completed: boolean,
  }

  return (
    <div className="flex flex-col justify-start items-center h-full w-full">
      
      {
        loader ?

        <Loader />
          :
        <div className="flex flex-col h-full mx-5">
          <div className="flex gap-x-[1rem] w-full items-center p-3 rounded-lg mt-20 backdrop-blur-sm bg-white/30 ">
              <img className="rounded-full" src={user ? user.picture : "https://img.icons8.com/ios-glyphs/90/FFFFFF/user--v1.png"}  />
              <div className="flex flex-col"> 
                <span className="text-[30px] font-bold">{ user ? user.name : 'Guest User'}</span>
                <span className="text-xs font-light">{getDate()}</span>
              </div>
              <img onClick={signOut} role="button" className="ml-[10rem] hover:scale-110 transition-all" width="50" height="50" src="https://img.icons8.com/ios-filled/100/FFFFFF/logout-rounded.png" alt="logout-rounded"/>
          </div>
  

          <div className="border-b-[1px] w-full flex justify-between items-center mt-10">
            <h1 className="text-[40px] font-semibold">Tasks</h1>
            <div className="flex justify-between items-center gap-x-2"> 
              <span className="font-light">Add Task</span>
              <img role="button" onClick={()=>{
                  setFormType('create')
                  setUpdateTitle(' ')
                  setUpdateDescription(' ')
                  setNewTask(true)
                }} className="border rounded-full p-[5px] backdrop-blur-sm transition-all hover:bg-white/30 hover:border-none " 
              width="32" height="32" src="https://img.icons8.com/android/48/FFFFFF/plus.png" />
            </div>
          </div>
          {
            newTask ? 
                <ItemsForm 
                  id={updateId} 
                  title={updateTitle} 
                  desc={updateDescription} 
                  setNewTask={setNewTask} 
                  type={formType}
                  setLoader={setLoader}
                  mutate={mutate}
                  />
              :
              <div className="flex grow overflow-y-auto mb-10">
                <FadeIn className="500 flex flex-col gap-y-3 m-5">
                  {Array.isArray(taskItems) ? taskItems.map((item: itemProps) => (
                    <TaskItem 
                      key={item.id} 
                      id={item.id}
                      itemName={item.title} 
                      itemDesc={item.description} 
                      setUpdateTask={setNewTask} 
                      setFormType={setFormType}
                      setUpdateTitle={setUpdateTitle}
                      setUpdateDescription={setUpdateDescription}
                      setUpdateId={setUpdateId}
                      complete={item.completed}
                      authorized={ user ? true : false}
                      mutate={mutate}
                      />
                  )) : null
                  } 
                </FadeIn>
              </div>
          }
        </div>
      }
    </div>
  
  )
}
