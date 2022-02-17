import '../index.css';
import React from 'react';

const FuelQuoteInstance = (props) => {
    return(
        <div className='fuelquote-instance'>
            <div>{props.price}</div>
            <div>{props.location}</div>
        </div>
    );
}

export const FuelQuoteHistory = () => {
    const FuelQuoteInstanceList = [
        <FuelQuoteInstance price={"10"} location={"Houston"}></FuelQuoteInstance>,
        <FuelQuoteInstance price={"20"} location={"Dallas"}></FuelQuoteInstance>,
        <FuelQuoteInstance price={"30"} location={"Austin"}></FuelQuoteInstance>,
        <FuelQuoteInstance price={"40"} location={"Lubbock"}></FuelQuoteInstance>,
        <FuelQuoteInstance price={"50"} location={"Galveston"}></FuelQuoteInstance>
    ];

    return(
        <div className='container'>
            <div className='fuelQuoteHistory-container'>
                {FuelQuoteInstanceList}
            </div>
        </div>
    );
}