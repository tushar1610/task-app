import React, { useContext, useState } from 'react'
import { AppContext } from '../context/FetchContext'
import AddTask from './AddTask'
import Content from './Content'
import Table from './Table'

export default function Home() {

  const {buttonId, setButtonId, text} = useContext(AppContext)
  const [addTask, setAddTask] = useState(false)

  const handleButtonClick = (buttonId) => {
    setButtonId(buttonId)
  }

  return (
    <div>
        <div className="mx-2 my-2 px-4 ">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <h2>{text}</h2>
            <div className="btn-group my-2" role="group">
              <button onClick={() => handleButtonClick("viewAll")} className={(buttonId === "viewAll") ? "btn btn-dark btn-sm": "btn btn-outline-dark btn-sm"}>View All</button>
              <button onClick={() => handleButtonClick("active")} className={(buttonId === "active") ? "btn btn-dark btn-sm": "btn btn-outline-dark btn-sm"}>Active now</button>
              <button onClick={() => handleButtonClick("completed")} className={(buttonId === "completed") ? "btn btn-dark btn-sm" : "btn btn-outline-dark btn-sm"}>Completed</button>
            </div>
          </div>
        {/* <Content/> */}
        {addTask && <AddTask setAddTask={setAddTask}/>}  
        <Table/>
        <button style={{float: 'right'}} onClick={() => {
          setAddTask(true)
        }} className="btn btn-outline-dark btn-sm">Add Task</button>
        </div>
    </div>
  )
}
