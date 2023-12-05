import fetchApi from "../services/apiFetching"

type itemProps = {
  id: any,
  itemName: string, 
  itemDesc: string, 
  setUpdateTask: any, 
  setFormType: any,
  setUpdateTitle: any,
  setUpdateDescription: any,
  setUpdateId: any,
  complete: boolean,
  authorized: boolean,
  setLoader: any
}

export default function TaskItem(props : itemProps) {
  const {
    id,
    itemName, 
      itemDesc, 
      setUpdateTask, 
      setFormType,
      setUpdateTitle,
      setUpdateDescription,
      setUpdateId,
      complete,
      authorized,
    } = props;
    

    const initUpdateForm = () =>{
      setUpdateId(id);
      setUpdateTitle(itemName);
      setUpdateDescription(itemDesc);
      setFormType('update');
      setUpdateTask(true);
    }
    
    const deleteTask = () =>{
      const payload = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id:id})
    }
    
    fetchApi('deleteTask', payload)
    // .then(() => )
    .catch(err => console.log(err));
    }
    
    const markTask = () =>{      

      const payload = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id:id, completed: !complete})
      }

      fetchApi('markTask', payload)
      .catch(err => console.log(err));
    }
      
    return(
      <div className={`${ complete ? 'complete' : false} border rounded-lg p-3 flex items-center justify-between`}>
        <div className="flex flex-col  w-96">
          <span className="text-2xl">{itemName.toUpperCase()}</span>
          <span className="text-sm font-thin">{itemDesc}</span>
        </div>
        <div className="flex gap-x-4 px-3">
            <img onClick={markTask} role="button" className="border rounded-full p-[5px] backdrop-blur-sm transition-all hover:bg-white/30 hover:border-none " 
              width="32" height="32" src="https://img.icons8.com/puffy/32/FFFFFF/experimental-checkmark-puffy.png" />
            {
              authorized ? 
              <>
                <img onClick={initUpdateForm} role="button" className={`${ complete ? 'pointer-events-none' : false } border rounded-full p-[5px] backdrop-blur-sm transition-all hover:bg-white/30 hover:border-none `}
                width="32" height="32" src="https://img.icons8.com/puffy/32/FFFFFF/experimental-edit-puffy.png" />
              </>
              : false
            }
            <img onClick={deleteTask} role="button" className="border rounded-full p-[5px] backdrop-blur-sm transition-all hover:bg-white/30 hover:border-none " 
              width="32" height="32" src="https://img.icons8.com/puffy/32/FFFFFF/experimental-trash-puffy.png" />
        </div>
      </div>
    );
  }