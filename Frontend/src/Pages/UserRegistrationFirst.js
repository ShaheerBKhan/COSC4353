import '../index.css';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PostUserRegistrationFirst } from '../Controllers/FrontendControllers';

export const UserRegistrationFirst = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const HandleSubmit = async () => {
        if(!username) {
            alert("Please enter a username.");
            return;
        }

        if(!password) {
            alert("Please enter a password.");
            return;
        }
        
        const result = await PostUserRegistrationFirst(username, password);
        if(result) {
            alert("SUCCESS: User has been created.");
            navigate("/");
        }
        else {
            alert("ERROR: Username already exists in the database. Please select another username.");
        }
    }
    
    return(
        <div className="Custom_Form">
            <div className= "Input_form">
                <form>
                    <label htmlFor="username">Userrname:</label>
                    <input className='input-border' type="text" id="username" onChange={(event) => setUsername(event.target.value)}></input>
                    
                    <label htmlFor="password">Password</label>
                    <input className='input-border' type="text" id="password" onChange={(event) => setPassword(event.target.value)}></input>
                </form>
                <button className='submit-button' onClick={HandleSubmit}>Submit</button>
            </div>
        </div>
    );
}