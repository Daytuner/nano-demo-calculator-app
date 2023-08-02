const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!');
});

baseRouter.post('/add', (req, res) => {
    let first = req.body.first
    let second= req.body.second
    let sum = first+second
    res.json({   
        'result': `${sum}`
    });

});


baseRouter.post('/subtract', (req, res) => {
    let first = req.body.first
    let second= req.body.second
    let sub = first-second 
    res.json({ "result": sub });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});