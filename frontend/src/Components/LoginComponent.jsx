import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import axios from 'axios'

export const LoginComponent = () => {

    const[res,setResponse]=useState('')
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async(dat) => {
      
        let {data}=await axios.post('http://localhost:4000/api/login',{dat})
setResponse(data)
console.log(data)

    if(data.result.type=='applicant'){
        localStorage.setItem('applicantId:',data.result.id)
        navigate('/applicant_details')
    
    }else if(data.result.type=='user'){
        navigate('/view_applications')
    }
    };
    return (
        <div >
            <Container>
                <Row >
                    <Col xs={12} sm={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Sign In</h3>
                            {res.message && <p>{res.message}</p>}
                            <div className="mb-3">
                                <label>Email address</label>
                                <input  {...register("email",{required:true})}
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                />
                                 {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input {...register("password", { required: true })}
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                                {errors.password && <span>This field is required</span>}
                            </div>
                          
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                           
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
