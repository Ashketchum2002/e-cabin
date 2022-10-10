import "./adminsidebar.css"
// import { employees as emps } from "../adminEmployee/test"
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useRef } from "react";
import axios from "axios"
import noAvatar from "./noAvatar.jpeg"

export default function AdminSidebar(props) {

    const search = useRef()

    const [employees, setEmployees] = useState(null)
    const [change, setChange] = useState(0)

    const [allEmployees, setAllEmployees] = useState(null)

    const fetchEmployees = async () => {
        var result = await axios.post("/api/employees/");
        setAllEmployees(result.data)
        setEmployees(result.data)
        // console.log(result.data);
    }

    useEffect(() => {
        // console.log(props.employees);
        setAllEmployees(props.employees)
        fetchEmployees();
    }, [])

    const handleSearch = () => {
        if (search.current.value == "") {
            setEmployees(allEmployees)
            // setChange(!change)
            return;
        }
        var newList = []
        for (var i = 0; i < allEmployees.length; i++) {
            if (allEmployees[i].name.toLowerCase().includes(search.current.value.toLowerCase())) {
                newList.push(allEmployees[i])
            }
        }
        if (newList.length != 0) {
            setEmployees(newList)
            // setChange(!change)
        }
    }

    return (
        <>
            <div className="sidebarWrapper">
                <div onClick={handleSearch} className="sidebarSearch">
                    <SearchIcon style={{color: "white", fontSize: "30px"}} />
                    <input ref={search} type="text"></input>
                </div>
                {employees ? (employees.map((emp) => {
                    return (
                        <div className="sidebarLink" id={emp._id} onClick={props.handleSelect}>
                            <div id={emp._id} onClick={props.handleSelect}><img id={emp._id} onClick={props.handleSelect} style={{width: "30px", borderRadius: "50%"}} src={noAvatar}></img></div>
                            <div id={emp._id} onClick={props.handleSelect} className="sidebarEmployeeName">{emp.name}</div>
                        </div>
                    )
                })) : ""}
            </div>
        </>
    )
}