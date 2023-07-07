import React, { useContext } from 'react'
import { AppContext } from '../context/FetchContext'

export default function Content() {
    const {buttonId, setButtonId} = useContext(AppContext)
    
    const handleButtonClick = (buttonId) => {
        setButtonId(buttonId)
    }
  return (
    <div className='row mx-2 mb-2'>
        <div className="col">
            <div style={{borderRadius: '1.5rem'}} className={(buttonId === "viewAll") ? "card shadow p-3 mb-3 bg-body" : "card"}>
                <div className="card-body">
                    <p style={{color: 'gray'}} className="card-title"><b>All Tasks</b></p>
                </div>
                <div className="card-body" style={{
                    justifyContent: 'space-between',
                    display: 'flex'}}>
                    <h4>0</h4>
                    <button style={{borderRadius: '1.5rem'}} onClick={() => handleButtonClick("viewAll")} className={(buttonId === "viewAll") ? "btn btn-dark": "btn btn-outline-dark btn-sm h-25 w-20"}>View All</button>
                </div>
            </div>
        </div>
        <div className="col">
                <div style={{borderRadius: '1.5rem'}} className={(buttonId === "active") ? "card shadow p-3 mb-3 bg-body" : "card"}>
                <div className="card-body">
                    <p style={{color: 'gray'}} className="card-title"><b>Active Tasks</b></p>
                </div>
                <div className="card-body" style={{
                    justifyContent: 'space-between',
                    display: 'flex'}}>
                    <h4>0</h4>
                    <button style={{borderRadius: '1.5rem'}} onClick={() => handleButtonClick("active")} className={(buttonId === "active") ? "btn btn-dark": "btn btn-outline-dark btn-sm h-25 w-20"}>Active now</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div style={{borderRadius: '1.5rem'}} className={(buttonId === "completed") ? "card shadow p-3 mb-3 bg-body" : "card"}>
                <div className="card-body">
                    <p style={{color: 'gray'}} className="card-title"><b>Completed Tasks</b></p>
                </div>
                <div className="card-body" style={{
                    justifyContent: 'space-between',
                    display: 'flex'}}>
                    <h4>0</h4>
                    <button style={{borderRadius: '1.5rem'}} onClick={() => handleButtonClick("completed")} className={(buttonId === "completed") ? "btn btn-dark": "btn btn-outline-dark btn-sm h-25 w-20"}>Completed</button>
                </div>
            </div>
        </div>
    </div>
  )
}
