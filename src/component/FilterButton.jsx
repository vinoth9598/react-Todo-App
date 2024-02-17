import './Dropdown.css'


function FilterButton(props) {

  const onFilterValueChange=(event)=>{
     
      props.filterValueselected(event.target.value);
  }

  return (
    <div>
       <label className='status mx-4'>Status Filter :</label>
       <select 
        name='isComplete'
        onChange={onFilterValueChange}>
            <option value="All" >All</option>
            <option value="Complete">Completed</option>
            <option value="Not complete">Not Completed</option>
       </select>
    </div>
  )
}

export default FilterButton;
