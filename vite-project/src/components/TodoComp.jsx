import React from 'react'

function TodoComp({tasks,deleteTask,editTask}) {
  return (
    <div className='container'>
    {tasks.map((task) => { return(
        <div className='todo'>
          <p>{task.name}</p>
          <div className='actions'>
            <input type='checkbox'/>
            <button className='edit' onClick={() => editTask(task)}>Edit</button>
            <button onClick={() =>deleteTask(task)}>Delete</button>
          </div>
        </div>
    )
    })}
    </div>
  )
}

export default TodoComp