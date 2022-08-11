import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card } from 'react-bootstrap'

import {Link, useNavigate }  from 'react-router-dom'


const MovieList = () => {
    const Navigate = useNavigate()

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/').then((res) => {
            console.log("res", res.data)
            setMovieList(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const hanldeRedirect = (id) => {
        Navigate(`/movie-id/${id}`)
    }



    return (
      
         <div style={{ display: 'flex', flexDirection: "row", flexWrap:"wrap" }}>
            {
             movieList && movieList.map((item, index) => {
                    return (
                        <div style={{margin:"10px"}}>
                            <Card style={{ width: '18rem' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>{item.movie_title}</Card.Title>
                                    <Card.Title>{item.movie_name}</Card.Title>
                                    <Card.Title>{item.released_date}</Card.Title>
                                    <Button onClick={() =>hanldeRedirect(item.id)} variant="primary">go to movie id</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
      

    )
}


export default MovieList