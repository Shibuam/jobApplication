import mongoose from "mongoose";
const ApplicantSchema=mongoose.Schema({
    id:{
        type:String,

    },
image:{
    type:String
},
resume:{
    type:String
}
    
})
const applicant=mongoose.model('Applicant',ApplicantSchema);
export default applicant