const mongoose = require('mongoose');
require('dotenv').config({path: '.env'})

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true
        })
        console.log(`MongoDB connected to: ${connect.connection.host} `);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB