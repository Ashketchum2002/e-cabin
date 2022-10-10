import "./employeenavbar.css"
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import AddTaskIcon from '@mui/icons-material/AddTask';
import {Link, Navigate} from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export default function EmployeeNavbar() {

    const [active, setActive] = useState(0);

    const navigate = useNavigate()

    const clicked = () => {
        setActive(!active)
    }

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("employee")
        // navigate("/")
        document.location.reload();
    }

    const navContainer = useRef()
    const tl1 = useRef(gsap.timeline())

    useEffect(() => {
        
        const ctx = gsap.context(() => {
            tl1.current = gsap.timeline()
                .fromTo(".navLink", {
                    y: "-50px"
                }, {
                    y: "20px", duration: 1
                })
                .to(".navLink", {
                    y: "-10px", duration: 1
                })
                .to(".navLink", {
                    y: "0px", duration: 1
                })
          }, navContainer);
    }, [])

    return (
        <>
            <div ref={navContainer} className={active == 0 ? "navContainer" : "navContainer blockDisplay"}>

            {active == 0 ? <div onClick={clicked} className="hamburger"><MenuIcon style={{color: "black"}} /></div> : <div onClick={clicked} className="hamburger"><CloseIcon style={{color: "black"}} /></div>}


                <Link to="/employee" style={{textDecoration: "none"}}>
                    <div className={active == 0 ? "navLink drop" : "navLink"}>
                        <HomeIcon />
                        <p>Dashboard</p>
                    </div>
                </Link>

                <Link to="/profile" style={{textDecoration: "none"}}>
                    <div className={active == 0 ? "navLink drop" : "navLink"}>
                        <PersonIcon />
                        <p>Account Profile</p>
                    </div>
                </Link>
                
                <Link to="/tasks" style={{textDecoration: "none"}}>
                    <div className={active == 0 ? "navLink drop" : "navLink"}>
                        <AddTaskIcon />
                        <p>Tasks</p>
                    </div>
                </Link>
                

                <div onClick={handleLogout} className={active == 0 ? "navLink drop" : "navLink"}>
                    <LogoutIcon style={{color: "red"}} />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}