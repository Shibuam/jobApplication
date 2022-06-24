import userModel from '../Modal/SignUpmodel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'

export const SignUpHandler = asyncHandler(async (req, res) => {


    let { name, email, password, type } = req.body.dat
    let exist = await userModel.find({ email })
    let pswrd = await bcrypt.hash(password, 10)

    if (exist.length == 0) {
        console.log("there is no such email")

      let data=  await userModel.create({ name: name, email: email, type: type, password: pswrd })
      res.json({
        name,
        email,
        type,
        
      })
    }
    else {
        res.json({
            message: "this email already exist"
        })
    }
})

