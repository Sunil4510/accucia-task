const express = require("express");
require("./db/conn");
const product = require("./models/productDetails");
const app = express();
const router = require("./routers/route");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`Connected to the ${port} port`);
});