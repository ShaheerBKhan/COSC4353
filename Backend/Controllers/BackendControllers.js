import express from 'express';
import cors from 'cors';

import { DatabaseConnection } from './DatabaseConnection.js';

const app = express();
app.use((cors()));

var client = await DatabaseConnection();

app.get('/GetUser', async (req, res) => {
    console.log("Parameters: ", req.query);
    const result = await client.query("SELECT * FROM Test");
    console.log(result.rows);

    res.send(true);
});

app.post('/PostFuelQuoteForm', (req, res) => {
    console.log("Parameters: ", req.query);
});

app.post('/PostUserRegistrationFirst', (req, res) => {
    console.log("Parameters: ", req.query);
});

app.post('/PostUserRegistrationSecond', (req, res) => {
    console.log("Parameters: ", req.query);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});