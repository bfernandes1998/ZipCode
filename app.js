const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const path = require('path');

const db = require("./db");
const collection = "zipcodes" ;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// app.put('/:id', (req,res)=>{
//     const ZipCodeID = req.params.id;
//     const userInput = req.body;

// })
app.get('/getZipCodes', (req,res) => {
    //var query = { _id: 5da5517d94d3fc044c2a1749 };
    db.getDB().collection(collection).find({ ZipCode: "53703" }).toArray((err, documents) =>{
        if(err) {
            console.log(err);
        }
        else {
            console.log(documents);
            res.json(documents);
        }
    });
        
    
})

db.connect((err) => {
    if (err) {
        console.log('unable to connect to database');
        console.log(err);
    }
    else {
        app.listen(3000, ()=> {
            console.log('connected to database, app listening on port 3000');
        });
    }
})