
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { productRouter } from "./routes/products.js";



const app = express()

app.use(express.json())
app.use(cors())

// //add product
// app.post("/products", async (req, res)=> {

//     try {
//         const {productName, price} = req.body
//         const newProduct = new ProductModel({productName, price})
        
//         await newProduct.save()
//         res.json({newProduct})

//     } catch (error) {
//         console.error(error);
//     }

// })

// //add user
// app.post("/register", async(req, res)=>{

//     try {
//         const {username, password} = req.body
//         const newUser = new UserModel({username, password})

//         await newUser.save()
//         res.json({newUser})
    
//     } catch (error) {
//         console.error(error);
//     }
// })

// //get all products 
// app.get("/products", async (req, res)=>{

//     try {

//         const products = await ProductModel.find({})
//         res.json({products, numOfProducts})

//     } catch (error) {
//         console.error(error);
//     }
// })

// //get producnt count
// app.get("/products-count",  async (req, res)=>{

//     try {
//         const numOfProducts = await ProductModel.count({})
//         res.json(numOfProducts)
//     } catch (error) {
        
//     }   
// })


// //purhcased items id to user field purchased

// app.put("/:userID", async (req, res)=>{

//     try {
//         const {productID} = req.body
//         const user = await UserModel.findById(req.params.userID)

//         if(productID && user){

//             user.purchased.push(productID)
//             await user.save()

//             //returns the updated arry of purhceased items
//             res.json({purchased: user.purchased})
//         }

//     } catch (error) {
//         console.error(error);
//     }
// })

app.use("/users", userRouter)
app.use("/products", productRouter)

mongoose.connect("mongodb+srv://kzh113:pass123@recipes.vivbonf.mongodb.net/eCommerce?retryWrites=true&w=majority").then(
    ()=> {
app.listen(5005, console.log("Server started on 5005 wiht type set to module"))})