import "./EmployeeProfile.css"
import AdminNavbar from "../adminNavbar/AdminNavbar"
import EmployeeNavbar from "../employeeNavbar/EmployeeNavbar";
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import LockClockIcon from '@mui/icons-material/LockClock';
import { useRef } from "react";
import { useState, useEffect } from "react";
import axios from "axios"

export default function EmployeeProfile(props) {

    const name = useRef()
    const email = useRef()
    const mobile = useRef()
    const department = useRef()
    const joiningDate = useRef()

    const [user, setUser] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("hi")
        const result = await axios.post("/api/auth/editProfile", {_id: user._id, name: name.current.value, phoneNumber: mobile.current.value})

        alert(result.data)

        document.location.reload();
    }

    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem("user"))
        
        setUser(temp)
    })

    return (
        <>
            {user ? <div className="profileEditWrapper">
                {user ? (user.isAdmin ? <AdminNavbar /> : <EmployeeNavbar />) : ""}
                <div className="profileEdit">
                    <form onSubmit={handleSubmit}>

                        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                            <EditIcon />
                            <h3 style={{marginLeft: "10px"}}>Edit Your Details</h3>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <div className="formElement readOnly">
                            <div><PersonIcon style={{fontSize:"30px", color: "black"}}/></div>
                            <input ref={name} id="name" type="text" placeholder={user.name}/>
                        </div>
                        <div className="formElement ">
                            <div><EmailIcon style={{fontSize:"30px", color:"red"}} /></div>
                            <input  ref={email} id="email" type="text" value={user.email} readOnly></input>
                        </div>

                        <div className="formElement">
                            <div><LocalPhoneIcon style={{fontSize:"30px"}} /></div>
                            <input ref={mobile} id="mobile" type="text" placeholder={user.phoneNumber}></input>
                        </div>

                        <div className="formElement readOnly">
                            <div><LockIcon style={{fontSize:"30px"}} /></div>
                            <input ref={department} id="department" type="text" value={user.department} readOnly/>
                        </div>

                        <div className="formElement readOnly">
                            <div><LockClockIcon style={{fontSize:"30px"}} /></div>
                            <input ref={joiningDate} id="joiningDate" type="text" value={user.joiningDate} readOnly/>
                        </div>

                        <button className="submitButton" type="submit">Save Changes</button>
                    </form>
                </div>
            </div> : ""}
        </>
    )
}