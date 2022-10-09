import "./login.css"
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate("/");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(e.target[0].value);
        
        if (e.target[0].id == "email") {
            setEmail(e.target[0].value);
        }

        else {
            // setPassword(e.target[0].value);
            // loginCall(
            //     { email: email, password: e.target[0].value },
            //     dispatch
            //   );
            try {
                const res = await axios.post("/api/auth/login", {email: email, password: e.target[0].value})
                if ((typeof(res.data) != "object") && res.data.includes("Create an account")) {
                    alert(res.data);
                    navigate("/")
                } else if ((typeof(res.data) != "object") && res.data.includes("Password is incorrect")) {
                    alert(res.data);
                } else if (res.data.email) {
                    localStorage.setItem("user", JSON.stringify(res.data))
                    alert("Login Success")
                    document.location.reload();
                }
            } catch(err) {
                alert(err)
            }
        }
    }

    useEffect(() => {
        // setPassword("")
    }, [email])

    return (
        <div className="wrapper">
            <div className="loginContainer">

                <div className="formContainer">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div className="title">Sign-In</div>
                        {email=="" ? "" : <p className="userEmail">{email} <a href="">Change</a></p>}
                        {email=="" ? <label htmlFor="email">Email or phone number</label> : <label htmlFor="password">Password</label>}
                        {email=="" ? <input className="loginInput" default="" type="text" name="email" id="email"/> : <input className="loginInput" default="" type="password" name="password" id="password"/>}
                        {email=="" ? <button type="submit" className="submitButtonLogin">Continue</button> : <button type="submit" className="submitButton">Sign-in</button>}
                        {
                            email=="" ? <div className="privacyPolicy">
                                            By continuing, you agree to our <a>Conditions of Use</a> and <a>Privacy Notice</a>.
                                        </div> 
                        : 
                                        <div className="checkRememberMe">
                                            <input type="checkbox" name="rememberMe" value="true" />
                                            <p>Keep me signed in.</p>
                                            <a href="">Details</a>
                                            <ArrowDropDownIcon />
                                        </div>
                        }

                        {email=="" ? <div className="needHelp">
                            <ArrowRightOutlinedIcon /> 
                            <a>Need help?</a>
                        </div> : ""}
                    </form>
                    <div className="signUpContainer">
                        {email=="" ? <p className="newTo">New user?</p> : <p className="newTo">or</p>}
                        {email=="" ? <button onClick={handleRedirect} className="createAccountButton">Create your account</button> : <button className="createAccountButton">Get OTP on your phone</button>}
                    </div>
                </div>
            </div>

            <div className="footer">
                <ul className="footerLinks">
                    <li><a href="">Conditions of use</a></li>
                    <li><a href="">Privacy Notice</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>
        </div>
    );
}
