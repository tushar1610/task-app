import React, { useContext } from 'react'
import { useState } from 'react'
import { AppContext } from '../context/FetchContext'

export default function AddTask({setAddTask}) {
  const {setTask} = useContext(AppContext)
  const [invalid, setInvalid] = useState(false)
  const [titleNum, setTitleNum] = useState(0)
  const [descriptionNum, setDescriptionNum] = useState(0)

  const handleTitleChange = () => {
    setTitleNum(document.getElementById("title").value.length)
  }

  const handleDescriptionChange = () => {
    setDescriptionNum(document.getElementById("description").value.length)
  }

  return (
    <aside className="addTask-overlay">
      <div className="addTask-container">
        <h2 style={{textAlign: 'center'}} className='my-2'>Start typing</h2>
        <div className="form-floating px-2 py-2">
          <input type="text" className={(invalid) ? "form-control is-invalid" : "form-control"} onChange={() => handleTitleChange()} id="title" maxLength="50" required/>
          <label htmlFor="title">Title</label>
        </div>
        <p className="mx-2 mb-2 text-sm" style={{color: 'gray', float: 'right'}}>{titleNum}/50</p>
        <div className="form-floating px-2 py-2">
          <textarea className={(invalid) ? "form-control is-invalid" : "form-control"} maxLength="100" onChange={() => handleDescriptionChange()} id="description" style={{height: "100px", overflowY: 'scroll'}} required/>
          <label htmlFor="description">Description</label>
        </div>
        <p className="mx-2 mb-2 text-sm" style={{color: 'gray', float: 'right'}}>{descriptionNum}/100</p>
        <button type="button" onClick={() => {
          if(document.getElementById("title").value.length > 0 && document.getElementById("description").value.length > 0){
            setAddTask(false)
            setTask({
              title: document.getElementById("title").value,
              description: document.getElementById("description").value,
              status: "active"
            })
            setInvalid(false)
          } else {
            setInvalid(true)
          }
        }} className="btn btn-outline-dark mx-2 my-2" style={{float: 'right'}}>Add</button>
      </div>
    </aside>
  )
}
