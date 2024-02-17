
import { useState } from "react";
import FilterButton from "./FilterButton";


function Alltodo({TodoList, delTodoList,editTodoList}) {

  const [option,setOption]=useState('All');

  const [status,setStatus]=useState('');

  const onFilterValueSelect=(filterValue)=>{
    setOption(filterValue);

}
  const handleStatus=(event)=>{
    setStatus(event.target.value);
  }

  return (
    <div>
        <div className="status">
              <FilterButton filterValueselected={onFilterValueSelect} />
        </div> 
        <div className="myTodo m-3 p-3">
             {
              TodoList.map((item,index)=>{
                  if(option ==="All" || item.option === option){
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
                                    <label>Status :</label>
                                    <select onChange={handleStatus}>
                                        <option>complete</option>
                                        <option>Not complete</option>
                                    </select>
                

                                </div>
                            </div>
                            <div className="item d-flex justify-content-end ">
                                <button className="btnedit" onClick={()=>editTodoList(index)}>Edit</button>
                                <button className="btndel" onClick={()=>delTodoList(index)}>Delete</button>
                            </div>
                        </div>
                      </div>
                    )

                }
                 
               })              
             }
        </div>
        
    </div>
  )
}

export default Alltodo;
