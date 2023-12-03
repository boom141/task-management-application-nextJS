'use client'

import { useState,useEffect} from "react";
import { useRouter } from "next/navigation"
import dateFormat  from "dateformat";
import FadeIn from "react-fade-in/lib/FadeIn";
import ItemsForm from "../components/itemsForm";
import TaskItem from "../components/taskItem";
import fetchApi from "../services/apiFetching"

export default function App() {
  const [newTask, setNewTask] = useState(false);
  const [formType, setFormType] = useState('create');
  const [taskItems, setTaskItems] = useState([]);
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDescription, setUpdateDescription] = useState('')
  const [updateId, setUpdateId] = useState(null)
  const [user,setUser] : any = useState(false)

  const navigate = useRouter()

  useEffect(()=>{
    fetchApi('allTask',{})
    .then(data => {
      setTaskItems(data);
      setUpdateTitle('');
      setUpdateDescription('');
    })
    .catch(err => console.error(err))
  },[taskItems])


  const getDate = () =>{
    const current = new Date();
    return dateFormat(current, "dddd, mmmm dS, yyyy")
  }

  const signOut = () => {
    sessionStorage.clear();
    return navigate.replace('/')
  }

  type itemProps = {
    id: any,
    title: string,
    description: string,
    completed: boolean,
  }

  return (
    <div className="flex flex-col mx-auto w-full">
      <div className="flex gap-x-[1rem] items-center p-3 rounded-lg mt-20 backdrop-blur-sm bg-white/30 mx-10">
          <img className="rounded-full" src={user ? user.picture : "https://img.icons8.com/ios-glyphs/90/FFFFFF/user--v1.png"}  />
          <div className="flex flex-col"> 
            <span className="text-[30px] font-bold">{ user ? user.name : 'Guest User'}</span>
            <span className="text-xs font-light">{getDate()}</span>
          </div>
          {user ? 
            <>
              <img onClick={signOut} role="button" className="ml-[10rem]" width="50" height="50" src="https://img.icons8.com/ios-filled/100/FFFFFF/logout-rounded.png" alt="logout-rounded"/>
            </>
            :false
          }
      </div>

      <div className="flex flex-col mx-10 mt-10">
        <div className="border-b-[1px] w-full flex justify-between items-center">
          <h1 className="text-[40px] font-semibold">Tasks</h1>
          <div className="flex justify-between items-center gap-x-2"> 
            <span className="font-light">Add Task</span>
            <img role="button" onClick={()=>{
                setFormType('create')
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
                />
            :
            <FadeIn className="flex flex-col gap-y-3 mt-5">
              {taskItems?.map((item: itemProps) => (
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
                  />
              ))} 
            </FadeIn>
        }
      </div>
    </div>
  
  )
}
