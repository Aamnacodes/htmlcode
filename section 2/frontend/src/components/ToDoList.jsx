import React, { useState } from "react";

const ToDoList = () => {
  const [ToDoList, setToDoList] = useState([]);

  const addNewTask = (e) => {
    //console.log(e.code);
    if (e.code === "Enter") {
      if(!e.target.value.trim()) return; 
      console.log(e.target.value);
      setToDoList([...ToDoList, { text: e.target.value, completed: false }]);
      e.target.value = "";
      console.log(ToDoList);
    }
  };

  const deleteTodo=(index) => {
         const temp = ToDoList;
         temp.splice(index,1);
         setToDoList([...temp]);
  }

  const completeTodo=(index) => {
    const temp = ToDoList;
    temp[index].completed = true;
    setToDoList([...temp]);
  }
  return (
    <div className="container">
      <p className="display-4 fw-bold text-center">ToDoList</p>
      <hr />
      

      {}


      <div className="card">
        <div className="card-header">
          <input onKeyDown={addNewTask} className="form-control" />
        </div>
        <div className="card-body">
          <ul>
            {ToDoList.map((obj,index) => {
              return <li className="list-group-item" key={index}>
                { obj.completed ? <span className="badge text-bg-success">Completed</span> :null }
                <h3 style ={{textDecoration : obj.completed ? 'line-through':''}}>{obj.text}</h3>
                <button onClick={() => { deleteTodo(index)}}className="btn btn-danger">Delete</button>
                <button onClick ={() => {completeTodo(index)}}className="btn btn-primary ms-2">Complete Task</button>
                </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
