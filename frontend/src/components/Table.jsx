import React, { useContext } from 'react'
import { AppContext } from '../context/FetchContext'

export default function Table() {
    const {taskData, setCompletedId, setDeleteId} = useContext(AppContext)
  return (
    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Description</th>
            </tr>
        </thead>
        {
            taskData.map((task) => {
                return (
                    <tbody key={task.id}>
                        <tr className='table-row'>
                            <th scope="row">{taskData.indexOf(task)+1}</th>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.description}{(task.status === "active") ? 
                            <button onClick={() => setCompletedId(task.id)} className='btn btn-success btn-sm mx-3 d-inline-block completed-button'>Completed</button>
                             : 
                             <button onClick={() => setDeleteId(task.id)} className='btn btn-danger btn-sm mx-3 d-inline-block delete-button'>Delete</button>}</td>
                        </tr>
                    </tbody>
                )
            })
        }
    </table>
  )
}
