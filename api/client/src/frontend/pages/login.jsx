import React from "react";
import './login.css'
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link} from 'react-router-dom'



    const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching} = useSelector((state)=> state.user)


    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {email, password});
    }


    const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: orange;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    &:disabled{
        color: orange ;
        cursor: not-allowed;
    }
    `;

    return ( 
        <div className="login-container">
            <div className="login-wrapper">
                <h1>SIGN IN</h1>
                <form action="">
                    <input type="email" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <Button type="submit" onClick={handleClick}  disabled={isFetching}>LOGIN</Button>
                    {/* <h3>Email: admin@me.com</h3>
                    <h3>Password: 12345</h3> */}
                    <Link to="/signup">CREATE A NEW ACCOUNT</Link>
                    <a >FORGOT PASSWORD?</a>
                </form>
            </div>
        </div>
     );
}
 
export default Login;