import express from 'express';
import cors from 'cors';

import { DatabaseConnection } from './DatabaseConnection.js';

const app = express();
app.use((cors()));

var client = await DatabaseConnection();

/* *** GET REQUESTS *** */
app.get('/GetUserInDatabase', async (req, res) => {
    console.log("Parameters: ", req.query);

    res.send(true);
});

app.get('/GetUserAccountInformation', async (req, res) => {
    console.log("Parameters: ", req.query);

    res.send(true);
});

app.get('/GetUserFuelHistory', async (req, res) => {
    console.log("Parameters: ", req.query);

    res.send(true);
});

/* *** POST REQUESTS *** */
app.post('/PostFuelQuoteForm', async (req, res) => {
    console.log("Parameters: ", req.query);
});

app.post('/PostUserRegistrationFirst', async (req, res) => {
    console.log("Parameters: ", req.query);
});

app.post('/PostUserRegistrationSecond', async (req, res) => {
    console.log("Parameters: ", req.query);
});


/* *** Server Startup *** */
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});