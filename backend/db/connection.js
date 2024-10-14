const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.mongoDB_URI).then(() => {
    console.log('Connection successful');
})
.catch(() => {
    console.log('Connection failed');
})