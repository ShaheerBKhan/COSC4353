import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const UserRegistrationFirst = () => {
    return(
        <div className="Custom_Form">
            <div className= "Input_form">
                <form>
                    <label for = "Username" > Username </label>
                    <input type="text" name = "Username" placeholder="Username" required></input>

                    <label for = "Password" > Password</label>
                    <input type="password" name = "Password" placeholder="Password" required></input>
                    
                    <input type = "submit" value = "LOGIN"></input>
                </form>
            </div>
        </div>
    );
}