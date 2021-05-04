import React, { Component } from 'react'

class TodoForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            id: Math.floor(Math.random() * 10000),
            input: this.state.input
        })
        this.state.input = ''
    }


    render() {
        const { input } = this.state;
        return (
            <div>
                <form className='todo-form' onSubmit={this.handleSubmit}>
                    <input type='text'
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={this.handleChange}
                    />
                    <button className='todo-button'>Add todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm
