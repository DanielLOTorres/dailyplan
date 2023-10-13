/* eslint-disable react/prop-types */
const Task = ({task, removeTask, completeTask}) => {
  return (
    <div className='task' style={{ textDecoration: task.done ? "line-through" : ""}}>
        <div className="content">
            <p>{task.text}</p>
            <p>({task.category})</p>
        </div>
        <div>
            <button className="complete" onClick={() => completeTask(task.id)}>V</button>
            <button className="remove" onClick={() => removeTask(task.id)}>X</button>
        </div>
    </div>
  )
}

export default Task