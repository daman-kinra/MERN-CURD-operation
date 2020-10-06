const bodyParser = require('body-parser'); //To intialize bodyParser
const express = require('express');//To get express frameWork
const app = express();//To intialize app
const db = require('mongoose');//To intialize mongo
const cors = require('cors');//To prevent from Cross-Origin Resource Sharing
const userRoute = require('./routes/users');//To get the routes we made in users file


//Midlewares
app.use(bodyParser.json());// Yai sabse upar Rakhna hai, To convert data into json
app.use('/users', userRoute);// To call the routes
app.use(cors());// To prevent from cors

//DB connection
db.connect(' mongodb+srv://daman:29july2000@cluster0.cof6e.mongodb.net/User?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(console.log('connected')).catch(err=>console.log(err));

//Starting Server
app.listen(8000)