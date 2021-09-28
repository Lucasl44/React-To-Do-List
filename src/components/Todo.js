import "./Todo.css";

const Todo = ( {value, handleDelete, handleChecked, checked}) => {
    return (
      <li className={`todoWrapper ${checked ? "unchecked" : undefined}`}>
        <div className="boxes">
          <p className="entered" name={value}>{value}</p>
          <div className="buttonWrapper">
            <input classname="check" type="checkbox" name="" checked={checked} onChange={handleChecked}/>
            <button className="delButton" onClick={handleDelete}>Del</button>
          </div>  
        </div>
      </li>
    )
  }

  export default Todo;