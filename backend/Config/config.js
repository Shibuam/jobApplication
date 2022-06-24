import mongoose from "mongoose";
export const mongooseConnection=async()=>{
    try{
    const con= await   mongoose.connect('mongodb+srv://rahul:1234@cluster0.xxdvb.mongodb.net/?retryWrites=true&w=majority')
console.log("Data Base connected Successfully")
    }
    catch(err){
console.log(err)
process.exit(1)

    }
}
