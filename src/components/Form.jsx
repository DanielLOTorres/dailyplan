/* eslint-disable react/prop-types */
import { useState } from "react"

const Form = ({addTask}) => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!title || !category)
        return 
    addTask(title, category)
    setTitle("")
    setCategory("")

  }
  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Titulo:'onChange={(e) => setTitle(e.target.value)} value={title}/>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="Trabalho">Trabalho</option>
                <option value="Faculdade">Faculdade</option>
                <option value="Projetos">Projetos</option>
                <option value="Casa">Casa</option>
                <option value="Mozin">Mozin</option>
            </select>
            <button type='submit'>Criar</button>
        </form>
    </div>
  )
}

export default Form