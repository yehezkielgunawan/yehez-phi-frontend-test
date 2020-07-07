import React, { useState } from "react";
import "./App.css";
import TableContent from "./TableContent.js";
import Form from "./Form.js";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  let i = 0;
  const taskList = tasks.map((task) => (
    <TableContent
      id={task.id}
      number={++i}
      name={task.name}
      address={task.address}
      phone={task.phone}
      key={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  const tasksNoun = taskList.length > 1 ? "datas" : "data";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(data_user) {
    const newTask = {
      id: "list - " + nanoid(),
      name: data_user.name,
      address: data_user.address,
      phone: data_user.phone,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newData) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          name: newData.newName,
          address: newData.newAddress,
          phone: newData.newPhone,
        };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  if (taskList.length > 0) {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Simple Local CRUD React</h1>
          </div>
          <h5>{headingText}</h5>
          <table className="table">
            <thead>
              <tr>
                <th>#No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            {taskList}
          </table>
          <Form addTask={addTask} />
        </div>
        <div class="footer-copyright text-center py-3">
          <p>
            © 2020 Made by{" "}
            <a href="yehezkielgunawan123.surge.sh">Yehezkiel Gunawan</a>{" "}
          </p>
          <p>
            Using resource and knowledge from{" "}
            <a href="https://www.taniarascia.com/getting-started-with-react/">
              Tania Rascia
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Simple Local CRUD React</h1>
        </div>
        <h5>{headingText}</h5>
        <table className="table">
          <thead>
            <tr>
              <th>#No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <td></td>
            <td></td>
            <td>
              <h3>NO DATA</h3>
            </td>
            <td></td>
            <td></td>
          </tbody>
        </table>
        <Form addTask={addTask} />
      </div>
      <div class="footer-copyright text-center py-3">
        <p>
          © 2020 Made by{" "}
          <a href="yehezkielgunawan123.surge.sh">Yehezkiel Gunawan</a>{" "}
        </p>
        <p>
          Using resource and knowledge from{" "}
          <a href="https://www.taniarascia.com/getting-started-with-react/">
            Tania Rascia
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
