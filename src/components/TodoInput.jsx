import React, { useState } from "react";

const TodoInput = (props) => {
    const [inputtext,setinputtext]=useState('');
    const handleenter=(e)=>{
      if(e.keyCode===13){
        props.addlist(inputtext);
        setinputtext("");
      }
  }
  return (
    <>
      <div className="inputbox">
        <input
          type="text"
          className="input-box"
          placeholder="Write something"
          value={inputtext}
          onChange={e=>{
            setinputtext(e.target.value)
          }}
          onKeyDown={handleenter}
        />
        <button onClick={()=>{
            props.addlist(inputtext);
            setinputtext("");
        }}>Add</button>
       
      </div>
    </>
  );
};

export default TodoInput;
