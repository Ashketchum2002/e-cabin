
import "./employeedashboard.css"
import EmployeeSidebar from "../employeesidebar/EmployeeSidebar"
import EmployeeNavbar from "../employeeNavbar/EmployeeNavbar"
import AdminEmployee from "../adminEmployee/AdminEmployee"
import { useState, useEffect } from "react"
// import employees from "../adminEmployee/test"

export default function EmployeeDashBoard() {

    const [employee, setEmployee] = useState(null)
    
    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem("user"))
        if (temp) {
            setEmployee(temp)
        }
    }, [])

    return (
        <>
            <div className="employeeDashboardWrapper">
                <EmployeeNavbar />
                <div className="dashboardMain">
                    {employee ? <EmployeeSidebar employee={employee} /> : ""}
                    {employee ? <AdminEmployee employee={employee} /> : ""}
                </div> 
            </div>
        </>
    )
}