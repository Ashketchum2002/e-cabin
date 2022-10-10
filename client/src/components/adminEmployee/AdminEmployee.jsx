
import "./adminemployee.css"
import { useEffect, useState } from "react"
import employees from "./test"
import { empData } from "./test"
import { data1, data2 } from "./test.js"
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import axios from "axios"


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

export default function AdminEmployee(props) {

    const [stackedBarData, setStackedBarData] = useState(null);
    const [empData, setEmpData] = useState(null)
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    const fetchData = async () => {
        var result = await axios.post("/api/employees/weeklyStats", {_id: props.employee._id})
      
        setEmpData(result.data)

        setStackedBarData({
            labels,
            datasets: [
              {
                label: 'Work',
                data: result.data.map(ele => {return ele[0]}),
                backgroundColor: 'rgb(255, 99, 132)',
              },
              {
                label: 'Meet',
                data: result.data.map(ele => {return ele[1]}),
                backgroundColor: 'rgb(75, 192, 192)',
              },
              {
                label: 'Break',
                data: result.data.map(ele => {return ele[2]}),
                backgroundColor: 'rgb(53, 162, 235)',
              },
            ],
          });

          setData1({
            labels: ['Work', 'Meet', 'Break'],
            datasets: [
              {
                label: 'Work day spent in minutes',
                data: result.data[0],
                backgroundColor: [
                  '#ff6666',
                  '#ffe338',
                  '90e0ef'
                ],
                borderColor: [
                  'red',
                  'black',
                  'darkblue'
                ],
                borderWidth: 1,
              },
            ],
          });

          setData2({
            labels: ['Work', 'Meet', 'Break'],
            datasets: [
              {
                label: 'Work day spent in minutes',
                data: result.data[1],
                backgroundColor: [
                  '#ff6666',
                  '#ffe338',
                  '90e0ef'
                ],
                borderColor: [
                  'red',
                  'black',
                  'darkblue'
                ],
                borderWidth: 1,
              },
            ],
          });

    }

    var labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    var options = {
        plugins: {
          title: {
            display: true,
            text: 'Work week (in minutes)',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
    };

    useEffect(() => {

        fetchData()
        
    }, [props.employee])

    return (
        <>
            <div className="employeeCardWrapper">
                {/* <Pie data={data}></Pie> */}
                <div className="employeeInfoCard">
                    <h2>{props.employee.name}</h2>
                    <div className="info">
                        <div className="infoLink"><PermIdentityIcon style={{color: "white", borderRadius: "50%", padding: "5px", fontSize: "35px", backgroundColor: "rgb(0, 102, 255)"}} /> <p>{props.employee._id}</p></div>
                        <div className="infoLink"><LocalPhoneIcon style={{color: "white", borderRadius: "50%", padding: "5px", fontSize: "30px", backgroundColor: "green"}} /> <p>{props.employee.phoneNumber}</p></div>
                        <div className="infoLink"><EmailIcon style={{color: "white", borderRadius: "50%", padding: "5px", fontSize: "30px", backgroundColor: "tomato"}} /> <p>{props.employee.email}</p></div>
                    </div>
                </div>

                <div className="chartsWrapper">
                    <div className="piecharts">
                        <div className="piechart1">
                            <h3 style={{margin: "0", marginBottom: "20px"}}>{props.employee.name}'s work day today (in minutes)</h3>
                            {data1 ? ((empData[0][0] == 0 && empData[0][1] == 0 && empData[0][2] == 0) ? "" : <Pie data={data1}></Pie>) : ""}
                            {empData ? ((empData[0][0] == 0 && empData[0][1] == 0 && empData[0][2] == 0) ? <h1 style={{color:"red"}}>No Data</h1>: "") : ""}
                        </div>
                        <div className="piechart2">
                            <h3 style={{margin: "0", marginBottom: "20px"}}>{props.employee.name}'s work day yesterday (in minutes)</h3>
                            {data2 ? ((empData[1][0] == 0 && empData[1][1] == 0 && empData[1][2] == 0) ? "" : <Pie data={data2}></Pie>) : ""}
                            {empData ? ((empData[1][0] == 0 && empData[1][1] == 0 && empData[1][2] == 0) ? <h1 style={{color: "red"}}>No Data</h1>: "") : ""}
                        </div>
                    </div>
                    <div className="stackedBarChart">
                        {stackedBarData ? <Bar options={options} data={stackedBarData} /> : ""}
                    </div>
                </div>
            </div>
        </>
    )
}