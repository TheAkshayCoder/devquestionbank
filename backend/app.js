require("dotenv").config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const productsRoutes = require('./routes/products')
const connectDb = require('./db/connect')
app.get('/', (req, res) => {
    res.send("Welcome to Home page")
})

app.use('/api/products', productsRoutes)

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Connected to ${PORT}`);
        })
    } catch (error) {
        console.log("Error", error);
    }
}

start();

