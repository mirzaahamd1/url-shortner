const express = require ('express')
const connectDb = require('./config/db')
require ('dotenv').config()
const urlRoute= require('./routes/urlRoutes')

const app = express()
app.use(express.json())
app.use('/',urlRoute)
// app.use('/',(req,res)=>{
//     res.send("welcome to url Shortner")
// })


const PORT = 3000

app.listen(PORT,connectDb(),()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})

