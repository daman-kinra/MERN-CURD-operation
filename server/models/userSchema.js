const db = require('mongoose');// To intialize Mongo


const user = db.Schema({               //To create Table/ Schema 
    id: Number,
    userName: String,
    adress: String,
    city: String,
    phoneNumber: String
});

module.exports = db.model('User',user); // Exporting Schema 'user' is the name of schema and 'User' is the name we want to pass it as