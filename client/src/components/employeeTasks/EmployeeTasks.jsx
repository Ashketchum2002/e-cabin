import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import EmployeeSidebar from '../employeesidebar/EmployeeSidebar';
import EmployeeNavbar from "../employeeNavbar/EmployeeNavbar"
import "./employeetasks.css"
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Clock from 'react-live-clock';
import AddTaskPopup from "../addTaskPopup/AddTaskPopup";
// import { gsap } from "gsap"
import { useRef } from 'react';
// import { tasks as fakedata } from '../adminEmployee/test';
import AddTask from '@mui/icons-material/AddTask';
import axios from "axios"

export default function EmployeeTasks() {

    const [value, setValue] = useState(new Date());
    const [todayTasks, setTodayTasks] = useState(null);
    const [yesterdayTasks, setYesterdayTasks] = useState(null);
    const [employee, setEmployee] = useState(null);

    const fetchTasks = async () => {
        const temp = JSON.parse(localStorage.getItem("user"))
        // const tasks = await axios.post("http://localhost:8000/tasks/timeline", {userId: temp._id})
        const tasks = await axios.post("/api/tasks/todayTasks", {userId: temp._id})

        await tasks.data[0].sort((a, b) => {
            return a.startTime > b.startTime
        })

        await tasks.data[1].sort((a, b) => {
            return a.startTime > b.startTime
        })

        // console.log(test.data[0]);
        setTodayTasks(tasks.data[0])
        setYesterdayTasks(tasks.data[1])
    }

    const [trigger, setTrigger] = useState(0)

    useEffect(() => {

        const temp = JSON.parse(localStorage.getItem("user"))
        setEmployee(temp)

        fetchTasks()

    }, [value])

    const handleAddTask = () => {
        setTrigger(!trigger)
    }

    return (
        <>
            <EmployeeNavbar />
            <div className='tasksWrapper'>
            {trigger ? <AddTaskPopup employee={employee} handleAddTask={handleAddTask} trigger={trigger} /> : ""}
                
                {employee ? <EmployeeSidebar employee={employee} /> : ""}
                <div className='mainContainer'>
                    <div className="calendarAndButtonContainer">
                        <div className='calendarContainer'>
                            <Calendar value={value} onChange={setValue} />
                        </div>

                        <div className="addTaskButton">
                            <button onClick={handleAddTask}><PlaylistAddIcon style={{color: "white"}}/> Add Task</button>
                        </div>

                        <div className="clockContainer"><Clock format={'HH:mm:ss'} ticking={true} /></div>
                    </div>

                    <div className="tasksContainer">
                        <div className='todayTasks'>
                            <div style={{display: "flex", justifyContent: "center"}}><h1 style={{borderBottom: "1px solid black"}}>Today</h1></div>
                                {todayTasks ? (todayTasks.length == 0 ? <h1>No Data</h1> : todayTasks.map(task => {
                                    return (
                                        <div>
                                        <ul className="aTask">
                                            <li><p>Task Type: </p><p>{task.taskType.toUpperCase()}</p></li>
                                            <li><p>Start Time: </p><p>{String(new Date(task.startTime)).substring(16, 21)}</p></li>
                                            <li><p>Time Taken (in mins): </p><p>{task.timeTaken}</p></li>
                                            <li><p>Task Desc: </p><p>{task.taskDesc}</p></li>
                                        </ul>
                                        <hr></hr>
                                        </div>
                                        
                                    )
                                })) : ""}
                        </div>

                        <div className='yesterdayTasks'>
                        <div style={{display: "flex", justifyContent: "center"}}><h1 style={{borderBottom: "1px solid black"}}>Yesterday</h1></div>
                                {yesterdayTasks ? (yesterdayTasks.length == 0 ? <h1>No Data</h1> : yesterdayTasks.map(task => {
                                    return (
                                        <div>
                                        <ul className="aTask">
                                        <li><p>Task Type: </p><p>{task.taskType.toUpperCase()}</p></li>
                                            <li><p>Start Time: </p><p>{String(new Date(task.startTime)).substring(16, 21)}</p></li>
                                            <li><p>Time Taken (in mins): </p><p>{task.timeTaken}</p></li>
                                            <li><p>Task Desc: </p><p>{task.taskDesc}</p></li>
                                        </ul>
                                        <hr></hr>
                                        </div>
                                        
                                    )
                                })) : ""}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
