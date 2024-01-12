import React from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
        title: string
        tasks: Array<TaskType> //коли вказуємо масив, можна ще позначитти так TaskType[]
        deleteTask: Function
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
                    props.tasks.map((t)=>{
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
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}
