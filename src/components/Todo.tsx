import React, {Dispatch, SetStateAction, useState} from 'react'
import {SuperInput} from "./SuperInput";
import {SuperButton} from "./SuperButton";
import {TodosType} from "../App_2";


type TodoPropsType = {
    todos: TodosType[]
    setTodos: (todos: TodosType[])=>void
    // setTodos: Dispatch<SetStateAction<TodosType[]>>
}
export const Todo = (props: TodoPropsType) => {
    const [value, setValue] = useState('')

    const callBackInputHandler = (valueInput: string) => {
        setValue(valueInput)
    }

    const addTaskHandler = () => {
        let newTask: TodosType = {
            id: props.todos.length + 1,
            userId: props.todos.length + 1,
            title: value,
            completed: false
        }
        props.setTodos([newTask, ...props.todos])

        setValue('')
    }
    return (
        <div>
            <div>
                <SuperInput value={value} callBack={callBackInputHandler}/>
            </div>

            <div>
                <SuperButton name={'+'} callBack={addTaskHandler}/>
            </div>
        </div>
    )
}