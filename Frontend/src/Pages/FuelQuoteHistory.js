import '../index.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

    useEffect(async () => {
        const userHistory = await GetUserFuelHistory(userId);
    }, []);
    
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
        </div>
    );
}