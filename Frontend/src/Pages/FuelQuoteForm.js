import '../index.css';
import React from 'react';

export const FuelQuoteForm = () => {
    const HandleSubmit = () => {
    }
    
    return(
        <div className="Custom_Form">
            <div className="Input_form">
                <form>
                    <label htmlFor="Gallons Requested" > Gallons Requested</label>
                    <input type="number" name = "Gallons Requested" placeholder="Gallons" required></input>

                    <label htmlFor="Delivery Address" > Delivery Address</label>
                    <input type="text" name = "Delivery Address" placeholder="Address" required></input>

                    <label htmlFor="Delivery Date"> Delivery Date</label>
                    <input type = "date" name = "Delivery Date" required></input>

                    <label htmlFor="Suggested Price / Gallon" > Suggested Price / Gallon</label>
                    <input type="number" name = "Suggested Price / Gallon" placeholder="Suggested Price / Gallon" required></input>

                    <label htmlFor="Total Amount" > Total Amount </label>
                    <input type="number" name = "Total Amount " placeholder="Total" required></input>
                </form>
                <button className='submit-button' onClick={HandleSubmit}>Submit</button>
            </div>
        </div>
    );
}