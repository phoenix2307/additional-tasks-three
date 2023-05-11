import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type TodosType = {
    userId: number
    id: number,
    title: string,
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setTodos(json))
    // }, [])

    const showTodosHandler=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    const hideTodosHandler=()=>{
        setTodos([])
    }

    return (
        <div className="App">
            <button onClick={showTodosHandler}>Show me Todos</button>
            <button onClick={hideTodosHandler}>Hide Todos</button>
            <ul>
                {todos.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span> _ {el.userId}</span>
                            <span> _  {el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
