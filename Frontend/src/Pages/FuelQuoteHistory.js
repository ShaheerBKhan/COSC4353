import '../index.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { GetUserFuelHistory } from '../Controllers/FrontendControllers';

const FuelQuoteInstance = (props) => {
    return(
        <div className='fuelquote-instance'>
            <div className='content'>
                <div>Gallons: {props.gallons}</div>
                <div>Price Per Gallon: {props.pricepergallon}</div>
                <div>Delivery Address: {props.deliveryaddress}</div>
                <div>Delivery Date: {props.deliverydate.substring(0,10)}</div>
                <div>Suggested Price: ${props.suggestedPrice}</div>
                <div>Total Amount: ${props.totalamount}</div>
            </div>
        </div>
    );
}

export const FuelQuoteHistory = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [fuelQuotes, setFuelQuotes] = useState([]);

    useEffect(async () => {
        const result = await GetUserFuelHistory(userId);
        setFuelQuotes(result);
    }, []);

    const HandleClick = () => {
        navigate(`/DashboardLoggedIn/${userId}`);
      }
    
    const FuelQuoteList = fuelQuotes.map((fuelQuote, index) => {
        return (<FuelQuoteInstance key={index} 
        gallons={fuelQuote.gallons} pricepergallon={fuelQuote.pricepergallon}
        deliveryaddress={fuelQuote.deliveryaddress} deliverydate={fuelQuote.deliverydate} 
        suggestedPrice={fuelQuote.pricepergallon} totalamount={fuelQuote.totalamount}></FuelQuoteInstance>);
    });

    return(
        <div className='container'>
            <div className='navbar'><Link to={`/`}>Log Out.</Link></div>
            <div style={{marginTop: "15px", fontSize: "24px"}}>Fuel Quote History</div>
            <div className='fuelQuoteHistory-container'>
                {FuelQuoteList}
            </div>
            <button className='return-button' onClick={() => HandleClick()}>Return to Dashboard</button>
        </div>
    );
}