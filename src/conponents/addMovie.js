import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function AddMovies() {

    const [movieName, setMovieName] = useState("")
    const [movieTitle, setMovieTitle] = useState("")
    console.log(movieName, " onChange={(e)=>setMovieName(e.currentTarget.value)")

    const submitFrom = () => {
        console.log(movieName, "KKKKKKKKKKKKKKKKKKKKKKK")
        axios.post('http://localhost:3000/addMovie', {
            movieName : movieName,
            movieTitle : movieTitle
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })


    
    }

  return (
  <div>
      {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control onChange={(e)=>setMovieName(e.currentTarget.value)} required={true} type="text" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control  onChange={(e)=>setMovieName(e.currentTarget.value)} required={true} type="text" placeholder="Password" />
      </Form.Group>
     
      <Button onClick={submitFrom} variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}

    <div>
        <input onChange={(e)=>setMovieName(e.currentTarget.value)}></input>
        <input onChange={(e)=>setMovieTitle(e.currentTarget.value)}></input>
        <Button onClick={submitFrom} variant="primary" type="submit">
        Submit
      </Button>
    </div>
  </div>
  );
}

export default AddMovies;