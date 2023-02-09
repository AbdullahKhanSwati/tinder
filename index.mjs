import express from "express"
import mongoose from "mongoose";
import data from "./schema.js";


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
console.log("hello there");


const db = `mongodb+srv://Abdullah:mazullah213@cluster0.a2dmzna.mongodb.net/tinderData?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);

mongoose.connect(db).then(() =>{
    console.log("connected successfully")
}).catch((error) =>{
    console.log(error);
})
app.get("/",async(req,res) =>{
    try {
        res.status(200).send("hello this is Home page");
    } catch (error) {
        console.log(error);
    }
})
app.post("/tinder",async(req,res) =>{
    // try {
       
        
        

    //     const user = new data(req.body);
    // const create = await user.save();
    // res.status(200).send(create);
    // } catch (error) {
    //     res.send(error);
    // }

    const card  = req.body;
    data.create(card,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data)
        }
    })
})
app.get("/tinder",async(req,res)=>{

    data.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
        }
    })
// try {
//     const mydata =await data.find();
//     res.status(201).send(mydata);
// } catch (error) {
//     console.log(error);
// }


})
app.delete("./delet",async(req,res)=>{
    try {
        
       await data.deleteOne({name:"Abdullah"});
        res.status(200).send("all data is deleted");
    } catch (error) {
        res.status(500).send(error);
    }
   
})




app.listen(port,()=>{
    console.log("Listening at port "+port);
})