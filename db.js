const mongoose = require('mongoose')
require('dotenv').config();
const username = encodeURIComponent(process.env.REACT_APP_MONGO_USERNAME);
const password = encodeURIComponent(process.env.REACT_APP_MONGO_PASSWORD);
const Appname=process.env.REACT_APP_MONGO_APPNAME
const mongoURi=`mongodb+srv://${username}:${password}@cluster0.9murf.mongodb.net/${Appname}?retryWrites=true&w=majority`
// const mongoURi='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const connectToMongo = () => {
    mongoose.connect(mongoURi, {
    }).then(() => {
        console.log('connected to mongo successfully');
    }).catch((e) => {
        console.log(e, 'not connected');
    });
} 

module.exports = connectToMongo
