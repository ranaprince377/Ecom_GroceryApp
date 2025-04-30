const mongoose = require('mongoose');

const connectDb = async () => {
    const dbUri = process.env.MONGO_DB_URL;
    const dbName = process.env.DB_NAME;
    await mongoose.connect(`${dbUri}/${dbName}`);
}

module.exports = {connectDb}