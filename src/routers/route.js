const { Router } = require("express");
const express = require("express");
const product = require("../models/productDetails")
const router = express.Router();


router.post("/products",async(req,res)=>{
    try {
     const productcat = new product(req.body);
    const entry=await productcat.save();
    res.status(200).send(entry);
    console.log(entry);
    } catch (e) {
        res.status(400).send(e);
        console.log(e)
    }
    
})

router.get("/products",async(req,res)=>{
    try {
        const data = await product.find().sort({'_id':-1}).limit(3);
        res.status(200).send(data);
        console.log(data);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports=router