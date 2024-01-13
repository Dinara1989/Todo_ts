import React from 'react';
import {FilterValuesType} from "./App";



export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType> //коли вказуємо масив, можна ще позначитти так TaskType[]
    deleteTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
                <h3></h3>
            </div>
            <ul>
                {
                    props.tasks.map((t)=>{//перезаписали через map
                        return (
                            <li>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={ ()=> {props.deleteTask(t.id)}}>x</button>
                            </li>
                        )
                    })
                }

            </ul>
            <button onClick={ ()=> {props.changeFilter("all")}}>All</button>
            <button onClick={ ()=> {props.changeFilter("completed")}}>Active</button>
            <button onClick={ ()=> {props.changeFilter("active")}}>Completed</button>
        </div>
    )
}
