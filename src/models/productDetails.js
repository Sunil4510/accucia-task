const mongoose = require("mongoose");

const products_Category = new mongoose.Schema({
    category_name:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    },
    category_details:[{
        product_name:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        updatedAt:{
            type:Date,
            default:Date.now()
        }
    }]

});

const productscategory = new mongoose.model("productscategory",products_Category);

module.exports = productscategory;