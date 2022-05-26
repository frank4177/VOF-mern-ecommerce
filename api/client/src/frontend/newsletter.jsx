import { Send } from '@material-ui/icons';
import React, { useState } from 'react'
import './newsletter.css'
import db from "../../src/firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const Newsletter = () => {
    const [input, setInput] = useState("")
    const [message, setMessage] = useState("");

    

    const inputHandler = (e) =>{
        setInput(e.target.value);
    }

    const handleClick = (e) =>{
        e.preventDefault();
        if(input){
            db.collection("emails").add({
                email: input, 
                time: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setInput("");
            setMessage("Thank you for subscribing!")
            setTimeout(()=>{
                setMessage("")
            }, 3000)

        }
    }
    
    return ( 
        <div className="newsLetter-container">
            <h1>Newsletter</h1>
            <div className="description">Get timely updates of your favorite products</div>

            <form action="" className="searchForm" >
                <input type="email" className="searchBox" placeholder="Your email" onChange={inputHandler} value={input}/>
                <Send className="searchLogo" onClick={handleClick}/>
                {/* <button onClick={handleClick}>submit</button> */}
            </form>
            {message && <h2>{message}</h2>}
        </div>
     );
}
 
export default Newsletter;

