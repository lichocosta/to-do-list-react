import React from "react";
import '../styles/Todo.css'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Box } from '@chakra-ui/react'


function Todo({ id, text, complete, completeTodo, deleteTodo }) {
  return (
    // <div className={complete ? 'todo-container complete' : 'todo-container'}>
    //   <div
    //     className="todo-text"
    //     onClick={() => completeTodo(id)}
    //   >
    //     {text}
    //   </div>
    //   <div 
    //     className="todo-icon"
    //     onClick={() => deleteTodo(id)}
    //   >
    //     <AiOutlineCloseCircle className="todo-icon"/>
    //   </div>
    // </div>

    <Box 
      w='100%' 
      color='white' 
      mb={2} 
      p={2} 
      px={4} 
      className='todo-container'
      bgColor={complete ? 'red.500' : 'green.500'}
    >
      <Box w='100%' onClick={() => completeTodo(id)}>
        {text}
      </Box>
      <Box onClick={() => deleteTodo(id)}>
        <AiOutlineCloseCircle className="todo-icon"/>
      </Box>
    </Box>


  )
}

export default Todo