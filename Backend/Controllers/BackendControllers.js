import express from 'express';
import cors from 'cors';

const PORT = 5000;

const app = express();

app.use((cors()));

app.get('/GetUser', (req, res) => {
    console.log("Parameters: ", req.query);
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

app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});