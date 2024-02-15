import { useState } from "react";
import { useEffect } from "react";
import "./component/App.css";

import Alltodo from "./component/AllTodo";


function App(){
  const [allTodos,setAllTodos]=useState([]);
  const [newtitle,setNewTitle]=useState("");
  const [newdescription,setNewDescription]=useState("");
  const [editTodo,setEditTodo]=useState([]);
  

  function handleAddTodo(){
    if((newtitle!=="")&&(newdescription!=="")){
      let updateTodos={
        title:newtitle,
        description:newdescription,
      }
      let newTodos=[...allTodos]
        newTodos.push(updateTodos)
        setAllTodos(newTodos)
        localStorage.setItem('todolist',JSON.stringify(newTodos));

    }
    
  };

  const handleEditTodo=(index)=>{
    const editData=[...allTodos];
    let updateName=prompt("Edit Todo Name :")
    let updateDesc=prompt("Edit Todo description :");
    editData[index].title=updateName
    editData[index].description=updateDesc
    let updateEditTodo={
      title:updateName,
      description:updateDesc,
    }
    let newEditTodo=[...editTodo];
    newEditTodo.push(updateEditTodo);
    setEditTodo(newEditTodo);
  }


  const handleDelTodo=(index)=>{
    let removeItem=[...allTodos]
    removeItem.splice(index)
    localStorage.setItem('todolist',JSON.stringify(removeItem))
    setAllTodos(removeItem);
    
}

  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'))
    if(savedTodo){
      setAllTodos(savedTodo);
    }
  },[])
  
  const onFilterValueSelect=(filterValue)=>{
      console.log(filterValue);

  }
  

  return(
    <div>
        <div className="Title d-flex justify-content-center m-3 text-success ">
              My Todo
        </div>
        <div className="inputform-fluid ">
              <form className="form m-3">
                  <input
                    type="text"
                    placeholder="Todo Name"
                    className="inpName m-2 "
                    required
                    value={newtitle}
                    onChange={(e)=>setNewTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Todo Description"
                    className="inpDesc m-2"
                    required
                    value={newdescription}
                    onChange={(e)=>setNewDescription(e.target.value)}
                  />
                  <div className="btnhead">
                      <button onClick={handleAddTodo} 
                      className="Addbutton bg-success  text-white m-2"
                      >Add Todo</button>
                  </div>
                  
              </form>
        </div>
        <div className="TodoStatus m-3">
              <div className="head d-flex">
                  <div className="col">
                    My Todos 
                  </div>
                  <div className="status">
                      <FilterButton filterValueselected={onFilterValueSelect} />
                  </div>   
              </div>

        </div>
       <Alltodo TodoList={allTodos} delTodoList={handleDelTodo} editTodoList={handleEditTodo}   />
    </div>
  )
}

export default App;