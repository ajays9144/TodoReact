import React, { Component } from 'react'
import TodoListTwo from './TodoListTwo'

class TodoFormTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: '',
            arrayItems: []
        }
    }

    itemEvent = (event) => {
        this.setState({
            items: event.target.value
        })
    }

    listOfitems = () => {
        this.setState({
            arrayItems: this.state.arrayItems.concat([this.state.items])
        })
        this.state.items = ''
    }

    deleteItems = (id) => {
        this.setState({
            arrayItems : this.state.arrayItems.filter((arryEle, index) => {
                return index !== id;
            })
        })
    }


    render() {
        const { items, arrayItems } = this.state;

        return (
            <div className='main_div'>
                <div className="center_div">
                    <br />
                    <h1>Todo List</h1>
                    <br />
                    <input type="text" placeholder="Add a todo" value={items}
                        name="text" className='todo-input' onChange={this.itemEvent} />
                    <button onClick={this.listOfitems}>+</button>
                    <ol>
                        {
                            arrayItems.map((itemval, index) => {
                                return <TodoListTwo
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={this.deleteItems} />
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default TodoFormTwo
