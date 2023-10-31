import React from 'react'
import {MdDelete} from "react-icons/md"
const Todolist = (props) => {
    
  return (
   <>
    <li className="list-item">
       {props.item}
        <span className='delete' >
            <MdDelete onClick={e=>{
                props.deleteitem(props.index)
            }} />
        </span>
    </li>
   </>
  )
}

export default Todolist