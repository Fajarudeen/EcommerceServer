const mongoose = require('mongoose')

//2. define connection string 

mongoose.connect('mongodb://localhost:27017/ecommerce',()=>{
    console.log('Mongodb Connected Successfully...');
})

// 3.create a model to store all products

const Cart=mongoose.model('Cart',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

// 4.to use product in other file - we have to export it
module.exports={
    Cart
}

