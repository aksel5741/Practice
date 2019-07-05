const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();



const dbRoute = 'mongodb+srv://admin:admin@cluster0-uyjzw.mongodb.net/test?retryWrites=true&w=majority';


mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


router.get('/getData', (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});


router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Data.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


router.post('/putData', (req, res) => {
    let data = new Data();

    const { id,name,lastName,email,password,displayName } = req.body;

    if ((!id && id !== 0) || !name) {
        return res.json({
            success: false,
            error: 'INVALID INPUTS',
        });
    }
    data.name = name;
    data.id = id;
    data.lastName=lastName;
    data.email=email;
    data.password=password;
    data.displayName=displayName;
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});


app.use('/api', router);


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));