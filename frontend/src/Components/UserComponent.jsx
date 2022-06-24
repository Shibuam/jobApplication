import React, { useState } from 'react'
import { saveAs } from "file-saver";
import { Table, Button,Container } from 'react-bootstrap'
import axios from 'axios'
import { useEffect } from 'react'
import { Details } from './Details'

export const UserComponent = () => {

  const [detais, setDetails] = useState([])
  const getUser = async () => {
    const { data } = await axios.get('http://localhost:4000/api/applicant_details')
    console.log(data.response)
    setDetails(data.response)
  }

  useEffect(() => {
    getUser()

  }, [])
  const saveFile = (url) => {
    saveAs(`${url}`);
  };

  return (
 <Container className='mt-5'>
     <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Index</th>
            <th>Image</th>
            <th>Name</th>
            <th>email</th>
            <th>Download Resume </th>
          </tr>
        </thead>
        <tbody>
          {detais.length > 0 && detais.map((element,index) =>

            <tr>
              <td>{index+1}</td>
              <td>   <img className='img-fluid' width={50} height={50} src={element.image} /> </td>
              <td>{element.name}</td>
              <td>{element.email}</td>
            
              <td><Button onClick={() => { saveFile(element.resume) }}>Download Resume</Button></td>
            </tr>

          )}

        </tbody>
      </Table>

    </div>
 </Container>
  )
}
