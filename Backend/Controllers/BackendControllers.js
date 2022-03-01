import express from 'express';
import cors from 'cors';

import { DatabaseConnection } from './DatabaseConnection.js';

const app = express();
app.use((cors()));

var client = await DatabaseConnection();

/* *** GET REQUESTS *** */
app.get('/GetUserInDatabase', async (req, res) => {
    const parameters = req.query;

    res.send(true);
});

app.get('/GetUserAccountInformation', async (req, res) => {
    const parameters = req.query;

    res.send(true);
});

app.get('/GetUserFuelHistory', async (req, res) => {
    const parameters = req.query;

    res.send(true);
});

/* *** POST REQUESTS *** */
app.post('/PostFuelQuoteForm', async (req, res) => {
    const parameters = req.query;
    
    let dateString = parameters.deliveryDate.toString();
    dateString = dateString.replace('-','');
    dateString = dateString.replace('-','');

    const response = await client.query(
        `INSERT INTO FuelQuote(UserId, Gallons, DeliveryAddress, DeliveryDate, PricePerGallon, TotalAmount)
        VALUES(${parameters.userId}, ${parameters.gallons}, '${parameters.deliveryAddress}', to_date(${dateString}::text, 'YYYYMMDD'), ${parameters.pricePerGallon}, ${parameters.totalAmount})`
    );
    console.log(response);
});

app.post('/PostUserRegistrationFirst', async (req, res) => {
    const parameters = req.query;
    const response = await client.query(
        `INSERT INTO Credential(Username, Password)
        VALUES('${parameters.username}', '${parameters.password}')`
    );
    console.log(response);
});

app.post('/PostUserRegistrationSecond', async (req, res) => {
    const parameters = req.query;
    const response = await client.query(
        `INSERT INTO UserInformation(UserId, Fullname, AddressOne, AddressTwo, City, State, ZipCode)
        VALUES(${parameters.userId},'${parameters.fullName}','${parameters.addressOne}','${parameters.addressTwo}','${parameters.city}','${parameters.state}',${parameters.zipcode})`
    );
    console.log(response);
});


/* *** Server Startup *** */
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});