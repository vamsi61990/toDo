import React from 'react'

function InputComp({inputVal,inpChange,saveTasks}) {
  return (
    <div className='input-container'>
        <input type="text" value={inputVal} onChange={inpChange}/>
        <button onClick={saveTasks}>+</button>
    </div>
  )
}

export default InputComp