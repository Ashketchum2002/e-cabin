
import "./adminnavbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function AdminNavbar(props) {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }

    return (
        <>
            <div className="navContainer">
                <Link to="/admin" style={{textDecoration: "none"}}>
                    <div className="navLink">
                        <HomeIcon />
                        <p>Dashboard</p>
                    </div>
                </Link>

                <div className="navLink">
                    <PersonIcon />
                    <p>Account Profile</p>
                </div>
                
                {/* <Link to="/addEmployee" style={{textDecoration: "none"}}>
                    <div className="navLink">
                        <PersonAddIcon />
                        <p>Add Employee</p>
                    </div>
                </Link> */}

                <div onClick={props.handlePopup} className="navLink">
                    <PersonAddIcon />
                    <p>Add Employee</p>
                </div>
                

                <div onClick={handleLogout} className="navLink">
                    <LogoutIcon style={{color: "red"}} />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}