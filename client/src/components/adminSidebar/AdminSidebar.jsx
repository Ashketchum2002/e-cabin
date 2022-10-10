import "./adminsidebar.css"
import { employees as emps } from "../adminEmployee/test"
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap"
import axios from "axios"

export default function AdminSidebar(props) {

    const search = useRef()

    const [employees, setEmployees] = useState([])
    const [change, setChange] = useState(0)

    const [allEmployees, setAllEmployees] = useState([])

    // const fetchEmployees = async () => {
    //     var result = await axios.get("/api/employees/");
    //     setAllEmployees(result.data)
    //     setEmployees(result.data)
    //     console.log(result.data);
    // }

    useEffect(() => {
        setAllEmployees(props.employees)
        // fetchEmployees();
    }, [])

    // const handleSearch = () => {
    //     if (search.current.value == "") {
    //         setEmployees(allEmployees)
    //         // setChange(!change)
    //         return;
    //     }
    //     var newList = []
    //     for (var i = 0; i < allEmployees.length; i++) {
    //         if (allEmployees[i].name.toLowerCase().includes(search.current.value.toLowerCase())) {
    //             newList.push(allEmployees[i])
    //         }
    //     }
    //     if (newList.length != 0) {
    //         setEmployees(newList)
    //         // setChange(!change)
    //     }
    // }

    return (
        <>
            <div className="sidebarWrapper">
                <div className="sidebarSearch">
                    <SearchIcon style={{color: "white", fontSize: "30px"}} />
                    <input ref={search} type="text"></input>
                </div>
                {props.employees.length != 0 ? props.employees.map((emp) => {
                    return (
                        <div className="sidebarLink" id={emp._id} onClick={props.handleSelect}>
                            <div id={emp._id} onClick={props.handleSelect}><img id={emp._id} onClick={props.handleSelect} style={{width: "30px", borderRadius: "50%"}} src="https://t4.ftcdn.net/jpg/03/40/12/49/360_F_340124934_bz3pQTLrdFpH92ekknuaTHy8JuXgG7fi.jpg"></img></div>
                            {/* <div id={emp._id} onClick={props.handleSelect} className="sidebarEmployeeId">{emp._id}</div> */}
                            <div id={emp._id} onClick={props.handleSelect} className="sidebarEmployeeName">{emp.name}</div>
                        </div>
                    )
                }) : ""}
            </div>
        </>
    )
}