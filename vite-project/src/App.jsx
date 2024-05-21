import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComp from './components/InputComp'
import TodoComp from './components/TodoComp'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputVal,setInputVal] = useState('');
  const [flag,setFlag] = useState(false);
  const [editId, setEditId] = useState('');

  function inpChange(e){
    setInputVal(e.target.value);
  }
  console.log(inputVal);
  console.log(tasks)

  function saveTasks(){
    if(inputVal != '' && !flag){
      setTasks((prevTasks) => [...prevTasks,{name:inputVal,index:uuidv4()}]);
      setInputVal('');
    }else{
      setTasks(
        tasks.map((item) => {
          if(item.index === editId){
            item.name = inputVal;
          }
          return item;
        })
      );
      setInputVal('');
      setFlag(false);
    }
  }

  function deleteTask(task){
    const finalTasks = tasks.filter((item) => item.index != task.index);
    setTasks(finalTasks);
  }

  function editTask(task){
    setFlag(true);
    setEditId(task.index);
    setInputVal(task.name);
  }

  return (
    <>
      <main>
        <h1>To Do List</h1>
        <InputComp inputVal={inputVal} inpChange={inpChange} saveTasks={saveTasks} />
        {/* <div className='container'>
          <div className='todo'>
            <p>go to gym</p>
            <div className='actions'>
              <input type='checkbox' />
              <button className='edit'>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div> */}
        <TodoComp tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
      </main>
    </>
  )
}

export default App
