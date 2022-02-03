import { Box, Input, InputGroup, InputLeftElement, List, Text, Flex, ListIcon, ListItem, Stack, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { MdAddTask, MdCheckCircle, MdRadioButtonUnchecked } from 'react-icons/md'
import { FaAd, FaTrash } from 'react-icons/fa'

import logo from './logo.svg'

interface Task {
  id: string,
  content: string,
  completed: boolean,
  created: string
}

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([
    {
      id: uuidv4(),
      content: "Tarea Uno",
      completed: false,
      created: Date.now.toString()
    },
    {
      id: uuidv4(),
      content: "Tarea Dos",
      completed: false,
      created: Date.now.toString()
    },
    {
      id: uuidv4(),
      content: "Tarea Tres",
      completed: true,
      created: Date.now.toString()
    },
    {
      id: uuidv4(),
      content: "Tarea Cuatro",
      completed: false,
      created: Date.now.toString()
    },
  ])

  const uid: string = uuidv4()

  const handleAddTask = (e: any) => {
    const { value } = e.target
    
    if ( e.key === "Enter" ) {
      setTasks([
        ...tasks,
        {
          id: uid,
          content: value,
          completed: false,
          created: Date.now.toString()
        }
      ])

      e.target.value = ''
    }
  }

  const handleDelTask = ( id: string ) => () => {
    const newArr = tasks.filter( task => task.id !== id )

    setTasks(newArr)
  }

  const handleDone =  (id: string) => () => {
    const newItem = tasks.map(item => item.id === id ? {...item, completed: !item.completed}: {...item})

    setTasks(newItem)
  }

  return (
    <Stack 
      as='main' 
      alignItems="center"
      color="primary.200" 
      direction={['column', 'column', 'column']} 
      fontSize="18px" 
      fontWeight='bold' 
      minHeight='100vh' 
      backgroundColor='primary.500'
    >
      <Stack 
        as='header' 
        width="100%" 
        backgroundColor="gray.200" 
        align="center"
      >
        <Flex 
          alignItems="center"
          width={{base: '100%', xl: '1100px'}}
        >
          <Box 
            width="80px" 
            borderRadius={7}
          >
            <img src={logo} />
          </Box>
          <Box>
            My ToDo
          </Box>
        </Flex>
      </Stack>
      <Flex 
        flexDir='column'
        align="center"
        alignItems="stretch"
        width={{base: '100%', xl: '1100px'}}
        mt={["0rem !important"]}
        minHeight="calc(100vh - 56.56px)"
      >
        <Box
            paddingX={[5, 10, 15]}
            paddingY={5}
        >
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                fontSize="1.3em"
                children={<MdAddTask color='gray.300' />}
                />
              <Input 
                bgColor="white"
                color='blackAlpha.700'
                placeholder="Add Task..."
                variant='flushed'
                onKeyDown={ handleAddTask }
                />
            </InputGroup>
          </Box>
          <Box padding={5}>
            <List spacing={3}>
              {
                tasks.length > 0 ? 
                  tasks.map( task => (
                    <ListItem key={task.id}>
                      <Flex 
                        justifyContent="space-between" 
                        alignItems="center" 
                        className="animate__bounceIn"
                        flexDirection={["column", "row"]}
                      >
                        <Box alignContent="baseline">
                          <ListIcon 
                            as={ task.completed ? MdCheckCircle :  MdRadioButtonUnchecked} 
                            color={ task.completed ? 'gray.100' : 'green.100'} 
                            onClick={ handleDone(task.id) } 
                          />
                          <Text 
                            color={task.completed ? "white" : "gray.100"} 
                            as={task.completed ? "del": "samp"}
                          >
                            {task.content}
                          </Text>
                        </Box>
                        <Stack 
                          flexDirection='row' 
                          alignItems="baseline"
                        >
                          <Tag 
                            as="button" 
                            colorScheme="red" 
                            onClick={ handleDelTask(task.id) }
                          >
                            <TagLabel>
                              <FaTrash />
                            </TagLabel>
                          </Tag>
                        </Stack>
                      </Flex>
                    </ListItem>
                  ))
                :
                  <Text as="h5" align="center" backgroundColor="whiteAlpha.300" borderRadius={5} padding={3}>Add your first task.</Text>
              }
            </List>
          </Box>
        </Box>
      </Flex>
    </Stack>
  )
}

export default App
