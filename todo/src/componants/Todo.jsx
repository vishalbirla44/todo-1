import React, { useState } from 'react'

const Todo = () => {
    const[todo,settodo] =useState('')
    const [list ,setlist] = useState([])
    const [uid,setuid] = useState('')


    const Addval = () => {
    const store = [...list,todo]
    setlist(store)  
    settodo('')  
    }
   const DelelteTdod = (index) => {
    const filter = list.filter((elem) => elem !== list[index])
    setlist(filter)
   }
   const editeTdod = (index)  =>{
    const filter = list.filter((elem) => elem === list[index])
    settodo(filter)
    setuid(index)
   }
   const update = () => {
    list.splice(uid,1,todo)
    settodo('')
   }
  return (
    <div>
        <div >
            <input type="text" placeholder='enter your todo '
            className='w-[400px] h-8'
            onChange={(e)=>{settodo(e.target.value)} } 
            value={todo} />
            
            <button onClick={Addval} className='bg-black text-white'> Add todo</button>
            <button onClick={update} className='bg-black text-white'> Add todo</button>
        </div>
        {list.map((val,index)=>{
            return (
                <>
                <li>{val}</li>
                <i onClick={()=> DelelteTdod(index)} class="fa-regular fa-pen-to-square"></i>
                <i onClick={()=> editeTdod(index)} class="fa-regular fa-pen-to-square"></i>
                </>
            )
        })}
    </div>
  )
}

export default Todo