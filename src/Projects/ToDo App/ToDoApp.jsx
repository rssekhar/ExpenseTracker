import { useState } from 'react'
import './ToDoApp.css'
export default function ToDoApp() {
    const [task_name, setTaskName] = useState("")
    const [task, setTasks] = useState([])
    const [edit, setEdit] = useState("")

    const handleInput = (e) => {
        setTaskName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: edit ? edit : task.length + 1,
            task_name: task_name
        }
        if (edit) {
            const newD = task.map((eachVal)=>eachVal.id === edit ? {...task,...newTask} : eachVal)
            setTasks(newD)
            setEdit("")
        }
        else {
            setTasks([...task, newTask]);
            setEdit("")
        }

        console.log(newTask)
        setTaskName("")
    }
    const handleDelete = (id) => {
        const confirmbtn = window.confirm("Are you sure you want to delete the task");
        if (confirmbtn) {
            const newData = task.filter((eachVal) => eachVal.id !== id)
            setTasks(newData)
        }
    }
    const handleEdit = (id) => {
        const findData = task.find((eachVal) => eachVal.id === id)
        setEdit(findData.id)
        setTaskName(findData.task_name)
    }

    return (
        <>
            <div className="container">
                <div>
                    <h1>ToDo App</h1>
                </div>
                <div>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="Task Name">Task Name</label>
                            <input type="text" name="task_name" id="task_name" onChange={handleInput} value={task_name} required />
                        </div>
                        <div>
                            <button type='submit'>{edit ? "Update" : "Submit"}</button>
                        </div>
                    </form>
                </div>
                <hr />
                <div>
                    <h3>ToDo Summary</h3>
                </div>
                <ul>
                    {
                        task.length > 0 ? (
                            task.map((eachbal) => {
                                const { id, task_name } = eachbal
                                return (
                                    <div key={id}>
                                        <li>{id}</li>
                                        <li>{task_name}</li>
                                        <li>
                                            <button onClick={() => handleEdit(id)}>
                                                Edit</button>
                                            <button onClick={() => handleDelete(id)}>Delete</button>
                                        </li>
                                    </div>
                                )
                            })
                        ) : "No Data Found"
                    }
                </ul>
            </div>
        </>
    )
}