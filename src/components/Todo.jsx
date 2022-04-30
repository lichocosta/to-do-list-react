import React from "react";
import '../styles/Todo.css'
import { AiOutlineCloseCircle } from "react-icons/ai"

function Todo({ id, text, complete, completeTodo, deleteTodo }) {
  return (
    <div className={complete ? 'todo-container complete' : 'todo-container'}>
      <div
        className="todo-text"
        onClick={() => completeTodo(id)}
      >
        {text}
      </div>
      <div 
        className="todo-icon"
        onClick={() => deleteTodo(id)}
      >
        <AiOutlineCloseCircle className="todo-icon"/>
      </div>
    </div>
  )
}

export default Todo