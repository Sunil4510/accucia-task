const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/product",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected To Database Successfully");
})
.catch(()=>{
    console.log("DataBase Not Connected");
})