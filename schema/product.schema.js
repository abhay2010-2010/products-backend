const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    // product_image:{
    //     type:String,
    //     required:true
    // }

},{
    versionKey:false
});

const Products=mongoose.model('product',schema);

module.exports={
Products
}