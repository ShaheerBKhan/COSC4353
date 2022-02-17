import '../index.css';
import React, { useState } from 'react';

export const Dashboard = () => {
    const [isLoginFolded, setIsLoginFolded] = useState(true);

    const HandleLogin = () => {
        setIsLoginFolded(prev => !prev);
    };

    return(
        <div className='container'>
            <div className='dashboard-container'>
                <div>Image</div>
                <div>Description</div>
                <div className='login-container'>
                    <div className='header' onClick={() => HandleLogin()}>Login</div>
                    <div className='content' style={{display: (isLoginFolded ? 'none' : 'block')}}>
                        <div>User</div>
                        <div>Password</div>
                        <div>Signup</div>
                    </div>
                </div>
            </div>
        </div>
    );
}