import '../index.css';
import React from 'react';

export const UserAccount = () => {
    return(
        <div className='container'>
            <div className='userAccount-container'>
                <div>Full Name</div>
                <div>Address 1</div>
                <div>Address 2</div>
                <div>City</div>
                <div>State</div>
                <div>Zip Code</div>
            </div>
        </div>
    );
}