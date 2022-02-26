import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const UserRegistrationFirst = () => {
    const HandleSubmit = () => {
    }
    
    return(
        <div className="Custom_Form">
            <div className= "Input_form">
                <form>
                    <label htmlFor="Username" > Username </label>
                    <input type="text" name = "Username" placeholder="Username" required></input>

                    <label htmlFor="Password" > Password</label>
                    <input type="password" name = "Password" placeholder="Password" required></input>
                </form>
                <button className='submit-button' onClick={HandleSubmit}>Submit</button>
            </div>
        </div>
    );
}