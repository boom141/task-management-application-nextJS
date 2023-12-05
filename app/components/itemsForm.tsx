import { useRef,useEffect } from 'react'
import {fetchApi} from "../services/apiFetching"
import FadeIn from "react-fade-in/lib/FadeIn";

type formProps ={ 
    id: any, 
    title: string, 
    desc: string, 
    setNewTask: any, 
    type: string
    setLoader: any,
    mutate: any
}

export default function ItemsForm(props: formProps) {
  const {id, title, desc, setNewTask, type, setLoader, mutate} = props;

  const titleRef: any = useRef(null);
  const descRef: any = useRef(null);

  useEffect(()=>{
    titleRef.current.value = title;
    descRef.current.value = desc;

  },[titleRef,descRef]);

  const createTask = async () =>{
    setLoader(true)

    const title = titleRef.current.value;
    const description = descRef.current.value;

    const data = {title: title, description: description}

    fetchApi('createTask', true, data)
    .then(()=>{
      console.log('created')
      mutate()
      setNewTask(false)
      setLoader(false)
    })
    .catch(err => console.log(err));
    
  }

  const updateTask = async () =>{
    setLoader(true)

    const title = titleRef.current.value;
    const description = descRef.current.value;

    const data = {id:id, title: title, description: description}

    fetchApi('updateTask', true, data)
    .then(()=>{
      mutate()
      setNewTask(false)
      setLoader(false)
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="mt-5 backdrop-blur-sm bg-white/30 w-full rounded-lg">
        <FadeIn>
            <div className="flex flex-col p-3">
                <input ref={titleRef} type="text" id="taskName" placeholder="Title" className="p-3 rounded-md border border-[#e0e0e0] bg-white  text-base font-medium text-[#6B7280]" />
                <textarea ref={descRef} id="taskDesc" placeholder="Description" className="p-3 w-full mt-3 rounded-md border border-[#e0e0e0] bg-white  text-base font-medium text-[#6B7280]"></textarea>
                <div className="flex flex-row gap-x-3 self-end">
                    <button onClick={()=>setNewTask(false)} className="mt-5 rounded-lg p-3 transition-all bg-red-500 hover:bg-red-600">Cancel</button>
                    
                    { type === 'update'?
                        <button onClick={updateTask} className="mt-5 rounded-lg p-3 transition-all bg-yellow-600 hover:bg-yellow-700">Update</button>
                       :
                        <button onClick={createTask} className="mt-5 rounded-lg p-3 transition-all bg-blue-600 hover:bg-blue-700">Save</button>
                    }
                    
                </div>
            </div>
        </FadeIn>
    </div> 
  )
}
