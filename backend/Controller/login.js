import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import userModel from '../Modal/SignUpmodel.js'
export const Login = asyncHandler(async (req, res) => {
    try {
        console.log(req.body, "dafdfadfdf")
        let { email, password } = req.body.dat
        let exist = await userModel.find({ email })
      
        console.log({exist})
       
        if (exist.length != 0) {
            let pswrd = await bcrypt.compare(password, exist[0].password)
            if (pswrd) {

                const result = {
                    id: exist[0]._id,
                        name: exist[0].name,
                        mail: exist[0].email,
                        type: exist[0].type,
                    }

                res.json({
                     result

                })
            }
            else {
                res.json({
                    message: "invalid password"
                })
            }
        }
        else {
            res.json({
                message: "there is no such email"
            })
        }
    }
    catch (err) {
        console.log(err)
    }


})