//const product = require('../models/product');
const Product = require('../models/product');
const mongoose = require('mongoose');


exports.createProduct  = async (req, res, next) => {
    try {
        const requiredFeilds = ["name", "description", "unitPrice", "stock", "category", "images"]
    let missing = [];

    requiredFeilds.forEach((p) => {
        if(!req.body.hasOwnProperty(p)) {
            missing.push(p)
        }
    })

    if(missing.length > 0) {
        res.status(400).json({
            success: false,
            message: `Missing Feilds: ${missing.join(", ")}`
        })
    }

    const {name, description, unitPrice, stock, category, images} = req.body

    if (typeof  stock !== 'number') {
        res.status(400).json({
            success: false,
            message: `unitPrice should be type of Number`
        })
    }
    const fullName = name.split(" ")
    if (fullName.length < 2 && (typeof name !== 'string')) {
        res.status(400).json({
            success: false,
            message: `Fullname required`
        })
    }
    const product = new Product({
        name, description, unitPrice, stock, category, images
    })
    const newProduct = await product.save()

    res.status(201).json({
        success: true,
        newProduct
    })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}

// Get all prodoucts

exports.getProduct = async (req, res, next) => {
    try{
        const products=await Product.find()
        res.status(200).json({
           success: true,
           products
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

}


//get specific product by id

exports.getProductById = async (req, res, next)=>{
    try{
        const product = await Product.findById(req.params.id)
        if (product) {
            res.status(200).json({
            success: true,
            product
        })
        } else {
            res.status(404).json({
                success: false,
                message: `Product with id: ${req.params.id} Not Found`
            })
        }
      
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


exports.updateProduct = async (req, res, next)=>{
    try{
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
            ) 

        return res.status(200).json({
            success: true,
            product
        })    
    } catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

exports.deleteProduct = async (req, res, next)=>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.status(204).json({
            success: true,
            message: 'successfully deleted'
        })
    } catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
