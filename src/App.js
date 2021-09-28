import { useState } from 'react';
import './App.css';
import { Form } from "./components/Form.js";
import Todo from './components/Todo.js';

const App = () => {
  const [output, setOutput] = useState([]);
  
  const handleForm = (data) => {
    setOutput([...output, {
      value: data.todo,
      checked: false
    }]);
  };

  const handleChecked = (index) => {
    let newArr = [...output];
    newArr[index].checked = !newArr[index].checked;
    setOutput(newArr);
  };

  const handleDelete = (index) => {
    let newArr = [...output];
    newArr.splice(index, 1);
    setOutput(newArr);
  };

  return (
    <div className="wrapper">
      <h1 className="title">To Do List</h1>
      <Form className="inputBox" handleForm={handleForm}/>
        <ul className="list">
          {output.map((item, index) => (
          <Todo classname="outputBox" value={item.value} key={index} handleDelete={()=> handleDelete(index)} handleChecked={() => handleChecked(index)} checked={item.checked}/>))}
        </ul>
    </div>
  )
}


export default App;
