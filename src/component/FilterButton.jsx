import './Dropdown.css'


function FilterButton({filterTodoList,filter}) {

  return (
    <div>
       <label>Status Filter :</label>
       <select name='Status'
        value={filter}
        onChange={filterTodoList}>
            <option value="All" >All</option>
            <option value="Complete">Completed</option>
            <option value="Not complete">Not Completed</option>
       </select>
    </div>
  )
}

export default FilterButton;
