import express from 'express';
import cors from 'cors';

import { DatabaseConnection } from './DatabaseConnection.js';

const app = express();
app.use((cors()));

var client = await DatabaseConnection();

/* *** GET REQUESTS *** */
app.get('/GetUserInDatabase', async (req, res) => {
    console.log("Parameters: ", req.query);
    const parameters = req.query;

    res.send(true);
});

app.get('/GetUserAccountInformation', async (req, res) => {
    console.log("Parameters: ", req.query);
    const parameters = req.query;

    res.send(true);
});

app.get('/GetUserFuelHistory', async (req, res) => {
    console.log("Parameters: ", req.query);
    const parameters = req.query;

    res.send(true);
});

/* *** POST REQUESTS *** */
app.post('/PostFuelQuoteForm', async (req, res) => {
    const parameters = req.query;
    client.query(
        `INSERT INTO FuelQuote(UserId, Gallons, DeliveryAddress, DeliveryDate, PricePerGallon, TotalAmount)
        VALUES(${parameters.userId}, ${parameters.gallons}, ${parameters.deliveryAddress}, ${parameters.deliveryDate}, ${parameters.pricePerGallon}, ${parameters.totalAmount})`
    );
});

app.post('/PostUserRegistrationFirst', async (req, res) => {
    const parameters = req.query;
    client.query(
        `INSERT INTO Credential(Username, Password)
        VALUES('${parameters.username}', '${parameters.password}')`
    );
});

app.post('/PostUserRegistrationSecond', async (req, res) => {
    console.log("Parameters: ", req.query);
    const parameters = req.query;
    client.query(
        `INSERT INTO UserInformation(UserId, Fullname, AddressOne, AddressTwo, City, State, ZipCode)
        VALUES(${parameters.userId},${parameters.fullName},${parameters.addressOne},${parameters.addressTwo},${parameters.city},${parameters.state},${parameters.zipcode},)`
    );
});


/* *** Server Startup *** */
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});