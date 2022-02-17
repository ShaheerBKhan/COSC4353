import '../index.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Components/Image';

export const Dashboard = () => {
    const [isLoginFolded, setIsLoginFolded] = useState(true);

    const HandleFolded = () => {
        setIsLoginFolded(prev => !prev);
    };

    return(
        <div className='container'>
            <div className='dashboard-container'>
                <div className='flexbox-row-center'><Image src={"https://www.shipleyenergy.com/wp-content/uploads/2021/01/construction-fuel-service-1.jpg"} alt={"Fuel Construction Image"} height={"auto"} width={"65%"}></Image></div>
                <div>Welcome to our fuel quote application for COSC4353. To start, enter your username and password inside the login. If you do not have an account, please register.</div>
                <div className='login-container'>
                    <div className='header' onClick={() => HandleFolded()} style={{borderBottom: isLoginFolded ? "0" : "1px solid rgb(141,141,141)"}}>Login</div>
                    <div className='content' style={{display: (isLoginFolded ? 'none' : 'block')}}>
                        <form className='flexbox-column-start'>
                            <label for="username">Userrname:</label>
                            <input className='input-border' type="text" id="username"></input>
                            <label for="password">Password</label>
                            <input className='input-border' type="text" id="password"></input>
                            <input className='submit-button' type="submit" value="Submit"></input>
                        </form>
                        <Link to={'/UserRegistrationFirst'}>Register for an account.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}