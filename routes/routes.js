const express = require('express');
const { Products } = require('../schema/product.schema');
const productRoute= express.Router();

productRoute.post('/add',async(req,res)=>{
    try {
        const product = new Products(req.body);
        await product.save();
        res.status(201).send({msg:"product created successfully",prodct:product});
    } catch (error) {
        res.status(500).json(error);
        
    }
});

productRoute.get('/',async(req,res)=>{
    try {
        const products = await Products.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json(error);
        
    }
});

productRoute.patch('/:id',async(req,res)=>{
    try {
        const product = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).send({msg:"product updated succesfully",product:product});
    } catch (error) {
        res.status(500).json(error);
        
    }
});

productRoute.delete('/:id',async(req,res)=>{
    try {
        const product = await Products.findByIdAndDelete(req.params.id);
        res.status(200).send({msg:"product deleted succesfully",product:product});
    } catch (error) {
        res.status(500).json(error);
        
    }
});

module.exports = productRoute;