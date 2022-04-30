import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import '../styles/TodoList.css'

function TodoList() {

  const [todos, setTodo] = useState([])

  const addTodo = todo => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();

      const updateTodo = [todo, ...todos];
      setTodo(updateTodo);
    }
  }
  const deleteTodo = id => {
    const updateTodo = todos.filter(todo => todo.id !== id)
    setTodo(updateTodo)
  }
  const completeTodo = id => {
    const updateTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    })
    setTodo(updateTodo)
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <div className='todo-list-container'>
        {
          todos.map((todo) =>
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              complete={todo.complete}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )
        }
      </div>
    </>
  )
}

export default TodoList;