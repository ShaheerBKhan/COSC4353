import '../index.css';
import React from 'react';

export const FuelQuoteForm = () => {
    return(
        <div className="Custom_Form">
            <div className="Input_form">
                <form>
                    <label for = "Gallons Requested" > Gallons Requested</label>
                    <input type="number" name = "Gallons Requested" placeholder="Gallons" required></input>

                    <label for = "Delivery Address" > Delivery Address</label>
                    <input type="text" name = "Delivery Address" placeholder="Address" required></input>

                    <label for ="Delivery Date"> Delivery Date</label>
                    <input type = "date" name = "Delivery Date" required></input>

                    <label for = "Suggested Price / Gallon" > Suggested Price / Gallon</label>
                    <input type="number" name = "Suggested Price / Gallon" placeholder="Suggested Price / Gallon" required></input>

                    <label for = "Total Amount" > Total Amount </label>
                    <input type="number" name = "Total Amount " placeholder="Total" required></input>
                        
                    <input type = "submit" value = "Submit"></input>
                </form>
            </div>
        </div>
    );
}