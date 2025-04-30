const dotenv = require('dotenv');
const app = require('./app.js');
const db = require('./config/db.js');

dotenv.config();

db.connectDb().then(() => {
    console.log(`Databse connected successfully.`);
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
        console.log(`Server is running, ${PORT}`);
    });
}).catch((e) => {
    console.log(`Error while connecting to the databse ${e}`);
});