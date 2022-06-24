import mongoose from "mongoose";
const SignUpSchema=mongoose.Schema({
    name:{
        
        type:String
    },
    email:{
        
        type:String
    },
    type:{
        
        type:String
    },
    password:{
        
        type:String
    },
    image:{
        type:String
    },
    resume:{
        type:String
    }
    
})
const user=mongoose.model('user',SignUpSchema);
export default user