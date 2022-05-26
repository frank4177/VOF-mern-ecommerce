import React from "react";
import './signup.css'
import { useState } from "react";
import { signup } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const SignUp = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUsername] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("");
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector((state)=> state.user)

    const handleClick = (e) => {
        e.preventDefault()
        signup(dispatch, {email, password, userName, firstName, lastName, phoneNumber});

        setFirstname("");
        setLastname("");
        setPassword("");
        setEmail("");
        setUsername("");
        setPhoneNumber("");
            setMessage("Thank you for Registering!")
            setTimeout(()=>{
                setMessage("")
            }, 3000)
    }

    return ( 
        <div className="signup-container">
            <div className="signup-wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form action="">
                    <input type="text" placeholder="name" value={firstName} onChange={(e) => setFirstname(e.target.value)}/>
                    <input type="text" placeholder="last name" value={lastName} onChange={(e) => setLastname(e.target.value)}/>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" placeholder="username" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                    <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="text" placeholder="phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <div className="agreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button onClick={handleClick}><h3>Create</h3></button>
                </form>
                {message && <h2>{message}</h2>}
            </div>
        </div>
     );
}
 
export default SignUp;