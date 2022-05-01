import './App.css';
import TodoList from './components/TodoList'
import { Box, Heading } from "@chakra-ui/react"

function App() {
  return (
    <Box 
      className="toDo-app"
      bgColor='gray.50'
      h='100vh'
      d='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Box 
        className="toDo-list-main"
        w='600px'
        minH='500px'
        p='25px'
        borderRadius='26px'
        boxShadow='2xl'
        bgColor='whiteAlpha.900'
      >
        <Heading 
          as='h1' 
          size='lg' 
          mb='4'
          textAlign='center'
          color='blackAlpha.900'
        >
          Mis tareas
        </Heading>
        <TodoList 
          
        />
      </Box>
    </Box>
  );
}

export default App;

// display: flex;
// flex-wrap: wrap;
// justify-content: center;
// align-items: center;
// height: 100vh;