import React from 'react'

function Todo(props) {


    completeTodo(id) = () => {

    }

    return todos.map((todo, index) => {
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
            <div key={todo.id} onClick={this.completeTodo}>
                {todo.text}
            </div>
            <div className="icons">
                
            </div>
        </div>
    })
}

export default Todo
