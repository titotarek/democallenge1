const mongoose = require("mongoose")

const db = "mongodb+srv://demo1:GET123@tarek.etrlz.mongodb.net/demo1?retryWrites=true&w=majority"
mongoose.connect(db)
.then(() => console.log("connected to mongodb ..."))
.catch((err) => console.log())