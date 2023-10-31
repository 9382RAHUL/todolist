
import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/Todolist';
function App() {
  const [list,setlist]=useState([]);
  const addlist=(inputtext)=>{
    setlist([...list,inputtext]);
  }
  const deletetodo=(key)=>{
    const newitem=[...list];
    newitem.splice(key,1);
    setlist([...newitem]);
  }
  return (
    <>
      <div className="main-container">
        <div className="center-container">
            <TodoInput addlist={addlist}/>
            <h1>TODO</h1>
            <hr />
           {
            list.map((listitem,i)=>{
              return <Todolist key={i} index={i} item={listitem} deleteitem={deletetodo}/>
            })
           }
        </div>
      </div>
    </>
  );
}

export default App;
