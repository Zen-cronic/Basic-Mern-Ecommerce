
import mongoose from "mongoose";
// import { ProductModel } from "./Products";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    //purhcesed not required as new user would have no items in cart
    purchased: [{type:mongoose.Schema.Types.ObjectId, ref:"products"}  ]
  });

  export const UserModel = mongoose.model("users", UserSchema)



