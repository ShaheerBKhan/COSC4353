import '../index.css';
import React, { useState } from 'react';

import { PostUserRegistrationFirst } from '../Controllers/FrontendControllers';

export const UserRegistrationFirst = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const HandleSubmit = async () => {
        await PostUserRegistrationFirst(username, password);
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