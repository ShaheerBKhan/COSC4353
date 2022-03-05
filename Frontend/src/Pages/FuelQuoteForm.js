import '../index.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PostFuelQuoteForm, GetUserAccountInformation, GetUserFuelHistory } from '../Controllers/FrontendControllers';

export const FuelQuoteForm = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [gallons, setGallons] = useState(0);
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [deliveryDate, setDeliveryDate] = useState(null);
    const [suggestedPrice, setSuggestedPrice] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const [isInState, setIsInState] = useState(false);
    const [hasPreviousQuote, setHasPreviousQuote] = useState(false);

    useEffect(async () => {
        let result = await GetUserAccountInformation(userId);
        
        setDeliveryAddress(`${result[0].city}, ${result[0].state}`);
        if(result[0].state == "TX") {
            setIsInState(true);
        }

        result = await GetUserFuelHistory(userId);
        if(result.length) {
            setHasPreviousQuote(true);
        } 

    }, []);

    const HandleSubmit = async () => {
        if(!gallons) {
            alert("Please enter a valid number for gallons (Non-zero).");
            return;
        }

        if(!deliveryDate) {
            alert("Please enter a delivery date.");
            return;
        }

        await PostFuelQuoteForm(userId, gallons, deliveryAddress, deliveryDate, suggestedPrice, totalAmount);
        navigate(`/DashboardLoggedIn/${userId}`);
    }

    const DetermineFuelQuotePrice = (gallonAmount) => {
        const margin = (1.5) * ((isInState ? 0.02 : 0.04) - (hasPreviousQuote ? 0.01 : 0.00) + (gallonAmount > 1000 ? 0.02 : 0.03) + 0.10)
        const tempSuggestedPrice = 1.5 + margin;
        setSuggestedPrice(tempSuggestedPrice);
        setTotalAmount(tempSuggestedPrice * gallonAmount);
    }

    const HandleGallons = (event) => {
        const newGallonAmount = event.target.value;
        
        setGallons(newGallonAmount)
        DetermineFuelQuotePrice(newGallonAmount);
    }
    
    return(
        <div className="Custom_Form">
            <div className="Input_form">
                <form>
                    <label htmlFor="Gallons Requested" > Gallons Requested</label>
                    <input type="number" name = "Gallons Requested" placeholder="Gallons" required onChange={(event) => HandleGallons(event)}></input>

                    <label htmlFor="Delivery Address" > Delivery Address</label>
                    <input type="text" name = "Delivery Address" value={deliveryAddress} disabled></input>

                    <label htmlFor="Delivery Date"> Delivery Date</label>
                    <input type = "date" name = "Delivery Date" required onChange={(event) => setDeliveryDate(event.target.value)}></input>

                    <label htmlFor="Suggested Price / Gallon" > Suggested Price / Gallon</label>
                    <input type="number" name = "Suggested Price / Gallon" value={suggestedPrice} disabled></input>
                </form>
                <div>Total Amount: ${totalAmount.toFixed(2)}</div>
                <button className='submit-button' onClick={HandleSubmit}>Submit</button>
            </div>
        </div>
    );
}