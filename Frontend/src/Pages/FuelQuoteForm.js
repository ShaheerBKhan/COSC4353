import '../index.css';
import React from 'react';

export const FuelQuoteForm = () => {
    return(
        <div className="Custom_Form">
            <div class = "Input_form">
                <form>
                    <label for="gallons_requested">Gallons Requested</label>
                    <input type="number" name="gallons_requested" placeholder="Gallons Requested"></input>
                    
                    <label for="delivery_address">Delivery Address</label>
                    <input type="text" name="delivery_address" placeholder="Delivery Address"></input>
                    
                    <label for="delivery_date">Delivery Date</label>
                    <input type="date" name="delivery_date" placeholder="Delivery Date"></input>

                    <label for="suggest_price">Suggested Price per Gallon</label>
                    <input type="number" name="suggest_price" placeholder="Suggested Price per Gallon"></input>

                    <label for="total_amount">Total Amount</label>
                    <input type="number" name="total_amount" placeholder="Total Amount"></input>

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    );
}