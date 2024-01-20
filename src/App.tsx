import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import Counter from "./components/Counter";
import { v1 } from 'uuid';


export type FilterValuesType = "all" | "completed" | "active";
function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: "CSS", isDone: true },
        { id: v1(), title: "JS", isDone: false },
        { id: v1(), title: "React", isDone: true },
        { id: v1(), title: "CSS", isDone: true },
        { id: v1(), title: "JS", isDone: false },
        { id: v1(), title: "React", isDone: true }
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("all");
    function deleteTask (id:string){
        let filteredTasks = tasks.filter( t =>  t.id !== id)//тому що функція верне true або false, можна не розписувати багато
        setTasks(filteredTasks);
    }
    function addTask (title:string) {
        let newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
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
                addTask={addTask}
            />
            <Counter />

        </div>
    );
}



export default App;
