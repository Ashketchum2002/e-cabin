import "./adminaddemployee.css"
import AdminNavbar from "../adminNavbar/AdminNavbar"
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useRef, useEffect } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { gsap } from "gsap"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function AdminAddEmployee(props) {

    const name = useRef()
    const email = useRef()
    const mobile = useRef()
    const department = useRef()
    const joiningDate = useRef()
    const isAdmin = useRef()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post("/api/employees/addEmployee", {name: name.current.value, email: email.current.value, phoneNumber: mobile.current.value, department: department.current.value, joiningDate: joiningDate.current.value, isAdmin: isAdmin.current.value})
        // console.log(result);
        alert("Close to reload")
        window.location.reload()
    }

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

    return (
        <>
            <div className="popupOuter">
                <div className={props.trigger == 1 ? "addEmployeeWrapper" : "addEmployeeWrapper dropPopup"}>
                    {/* <AdminNavbar /> */}
                    <div className="addEmployeeFrom">
                        <form onSubmit={handleSubmit}>
                        <div ref={popup}><button onClick={props.handlePopup} className="closePopupButton" style={{padding: "5px", border: "none"}}><CloseIcon /></button></div>
                            <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
                                <PersonAddIcon />
                                <h3 style={{marginLeft: "10px"}}>New Employee Addition Form</h3>
                            </div>
                            <div className="formElement">
                                <div><PersonIcon style={{fontSize:"30px"}} /></div>
                                <input ref={name} id="name" type="text" placeholder="Full Name"></input>
                            </div>

                            <div className="formElement">
                                <div><EmailIcon style={{fontSize:"30px"}} /></div>
                                <input ref={email} id="email" type="text" placeholder="Email"></input>
                            </div>

                            <div className="formElement">
                                <div><LocalPhoneIcon style={{fontSize:"30px"}} /></div>
                                <input ref={mobile} id="mobile" type="text" placeholder="Mobile Number"></input>
                            </div>

                            <div className="formElement">
                                <div><WorkIcon style={{fontSize:"30px"}} /></div>
                                <input ref={department} id="department" type="text" placeholder="Department"></input>
                            </div>

                            <div className="formElement">
                                <div><DateRangeIcon style={{fontSize:"30px"}} /></div>
                                <input ref={joiningDate} id="joiningDate" type="text" placeholder="Joining Date -> (YYYY-MM-DD)"></input>
                            </div>

                            <div className="formElement">
                                <div><PersonIcon style={{fontSize:"30px"}} /></div>
                                <input ref={isAdmin} id="name" type="text" placeholder="Is Admin? (true or false)"></input>
                            </div>

                            <button className="submitButton" type="submit">Add Employee</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}