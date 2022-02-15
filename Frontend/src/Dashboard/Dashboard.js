import '../index.css';
import './Dashboard.css';
import React from 'react';

export const Dashboard = () => {
    return(
        <div className='container'>
            <div className='dashboard-container'>
                <div>Image</div>
                <div>Description</div>
                <div>Login</div>
            </div>
        </div>
    );
}