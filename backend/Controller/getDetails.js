import ApplicantModel from '../Modal/SignUpmodel.js'
export const getDetails=(async(req,res)=>{
    try{
        let response= await ApplicantModel.find({type:"applicant"})
        res.status(200).json({
            response
        })
    }
    catch(err){
        console.log(err)
    }
  
})