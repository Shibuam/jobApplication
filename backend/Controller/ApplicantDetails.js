
import { cloudinaryConfig } from '../utils/cloudinary.js'
import { v2 as cloudinary } from 'cloudinary'
import ApplicantModel from '../Modal/SignUpmodel.js'

export const ApplicantDetails = (async (req, res) => {
    // console.log( cloudinaryConfig)
    let { formdata } = req.body
 

    try {
        const data1 = {
            image: req.body.formdata.image,
            resume:req.body.formdata.resume
        };
        const imageSecure_url  = await cloudinary.uploader.upload(data1.image)
        const resumeSecure_url  = await cloudinary.uploader.upload(data1.resume)

       // let response=ApplicantModel.create({id:formdata.applicantId,image:imageSecure_url.secure_url,resume:resumeSecure_url.secure_url})
       let applicant=await ApplicantModel.findById(formdata.applicantId)
       applicant.image=imageSecure_url.secure_url,
       applicant.resume=resumeSecure_url.secure_url
       applicant.save()

       res.status(200).json({message:"success"})
    } catch (error) {
        console.log("the error is ", error)
        res.status(400).json({ message: "failed to uplode " })
    }





})

