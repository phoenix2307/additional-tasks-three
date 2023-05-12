import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperInput} from "./components/SuperInput";

type TodosType = {
    id: number
    userId: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    const [value, setValue] = useState('')
    console.log(todos)

        // Для роботи розкоментувати fetch-запит. Якась лажа з пушем на гітхаб

    // const fetchRequest = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setTodos(json))
    // }
    const showTodos = () => {
        fetchRequest()
    }
    const hideTodos = () => {
        setTodos([])
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const addTaskHandler = () => {
        let newTask: TodosType = {id: todos.length+1, userId: todos.length+1, title: value, completed: false}
        setTodos([newTask, ...todos])

        setValue('')
    }

    const callBackInputHandler = (valueInput: string) => {
        setValue(valueInput)
    }

    return (
        <div className="App">
            <div>
                <SuperInput value={value} callBack={callBackInputHandler}/>
            </div>

            <div>
                <SuperButton name={'+'} callBack={addTaskHandler}/>
            </div>

            <button onClick={showTodos}>Show me Todos</button>
            <button onClick={hideTodos}>Hide me Todos</button>
            <ul>
                {todos.map(el => {

                    return (
                        <li key={el.id}>
                            <span>{el.userId}</span>-
                            <span>{el.title}</span>-
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;
