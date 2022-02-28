import '../index.css';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const DashboardLoggedIn = () => {
    const { userId } = useParams();

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
            <div>User Id: {userId}</div>
            <div className='dashboardLoggedIn-container'>
                <div className='account-container'>
                    <div className='header' onClick={() => HandleAccountFolded()} style={{borderBottom: isAccountFolded ? "0" : "1px solid rgb(141,141,141)"}}>Account Information</div>
                    <div className='content' style={{display: (isAccountFolded ? 'none' : 'block')}}>
                        <div><Link to={'/UserAccount'}>User Account.</Link></div>
                        <div><Link to={'/UserRegistrationSecond'}>Configure User Account.</Link></div>
                    </div>
                </div>
                <div className='fuel-container'>
                    <div className='header' onClick={() => HandleFuelFolded()} style={{borderBottom: isFuelFolded ? "0" : "1px solid rgb(141,141,141)"}}>Fuel Quote Information</div>
                    <div className='content' style={{display: (isFuelFolded ? 'none' : 'block')}}>
                        <div><Link to={'/FuelQuoteForm'}>Get a Fuel Quote.</Link></div>
                        <div><Link to={'/FuelQuoteHistory'}>Fuel Quote History.</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}