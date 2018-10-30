import React, { Component } from 'react';

import './App.css';
import Header from './partials/Header/Header';
import Counters from './partials/Counters/Counters';
import Form from './partials/Form/Form';
import Todo from './partials/Todo/Todo';


class App extends Component {
  constructor(props){
    super();
    this.key = 0;

    this.state = {
       todos : [],
    }
  }
  
  //Adds a todo item to the list
  addTodo = () => {    
     const inputText = this.inRef.value || 'NEW TODO ';

     const todo = {
        id : this.key++,
        text : inputText,
        checked: false
     }

     this.setState({
       todos : [...this.state.todos, todo],
      });
  }
  
  //toggles checked todos
  toggleCheck = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => {
           if(todo.id !== id) return todo
           else{
             return {
               id: todo.id,
               text: todo.text,
               checked: !todo.checked
             }
           }
        })
      })
  }
  
  //removes a todo
  removeTodo = (id) => {
      this.setState({
        todos: this.state.todos.filter((x) => x.id !== id)
      })
  }

  render() {
    return (
      <div className="container">
          <Header title="Todo App"/>
          <Counters itemCount={this.state.todos.length} uncheckedCount = {this.state.todos.filter(todo => !todo.checked).length} />
          <Form addTodo={this.addTodo} inputRef={(input) => this.inRef = input}/>
          
          <ul className="todo-list">
             {this.state.todos.map((todo) => 
                  <Todo
                    todo={todo}
                    handleCheck = {() => this.toggleCheck(todo.id)}
                    removeTodo = {() => this.removeTodo(todo.id)}
                  />)}
          </ul>
      </div>
    );
  }
}

export default App;
