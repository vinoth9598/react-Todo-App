import { useState } from "react";


function Alltodo({TodoList, delTodoList,editTodoList,filterValue}) {

  const [statusfilter,setStatusFilter]=useState('All');

  const handleStatus=(e)=>{
    setStatusFilter(e.target.value);
  }


  return (
    <div>
        <div className="myTodo m-3 p-3">
             
             {
               TodoList.map((item,index)=>{
                 return(
                 <div key={index} className="Cart bg-success-subtle m-3 p-3 ">
                   <div  className="todoList ">
                       <div className="item ">
                           Name:{item.title}
                       </div>
                       <div className="item">
                           Description:{item.description}
                       </div>
                       <div className="item d-flex ">
                           <div>
                                <div>
                                    <label>Status :</label>

                                    <select value={statusfilter} onChange={handleStatus}>
                                        <option  name="complete">Completed</option>
                                        <option  name="not complete">Not Completed</option>
                                    </select>
                                </div>
                           </div>
                       </div>
                       <div className="item d-flex justify-content-end ">
                           <button className="btnedit" onClick={()=>editTodoList(index)}>Edit</button>
                           <button className="btndel" onClick={()=>delTodoList(index)}>Delete</button>
                       </div>
                   </div>
                 </div>
                 )
               })              
             }
        </div>
    </div>
  )
}

export default Alltodo;
