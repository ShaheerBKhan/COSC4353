import express from 'express';

const app = express();

app.listen(3005, () => {
    console.log('Server has started on Port 3005.')
});

app.get('/Login', (req, res) => {
    console.log("Parameters: ", req.params);
    res.send(true);
});