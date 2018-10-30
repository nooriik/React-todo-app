import React from 'react';

import './Form.css';

const Form = (props) => {

    return (
        <div className="todo-form">
            <div className="todo-input-box">
                <input type="text" ref={props.inputRef} placeholder="Enter todo text here" />
            </div>
            <button className="button center" onClick={props.addTodo}>ADD TODO</button>
        </div>
    )
}
export default Form;