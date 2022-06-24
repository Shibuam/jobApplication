import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row,Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";


export const Details = () => {

  const [imgBase64, setImageBase64] = useState('')
  const [resumeBase64,setResumeBase64]=useState('')
  const [previewSource, setPreviewSource] = useState()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onChangeImage = async (e) => {
 
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImageBase64(base64);
  };
  const onChangeResume=async(e)=>{
    console.log("handleinput change 1");
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setResumeBase64(base64);
    
  }


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        console.log("the error was", error);
        reject(error);
      };
    });
  };

  const onSubmit = async (dat) => {
    const formdata = {

      applicantId: user,
      image: imgBase64,
      resume:resumeBase64
    }
    console.log(formdata)

    let { data } = await axios.post('http://localhost:4000/api/applicant_details', { formdata })


  };
  let user;

  
  useEffect(() => {
    user = localStorage.getItem('applicantId:')

  },[])


  return (
    <div>
      <Container className='mt-4'>
        <h3 className='text-center'>Applicant Details</h3>
        <Row>
          <Col xs={6} >
          <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Upload Photo</Form.Label>
    <Form.Control 
    {...register("image", { required: true })} onChange={(e) => onChangeImage(e)}
    type="file" />

  </Form.Group>
  {errors.image && "upload image"}
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Upload File</Form.Label>
    <Form.Control 
    {...register("resume", { required: true })} onChange={(e) => onChangeResume(e)}
    type="file"/>
  </Form.Group>
{errors.resume && "upload resume"}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
