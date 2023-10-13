/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css'

import Task from './components/Task'
import Form from './components/Form'
import Search from './components/Search'

function App() {

  const [search, setSearch] = useState("")
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar tal sistema",
      category: "Dev",
      done: false
    },
    {
      id: 2,
      text: "Jogar lixo fora",
      category: "Home",
      done: false
    },
    {
      id: 3,
      text: "Candidatar vaga X",
      category: "Job",
      done: false
    },
  ])

  const addTask = (text, category)=>{
     const newTodos = [...todos, {
      id: (todos[todos.length -1].id + 1),
      text, 
      category,
      done : false,
     }]
     setTodos(newTodos)
  }

  const removeTask = (id) =>{
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((task) => task.id !== id ? task : null)
    setTodos(filteredTodos)
  }

  const completeTask = (id) =>{
    const newTodos = [...todos]
    newTodos.map((task) => task.id === id ? task.done = !task.done : task)
    setTodos(newTodos)
  }


  return (
    <div className='app'>
      <h1>Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className='todo-list'>
        {todos.filter((task) => task.text.toLowerCase().includes(search.toLowerCase())).map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} completeTask={completeTask}/>
        ))}
      </div>
      <Form addTask={addTask}/>
    </div>
  )
}

export default App
