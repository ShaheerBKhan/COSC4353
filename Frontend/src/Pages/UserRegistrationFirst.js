import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const UserRegistrationFirst = () => {
    return(
        <div className="Custom_Form">
            <div class = "Input_form">
                <form>
                    <label for="Username" >Username </label>
                    <input type="text" name="Username" placeholder="Username"></input>
                    <label for="Password">Password</label>
                    <input type="password" name="password" placeholder="password"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}