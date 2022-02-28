import express from 'express';
import cors from 'cors';

import { DatabaseConnection } from './DatabaseConnection.js';

const app = express();
app.use((cors()));

var client = await DatabaseConnection();

app.get('/GetUser', async (req, res) => {
    console.log("Parameters: ", req.query);
    
    res.send(true);
});

app.post('/PostFuelQuoteForm', async (req, res) => {
    console.log("Parameters: ", req.query);
});

app.post('/PostUserRegistrationFirst', async (req, res) => {
    console.log("Parameters: ", req.query);
});

app.post('/PostUserRegistrationSecond', async (req, res) => {
    console.log("Parameters: ", req.query);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});