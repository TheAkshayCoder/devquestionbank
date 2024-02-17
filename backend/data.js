require('dotenv').config();
const connectDB = require("./db/connect")
const Product = require("./models/product")
const QuestionData = require("./data.json")


const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL)
        await Product.create(QuestionData)
        console.log("success");
    } catch (error) {
        console.log("Error", error)
    }
}
start()