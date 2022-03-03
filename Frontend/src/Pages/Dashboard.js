import '../index.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from './Components/Image';

import { GetUserInDatabase, GetUserId } from '../Controllers/FrontendControllers';

export const Dashboard = () => {
    const navigate = useNavigate();

    const [isLoginFolded, setIsLoginFolded] = useState(true);

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const HandleFolded = () => {
        setIsLoginFolded(prev => !prev);
    };

    const HandleSubmit = async () => {
        const result = await GetUserInDatabase(username, password);
        if(result) {
            alert("SUCCESS: Account is logged in.")
            
            const result = await GetUserId(username, password);
            navigate(`/DashboardLoggedIn/${result.userid}`);
        } else {
            alert("ERROR: Not found in database. Please register your account.");
        }
    }

    return(
        <div className='container'>
            <div className='dashboard-container'>
                <div className='flexbox-row-center'><Image src={"https://www.shipleyenergy.com/wp-content/uploads/2021/01/construction-fuel-service-1.jpg"} alt={"Fuel Construction Image"} height={"auto"} width={"65%"}></Image></div>
                <div>Welcome to our fuel quote application for COSC4353. To start, enter your username and password inside the login. If you do not have an account, please register.</div>
                <div className='login-container'>
                    <div className='header' onClick={() => HandleFolded()} style={{borderBottom: isLoginFolded ? "0" : "1px solid rgb(141,141,141)"}}>Login</div>
                    <div className='content' style={{display: (isLoginFolded ? 'none' : 'block')}}>
                        <form className='flexbox-column-start'>
                            <label htmlFor="username">Username:</label>
                            <input className='input-border' type="text" id="username" onChange={(event) => setUsername(event.target.value)}></input>
                            
                            <label htmlFor="password">Password</label>
                            <input className='input-border' type="password" id="password" onChange={(event) => setPassword(event.target.value)}></input>
                        </form>
                        <button className='submit-button' onClick={HandleSubmit}>Submit</button>
                        <Link to={'/UserRegistrationFirst'}>Register for an account.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}