import React from 'react'
import TodoForm from './TodoForm'

function TodoList(props) {

    const addTodo = todo => {
        if(!props.text || /^\s*$/.test(props.text)) {
            return 
        }

        const newTodos = [props.text, ...props.text]

        props.text = newTodos;
        
        console.log(...props.text);
    }

    return (
        <div>
            <h1>What's plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList
