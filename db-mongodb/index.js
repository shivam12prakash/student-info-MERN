const { response } = require('express');
const route = require('./route/routes');
const express = require('express');
const { request } = require('https');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')



const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use('/users',route);


const URL = 'mongodb+srv://user:shivamprakash@cluster0.uahxc.mongodb.net/PROJECT0?retryWrites=true&w=majority';


const PORT = 8000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running sucessfully on PORT ${PORT}`)
    });
}).catch(error => {
    console.log('Error ', error.message)
})



