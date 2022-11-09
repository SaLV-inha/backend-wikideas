const express = require("express")
const { mongoose } = require("mongoose")


const app = express()
app.use(express.json())
require("dotenv").config()

try {
    mongoose.connect(process.env.URL_MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("MongoDB connected");
} catch (error) {
    console.log(error);
}

const PORT = process.env.PORT || 8080
app.listen(PORT, err => {
    if(err) throw new Error(err)
    console.log(`Running server express ${PORT}`);
})

app.get('/api' , ( req , res ) =>{
    res.json({ message: "ok"})
})

