import React from 'react';

const Todo = (props) => {
    return (
        <li className="todo-container">
            <input type="checkbox" value={props.todo.checked} onChange={props.handleCheck}/>
            {props.todo.text}
            <button className="todo-delete" onClick={props.removeTodo}>Remove</button>
        </li>
    )
}

export default Todo;