import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./App";



export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType> //коли вказуємо масив, можна ще позначитти так TaskType[]
    deleteTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask:(title: string)=>void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement> ) => {
        if (e.code === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle("");
    }
    const onAllClickHandler = () => props.changeFilter('all');
    const onCompletedClickHandler = () => props.changeFilter('completed');
    const onActiveClickHandler = () => props.changeFilter('active');

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}/>
                {/*//важливо викликати саме callBack, щоб функція викликалася саме тоді, коли я клікну*/}
                <button onClick={addTask}>+</button>
                <h3></h3>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        const onDeleteHandler = ()=> {props.deleteTask(t.id)}

                        return <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onDeleteHandler}>x</button>
                        </li>
                    })
                }
            </ul>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    )
}
