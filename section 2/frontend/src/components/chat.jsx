import React from 'react'

const chat = () => {

    const [chat, setchat] = useState([]);

    const addNewTask = (e) => {
      //console.log(e.code);
      if (e.code === "Enter") {
        if(!e.target.value.trim()) return; 
        console.log(e.target.value);
        setToDoList([...Chat, { text: e.target.value, completed: false }]);
        e.target.value = "";
        console.log(Chat);
      }
    };
  
    
    return (
      <div className="container">
        <p className="display-4 fw-bold text-center">ToDoList</p>
        <hr />
  
        <div className="card">
          <div className="card-footer">
            <input onKeyDown={addNewTask} className="form-control" />
          </div>
          <div className="card-body">
            <ul>
              {ToDoList.map((obj,index) => {
                return <li className="list-group-item">
                  <h3>{obj.text}</h3>
                  
                  </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
};


export default chat;