import "./addtaskpopup.css"
import AdminNavbar from "../adminNavbar/AdminNavbar";
import DescriptionIcon from '@mui/icons-material/Description';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useRef } from "react";
import { useEffect } from "react"
import CloseIcon from '@material-ui/icons/Close';
import { gsap } from "gsap"
import axios from "axios"

export default function AddTaskPopup(props) {

    const taskDescription = useRef()
    const taskType = useRef()
    const startTime = useRef()
    const timeForCompletion = useRef()

    const popup = useRef();
    const tl = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline()
              .to(".closePopupButton", {
                rotate: 270, duration: 1
              })
          }, popup);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Number(startTime.current.value.substring(8, 10)) > Number(new Date().getDate())) {
            alert("You cannot add tasks for future dates")
            return 
        }
        const result = await axios.post("/api/tasks/", {employeeId: props.employee._id, taskDesc: taskDescription.current.value, taskType: taskType.current.value, startTime: startTime.current.value, timeTaken: timeForCompletion.current.value})
        if (result) {
            alert("Close to reload")
            window.location.reload()
        }
    }

    return (
        <>
            
                <div className="popupOuter">

                    <div className={props.trigger == 1 ? "addTaskFrom" : "addTaskForm dropPopup"}>
                    
                    <form onSubmit={handleSubmit}>

                        <div ref={popup} className="closePopupButtonContainer">
                            <button className="closePopupButton" style={{borderRadius: "50%"}} onClick={props.handleAddTask}><CloseIcon style={{fontSize: "40px"}} /></button>
                        </div>

                        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                            <PlaylistAddIcon />
                            <h3 style={{marginLeft: "10px"}}>Add a New Task</h3>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <div className="formElement">
                            <div><DescriptionIcon style={{fontSize:"30px"}} /></div>
                            <input required ref={taskDescription} id="taskDescription" type="text" placeholder="Task Description"></input>
                        </div>

                        <div className="formElement">
                            <div><FormatListBulletedIcon style={{fontSize:"30px"}} /></div>
                            <select required ref={taskType} id="taskType">
                            <option value={"work"} selected disabled hidden>Task Type</option>
                                <option value={"break"}>Break</option>
                                <option value={"meet"}>Meet</option>
                                <option value={"work"}>Work</option>
                            </select>
                            
                        </div>

                        <div className="formElement">
                            <div><AccessTimeIcon style={{fontSize:"30px"}} /></div>
                            <input required ref={startTime} type="datetime-local" id="startTime" ></input>
                        </div>

                        <div className="formElement">
                            <div><TimelapseIcon style={{fontSize:"30px"}} /></div>
                            <input required ref={timeForCompletion} id="timeForCompletion" type="number" placeholder="Time Taken For Task Completion (in Min)"></input>
                        </div>

                        <button className="submitButton" type="submit">Add Task</button>
                        </form>
                    </div>
                </div>

        </>
    )
}
