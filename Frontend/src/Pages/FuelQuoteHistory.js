import '../index.css';
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { GetUserFuelHistory } from '../Controllers/FrontendControllers';

const FuelQuoteInstance = (props) => {
    return(
        <div className='fuelquote-instance'>
            <div className='content'>
                <div>Location: {props.location}</div>
                <div>Fuel Ammount: {props.fuelAmount} Gallons</div>
                <div>Price: {props.price}</div>
            </div>
        </div>
    );
}

export const FuelQuoteHistory = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    useEffect(async () => {
        const result = await GetUserFuelHistory(userId);
    }, []);

    const HandleClick = () => {
        navigate(`/DashboardLoggedIn/${userId}`);
      }
    
    const FuelQuoteInstanceList = [
        <FuelQuoteInstance fuelAmmount={"5"} price={"10"} location={"Houston"}></FuelQuoteInstance>,
        <FuelQuoteInstance fuelAmmount={"6"} price={"20"} location={"Dallas"}></FuelQuoteInstance>,
        <FuelQuoteInstance fuelAmmount={"7"} price={"30"} location={"Austin"}></FuelQuoteInstance>,
        <FuelQuoteInstance fuelAmmount={"8"} price={"40"} location={"Lubbock"}></FuelQuoteInstance>,
        <FuelQuoteInstance fuelAmmount={"9"} price={"50"} location={"Galveston"}></FuelQuoteInstance>
    ];

    return(
        <div className='container'>
            <div style={{marginTop: "15px", fontSize: "24px"}}>Fuel Quote History</div>
            <div className='fuelQuoteHistory-container'>
                {FuelQuoteInstanceList}
            </div>
            <button className='return-button' onClick={() => HandleClick()}>Return to Dashboard</button>
        </div>
    );
}