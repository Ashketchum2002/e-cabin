
import './App.css';
import AdminEmployee from './components/adminEmployee/AdminEmployee';
import AdminNavbar from "./components/adminNavbar/AdminNavbar"
import AdminDashBoard from './components/adminDashboard/AdminDashboard';
import AdminAddEmployee from './components/adminAddEmp/AdminAddEmployee';
import EmployeeDashBoard from './components/employeeDashboard/EmployeeDashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import EmployeeTasks from './components/employeeTasks/EmployeeTasks';
import Login from './components/login/Login';
import EmployeeProfile from "./components/employeeProfile/EmployeeProfile"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"

function App() {

  const { user } = useContext(AuthContext);

  return (
    <>

        <Router>
            <Routes>
                <Route exact path="/" element={user ? (user.isAdmin ? <Navigate to="/admin" /> : <Navigate to="/tasks" />) : <Login />}></Route>
                <Route path="/admin" element={user && user.isAdmin ? <AdminDashBoard /> : <Navigate to="/" />}></Route>
                <Route path="/profile" element={user ? <EmployeeProfile /> : <Navigate to="/" />}></Route>
                <Route path="/employee" element={user ? <EmployeeDashBoard /> : <Navigate to="/" />}></Route>
                <Route path="/tasks" element={user ? <EmployeeTasks /> : <Navigate to="/" />}></Route>
                <Route path="/addEmployee" element={user ? <AdminAddEmployee /> : <Navigate to="/" />}></Route>
            </Routes>
        </Router>

    </>
    
  );
}

export default App;