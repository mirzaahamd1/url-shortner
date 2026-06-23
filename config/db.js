const mongoose = require ('mongoose')

const connectDb = async ()=>{
    try {
        const db = await mongoose.connect('mongodb+srv://root:root@ahmad.cx0rky3.mongodb.net/urlShortner?appName=AHMAD')
        console.log("connected to db successfully")
    } catch (error) {
        console.log('error while connecting to db',error)
    }
}
module.exports = connectDb