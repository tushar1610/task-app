import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = React.createContext()

const allTaskUrl = "http://localhost:8080/getAllTask"
const activeTaskUrl = "http://localhost:8080/getActiveTask"
const completedTaskUrl = "http://localhost:8080/getCompletedTask"
const addTaskUrl = "http://localhost:8080/addTask"
const updateTaskUrl = "http://localhost:8080/updateActiveTask"
const deleteTaskUrl = "http://localhost:8080/deleteTask"

export const AppProvider = ({children}) => {
    const [taskData, setTaskData] = useState([])
    const [buttonId, setButtonId] = useState("viewAll")
    const [text, setText] = useState("Tasks")
    const [dataChanged, setDataChanged] = useState(false)
    const [task, setTask] = useState()
    const [completedId, setCompletedId] = useState(-1)
    const [deleteId, setDeleteId] = useState(-1)

    const fetchData = async(url) => {
        try {
            const {data} = await axios.get(url)
            if(data){
                console.log(data)
                setTaskData(data)
                setDataChanged(false)
            } else {
                setTaskData([])
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    const postData = async(url, body) => {
        try {
            const {data} = await axios.post(url, body)
            console.log(data)
            setDataChanged(true)
        } catch (error) {
            console.log(error.response)
        }
    }

    const putData = async(url, taskId) => {
        try {
            const {data} = await axios.put(url+'/'+taskId)
            console.log(data)
            setCompletedId(-1)
            setDataChanged(true)
        } catch (error) {
            console.log(error.response)
        }
    }

    const deleteData = async(url, taskId) => {
        try {
            const {data} = await axios.delete(url+'/'+taskId)
            console.log(data)
            setDeleteId(-1)
            setDataChanged(true)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        if(buttonId === "viewAll"){
            setText("All Tasks")
            fetchData(allTaskUrl)
        } else if(buttonId === "active"){
            setText("Active Tasks")
            fetchData(activeTaskUrl)
        } else {
            setText("Completed Tasks")
            fetchData(completedTaskUrl)
        } 
    }, [buttonId, dataChanged])

    useEffect(() => {
        if(task){
            postData(addTaskUrl, task)
        }
    }, [task])

    useEffect(() => {
        if(completedId !== -1){
            putData(updateTaskUrl, completedId)
        }
    }, [completedId])

    useEffect(() => {
        if(deleteId !== -1){
            deleteData(deleteTaskUrl, deleteId)
        }
    }, [deleteId])

    return (
        <AppContext.Provider value={{taskData, buttonId, setButtonId, text, setTask, setCompletedId, setDeleteId}}>
            {children}
        </AppContext.Provider>
    )
}