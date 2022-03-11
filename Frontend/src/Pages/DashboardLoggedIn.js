import '../index.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { GetUserAccountInformation } from '../Controllers/FrontendControllers';

export const DashboardLoggedIn = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [isAccountManageFolded, setIsAccountManageFolded] = useState(true);
    const [isAccountFolded, setIsAccountFolded] = useState(true);
    const [isFuelFolded, setIsFuelFolded] = useState(true);
    const [isAccountInformation, setIsAccountInformation] = useState(false);

    useEffect(async () => {
        let result = await GetUserAccountInformation(userId);
        if(result.length != 0) {
            setIsAccountInformation(true);
        } 
    }, [])

    const HandleAccountManagedFolded = () => {
        setIsAccountManageFolded(prev => !prev);
    }
    const HandleAccountFolded = () => {
        setIsAccountFolded(prev => !prev);
    };
    const HandleFuelFolded = () => {
        setIsFuelFolded(prev => !prev);
    };

    return(
        <div className='container'>
            <div className='navbar'><Link to={`/`}>Log Out.</Link></div>
            <div className='dashboardLoggedIn-container'>
                <div className='account-container'>
                    <div className='header' onClick={() => HandleAccountManagedFolded()} style={{borderBottom: isAccountManageFolded ? "0" : "1px solid rgb(141,141,141)"}}>Manage Account Details</div>
                    <div className='content' style={{display: (isAccountManageFolded ? 'none' : 'block')}}>
                        <div><Link to={`/UserRegistrationSecond/${userId}`}>Configure User Account.</Link></div>
                    </div>
                </div>
                <div className='account-container' style={{display: (isAccountInformation ? 'block' : 'none')}}>
                    <div className='header' onClick={() => HandleAccountFolded()} style={{borderBottom: isAccountFolded ? "0" : "1px solid rgb(141,141,141)"}}>View Account Details</div>
                    <div className='content' style={{display: (isAccountFolded ? 'none' : 'block')}}>
                        <div><Link to={`/UserAccount/${userId}`}>User Account.</Link></div>
                    </div>
                </div>
                <div className='fuel-container' style={{display: (isAccountInformation ? 'block' : 'none')}}>
                    <div className='header' onClick={() => HandleFuelFolded()} style={{borderBottom: isFuelFolded ? "0" : "1px solid rgb(141,141,141)"}}>Fuel Quote Information</div>
                    <div className='content' style={{display: (isFuelFolded ? 'none' : 'block')}}>
                        <div><Link to={`/FuelQuoteForm/${userId}`}>Get a Fuel Quote.</Link></div>
                        <div><Link to={`/FuelQuoteHistory/${userId}`}>Fuel Quote History.</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}