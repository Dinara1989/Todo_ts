import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

function App() {

    let tasks1: Array<TaskType> = [
            { id: 1, title: "CSS", isDone: true },
            { id: 2, title: "JS", isDone: false },
            { id: 3, title: "React", isDone: true }
    ]

    let tasks2: Array<TaskType> = [
            { id: 1, title: "Harry Potter", isDone: true },
            { id: 2, title: "P & P", isDone: true },
            { id: 3, title: "Rushdi", isDone: false }
    ]


  return (
    <div className="App">
      <Todolist title = "What to learn" tasks = {tasks1} />
      <Todolist title = "What to read" tasks = {tasks2} />
    </div>
  );
}



export default App;
