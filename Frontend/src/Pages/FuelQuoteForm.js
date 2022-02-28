import '../index.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostFuelQuoteForm } from '../Controllers/FrontendControllers';

export const FuelQuoteForm = () => {
    const { userId } = useParams();

    const [gallons, setGallons] = useState(0);
    const [deliveryAddress, setDeliveryAddress] = useState();
    const [deliveryDate, setDeliveryDate] = useState();
    const [pricePerGallon, setPricePerGallong] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const HandleSubmit = async () => {
        await PostFuelQuoteForm(gallons, deliveryAddress, deliveryDate, pricePerGallon, totalAmount);
    }

    const HandleGallons = (event) => {
        const newGallonAmount = event.target.value;
        
        setGallons(newGallonAmount)
        setTotalAmount(newGallonAmount * pricePerGallon);
    }

    const HandlePricePerGallon = (event) => {
        const newPricePerGallon = event.target.value;

        setPricePerGallong(newPricePerGallon);
        setTotalAmount(newPricePerGallon * gallons);
    }
    
    return(
        <div className="Custom_Form">
            <div className="Input_form">
                <form>
                    <label htmlFor="Gallons Requested" > Gallons Requested</label>
                    <input type="number" name = "Gallons Requested" placeholder="Gallons" required onChange={(event) => HandleGallons(event)}></input>

                    <label htmlFor="Delivery Address" > Delivery Address</label>
                    <input type="text" name = "Delivery Address" placeholder="Address" required onChange={(event) => setDeliveryAddress(event.target.value)}></input>

                    <label htmlFor="Delivery Date"> Delivery Date</label>
                    <input type = "date" name = "Delivery Date" required onChange={(event) => setDeliveryDate(event.target.value)}></input>

                    <label htmlFor="Suggested Price / Gallon" > Suggested Price / Gallon</label>
                    <input type="number" name = "Suggested Price / Gallon" placeholder="Suggested Price / Gallon" required onChange={(event) => HandlePricePerGallon(event)}></input>
                </form>
                <div>Total Amount: ${totalAmount.toFixed(2)}</div>
                <button className='submit-button' onClick={HandleSubmit}>Submit</button>
            </div>
        </div>
    );
}