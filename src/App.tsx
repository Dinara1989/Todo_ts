import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import Counter from "./components/Counter";

export type FilterValuesType = "all" | "completed" | "active";
function App() {

    // let tasks2: Array<TaskType> = [
    //         { id: 1, title: "Harry Potter", isDone: true },
    //         { id: 2, title: "P & P", isDone: true },
    //         { id: 3, title: "Rushdi", isDone: false }
    // ]

    //Розжовано
    // let arr = useState(initTasks);
    // let tasks = arr[0];
    // let setTasks = arr[1];
    //теж саме, тільи коротко
    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS", isDone: false },
        { id: 3, title: "React", isDone: true },
        { id: 4, title: "CSS", isDone: true },
        { id: 5, title: "JS", isDone: false },
        { id: 6, title: "React", isDone: true }
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");
    function deleteTask (id:number){
        let filteredTasks = tasks.filter( t =>  t.id !== id)//тому що функція верне true або false, можна не розписувати багато
        setTasks(filteredTasks);
    }
    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    function changeFilter(value: FilterValuesType){
        setFilter(value);
    }

      return (
        <div className="App">
            <Todolist
              title = "What to learn"
              tasks = {tasksForTodolist}
              deleteTask={deleteTask}
              changeFilter={changeFilter}
            />
            <Counter />
          {/*<Todolist title = "What to read" tasks = {tasks2} />*/}

        </div>
      );
}



export default App;
