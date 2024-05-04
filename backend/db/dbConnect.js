const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL);    
        if (mongoose.connection.readyState === 1) {
            console.log("Successfully connected to the database");
        }
    } catch (error) {
        console.error(`Something went wrong: ${error.message}`);
    }
};
module.exports = dbConnect;
