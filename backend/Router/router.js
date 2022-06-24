import { Router } from "express";
import {Login} from '../Controller/login.js'
import { SignUpHandler } from "../Controller/signup.js";
import {ApplicantDetails} from '../Controller/ApplicantDetails.js'
import { getDetails } from "../Controller/getDetails.js";


const router=Router()

router.post('/login',Login)
router.post('/signup',SignUpHandler)
router.post('/applicant_details',ApplicantDetails)
router.get('/applicant_details',getDetails)





export default router