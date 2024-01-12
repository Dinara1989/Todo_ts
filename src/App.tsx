import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

function App() {

    let tasks: Array<TaskType> = [
            { id: 1, title: "CSS", isDone: true },
            { id: 2, title: "JS", isDone: false },
            { id: 3, title: "React", isDone: true },
            { id: 4, title: "CSS", isDone: true },
            { id: 5, title: "JS", isDone: false },
            { id: 6, title: "React", isDone: true }
    ]

    // let tasks2: Array<TaskType> = [
    //         { id: 1, title: "Harry Potter", isDone: true },
    //         { id: 2, title: "P & P", isDone: true },
    //         { id: 3, title: "Rushdi", isDone: false }
    // ]

    useState(tasks);

    function deleteTask (id:number){
            tasks = tasks.filter( t =>  t.id !== id)
        }

      return (
        <div className="App">
          <Todolist
              title = "What to learn"
              tasks = {tasks}
              deleteTask={deleteTask}
          />
          {/*<Todolist title = "What to read" tasks = {tasks2} />*/}
        </div>
      );
}



export default App;
