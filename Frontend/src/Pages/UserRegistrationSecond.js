import '../index.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { GetUserAccountInformation, PostUserRegistrationSecond } from '../Controllers/FrontendControllers';

export const UserRegistrationSecond = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [fullName, setFullname] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState(0);

    useEffect(async () => {
        const userAccountInformation = await GetUserAccountInformation(userId);
    }, []);

    const HandleSubmit = async () => {
        if(!fullName) {
            alert("Please enter a fullname.");
            return;
        }

        if(!addressOne) {
            alert("Please enter an address (Primary).");
            return;
        }

        if(!city) {
            alert("Please enter a city.");
            return;
        }

        if(!state) {
            alert("Please select a state.");
            return;
        }

        if(!zipcode) {
            alert("Please enter a valid zipcode.");
            return;
        }

        await PostUserRegistrationSecond(userId, fullName, addressOne, addressTwo, city, state, zipcode);
        navigate(`/DashboardLoggedIn/${userId}`);
    }
    
    return(
     <div className='Custom_Form'>
        <div className="Input_form">
            <form>
                <label htmlFor="Full Name" > Full Name</label>
                <input type="text" name = "Full Name" placeholder="Full Name" maxLength = "50" required onChange={(event) => setFullname(event.target.value)}></input>

                <label htmlFor="Address 1" > Address 1</label>
                <input type="text" name = "Address 1" placeholder="Address 1" maxLength = "100" required onChange={(event) => setAddressOne(event.target.value)}></input>

                <label htmlFor="Address 2" > Address 2</label>
                <input type="text" name = "Address 2" placeholder="Address 2" maxLength = "100" onChange={(event) => setAddressTwo(event.target.value)}></input>

                <label htmlFor="City" > City</label>
                <input type="text" name = "City" placeholder="City" maxLength = "100" required onChange={(event) => setCity(event.target.value)}></input>

                <label htmlFor="State"> State</label >
                <select name = "State" placeholder={"Choose a State Please"} required onChange={(event) => setState(event.target.value)}>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>

                <label htmlFor="Zipcode" > Zipcode</label>
                <input type="number" name = "Zipcode" placeholder="Zipcode" min="00000" max = "999999999" required onChange={(event) => setZipcode(event.target.value)}></input>
            </form>
            <button className='submit-button' onClick={HandleSubmit}>Submit</button>
        </div>
    </div>
    );
}