import express from 'express';
import cors from 'cors';

import { DatabaseConnection } from './DatabaseConnection.js';

const app = express();
app.use((cors()));

var client = await DatabaseConnection();

/* *** GET REQUESTS *** */
app.get('/GetUserInDatabase', async (req, res) => {
    try {
        const parameters = req.query;
        const result = await client.query(`SELECT * FROM CREDENTIAL WHERE username = '${parameters.username}' AND password = '${parameters.password}'`);
    
        res.send(Boolean(result.rows.length));
    } catch(e) {
        res.send(false);
    }
});

app.get('/GetUserId', async (req, res) => {
    try {
        const parameters = req.query;
        const result = await client.query(`SELECT userid FROM CREDENTIAL WHERE username = '${parameters.username}' AND password = '${parameters.password}'`);
        console.log(result.rows[0]);
    
        res.send(result.rows[0]);
    } catch(e) {
        res.send(false);
    }
});

app.get('/GetUserAccountInformation', async (req, res) => {
    try {
        
        res.send(true);
    } catch(e) {
        res.send(false);
    }
});

app.get('/GetUserFuelHistory', async (req, res) => {
    try {
        
        res.send(true);
    } catch(e) {
        res.send(false);
    }
});

/* *** POST REQUESTS *** */
app.post('/PostFuelQuoteForm', async (req, res) => {
    try {
        const parameters = req.query;
    
        let dateString = parameters.deliveryDate.toString();
        dateString = dateString.replace('-','');
        dateString = dateString.replace('-','');

        const response = await client.query(
            `INSERT INTO FuelQuote(UserId, Gallons, DeliveryAddress, DeliveryDate, PricePerGallon, TotalAmount)
            VALUES(${parameters.userId}, ${parameters.gallons}, '${parameters.deliveryAddress}', to_date(${dateString}::text, 'YYYYMMDD'), ${parameters.pricePerGallon}, ${parameters.totalAmount})`
        );
        
        res.send(true);
    } catch(e) {
        res.send(false);
    }
});

app.post('/PostUserRegistrationFirst', async (req, res) => {
    const parameters = req.query;
    try
    {
        const response = await client.query(
            `INSERT INTO Credential(Username, Password)
            VALUES('${parameters.username}', '${parameters.password}')`
        );
        
        res.send(true)
    }
    catch(e)
    {
        res.send(false);
    }
});

app.post('/PostUserRegistrationSecond', async (req, res) => {
    try {
        const parameters = req.query;
        const response = await client.query(
            `INSERT INTO UserInformation(UserId, Fullname, AddressOne, AddressTwo, City, State, ZipCode)
            VALUES(${parameters.userId},'${parameters.fullName}','${parameters.addressOne}','${parameters.addressTwo}','${parameters.city}','${parameters.state}',${parameters.zipcode})`
        );
        
        res.send(true);
    } catch(e) {
        res.send(false);
    }
});


/* *** Server Startup *** */
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});