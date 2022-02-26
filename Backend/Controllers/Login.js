import express from 'express';
import cors from 'cors';

const PORT = 5000;

const app = express();

app.use((cors()));

app.get('/Login', (req, res) => {
    console.log("Parameters: ", req.query);
    res.send(true);
});

app.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}.`)
});