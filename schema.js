import mongoose from "mongoose";

const mySchema = new mongoose.Schema({

    name:String,
    url:String
})
 
export default mongoose.model("persons",mySchema);