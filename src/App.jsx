/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from 'react'
import './App.css'

import Task from './components/Task'
import Form from './components/Form'
import Search from './components/Search'
import Filter from './components/Filter'
import Category from './components/Category'

function App() {

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("Todas")
  const [category, setCategory] = useState("Todas")
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar tal sistema",
      category: "Projetos",
      done: false
    },
    {
      id: 2,
      text: "Jogar lixo fora",
      category: "Casa",
      done: false
    },
    {
      id: 3,
      text: "Candidatar vaga X",
      category: "Trabalho",
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
      <div className='todo-list'>
        {todos
        //status
        .filter((task) =>{ 
          switch (filter){
            case "Todas": return true
            case "Prontas": return task.done
            case "Pendentes": return !task.done

        }})
        //category
        .filter((task) => {
          switch (category){
            case "Todas": return true
            case "Trabalho": return  task.category === "Trabalho" 
            case "Casa": return  task.category === "Casa"
            case "Mozin": return  task.category === "Mozin"
            case "Projetos": return  task.category === "Projetos"
            case "Faculdade": return  task.category === "Faculdade"
          }
        })
        //search
        .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))
        //load
        .map((task) => (
          <Task key={task.id} task={task} removeTask={removeTask} completeTask={completeTask}/>))}
      </div>
      <Search search={search} setSearch={setSearch}/>
      <div className='filters'>
        <Filter filter={filter} setFilter={setFilter}/>
        <Category category={category} setCategory={setCategory}/>
      </div>
      <Form addTask={addTask}/>
    </div>
  )
}

export default App
