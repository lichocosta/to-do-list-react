import React, { useState } from "react";
import '../styles/TodoForm.css'
import { v4 as uuidv4 } from 'uuid'
import { Stack, Input, InputGroup, InputRightAddon, Button } from "@chakra-ui/react";

function TodoForm(props) {

  const [input, setInput] = useState('')

  const changeTodo = e => {
    setInput(e.target.value);
  }

  const sendTodo = e => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text: input,
      complete: false
    }

    props.onSubmit(newTodo)
  }

  return (
    <form
      className="todo-form"
      onSubmit={sendTodo}
    >
      {/* <input 
        type="text" 
        className="todo-input"
        name="text"
        placeholder="Escribe una tarea"
        onChange={changeTodo}
      />
      <button className="todo-button">
        Agregar tarea
      </button> */}
      

      <Stack spacing={4}>

        <InputGroup size='md'>

          <Input 
            placeholder='Escribe una tarea' 
            onChange={changeTodo} 
            className="todo-input" 
            name="text"          
          />

          <InputRightAddon px={0}>
            <Button className="todo-button" type="submit">
              Agregar tarea
            </Button>
          </InputRightAddon>

        </InputGroup>
      </Stack>
      
    </form>
  )
}

export default TodoForm