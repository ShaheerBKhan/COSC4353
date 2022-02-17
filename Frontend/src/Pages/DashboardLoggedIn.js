import '../index.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const DashboardLoggedIn = () => {
    const [isAccountFolded, setIsAccountFolded] = useState(true);
    const [isFuelFolded, setIsFuelFolded] = useState(true);

    const HandleAccountFolded = () => {
        setIsAccountFolded(prev => !prev);
    };
    const HandleFuelFolded = () => {
        setIsFuelFolded(prev => !prev);
    };

    return(
        <div className='container'>
            <div className='dashboardLoggedIn-container'>
                <div className='login-container'>
                    <div className='header' onClick={() => HandleAccountFolded()} style={{borderBottom: isAccountFolded ? "0" : "1px solid rgb(141,141,141)"}}>Account Information</div>
                    <div className='content' style={{display: (isAccountFolded ? 'none' : 'block')}}>
                        <Link to={'/UserAccount'}>Manage Account.</Link>
                    </div>
                </div>
                <div className='login-container'>
                    <div className='header' onClick={() => HandleFuelFolded()} style={{borderBottom: isFuelFolded ? "0" : "1px solid rgb(141,141,141)"}}>Fuel Quote Information</div>
                    <div className='content' style={{display: (isFuelFolded ? 'none' : 'block')}}>
                        <Link to={'/FuelQuoteForm'}>Get a Fuel Quote,</Link>
                        <Link to={'/FuelQuoteHistory'}>Fuel Quote History.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}