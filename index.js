const express=require("express");
const cors= require("cors");
const dbConnect = require("./config/config");
const productRoute = require("./routes/routes");



const app=express();
app.use(express.json());
app.use(cors());

app.use("/products",productRoute);
app.listen(8080,async(req,res)=>{
    try {
        await dbConnect;
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
});