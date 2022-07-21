import React, { useState } from 'react';

import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <>
    <div className="App">
      <Header />
      <body>
      <Container>

      <Row className="text-center">
      <Col>
      <ToDoForm addTask={addTask}/>
      </Col>
      </Row>
      <br />
      <Row className="text-center">
      <Col className="box">
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      </Col>
      </Row>
      <br />
      </Container>
      </body>
    </div>
    </>
  );
}

export default App;
