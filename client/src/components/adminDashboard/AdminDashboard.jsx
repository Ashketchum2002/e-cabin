
import "./admindashboards.css"
import AdminNavbar from "../adminNavbar/AdminNavbar"
import AdminSidebar from "../adminSidebar/AdminSidebar"
import AdminEmployee from "../adminEmployee/AdminEmployee"
import AdminAddEmployee from "../adminAddEmp/AdminAddEmployee"
import { useState, useEffect } from "react"
import axios from "axios"
import LoadingPopup from "../loadingPopup/LoadingPopup"
// import employees from "../adminEmployee/test"

export default function AdminDashBoard() {

    const [employee, setEmployee] = useState(null);

    const [allEmployees, setAllEmployees] = useState(null);

    const [change, setChange] = useState(0);

    const [trigger, setTrigger] = useState(0)

    const [loading, setLoading] = useState(0)

    const fetchEmployees = async () => {
        var result = await axios.post("/api/employees/");
        
        setAllEmployees(result.data)

        // alert("Fetched")
        // console.log(result.data);
        
        var cur = JSON.parse(localStorage.getItem("employee"))
        if (cur) {
            setEmployee(cur)
        }
        else {
            setEmployee(result.data[0])
        }
    }

    useEffect(() => {
        fetchEmployees()
        if (loading == 1) {
            setTimeout(() => {
                setLoading(!loading);
            }, 2000)
        }
    }, [change])

    const handleSelect = (e) => {
        for (var i = 0; i < allEmployees.length; i++) {
            if (e.target.id == allEmployees[i]._id) {
                setEmployee(allEmployees[i])
                setChange(!change);
                localStorage.setItem("employee", JSON.stringify(allEmployees[i]))
            }
        }
        setChange(!change)
        setLoading(!loading)
        setTimeout(() => {
            setLoading(!loading);
        }, 2000)
    }

    const handlePopup = () => {
        setTrigger(!trigger)
    }

    return (
        <>
            {allEmployees ? <div className="dashboardWrapper">
                {trigger == 1 ? <AdminAddEmployee handlePopup={handlePopup} trigger={trigger} /> : ""}
                {loading == 1 ? <LoadingPopup loading={loading} /> : ""}
                <AdminNavbar handlePopup={handlePopup} />
                <div className="dashboardMain">
                    {allEmployees ? <AdminSidebar employees={allEmployees} handleSelect={handleSelect} /> : ""}
                    {employee ? <AdminEmployee employee={employee} /> : ""}
                </div> 
            </div> : ""}
        </>
    )
}