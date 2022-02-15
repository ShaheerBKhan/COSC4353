import '../index.css';
import './UserAccount.css';
import React from 'react';

export const UserAccount = () => {
    return(
        <div className='container'>
            <div className='userAccount-container'>
                <div>Image</div>
                <div>Description</div>
                <div>Login</div>
            </div>
        </div>
    );
}