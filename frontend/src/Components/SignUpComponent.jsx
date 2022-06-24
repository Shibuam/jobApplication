import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const SignUpComponent = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [res, setResponse] = useState('')

    const onSubmit = async (dat) => {


        console.log(dat)
        let { data } = await axios.post('http://localhost:4000/api/signup', { dat })
        setResponse(data)
        console.log(data)
        data.name && navigate('/login')
    };

    return (
        <div>
            <div >
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h3>Sign Up</h3>
                                {res.message && <p>{res.message}</p>}
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input  {...register("name", { required: true })}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter user Name"
                                    />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label>Email address</label>
                                    <input  {...register("email", { required: true })}
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

                                <Form.Select {...register("type", { required: true })} aria-label="Default select example">

                                    <option value="applicant">Applicant</option>
                                    <option value="user">User</option>

                                </Form.Select>

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
        </div>
    )
}
