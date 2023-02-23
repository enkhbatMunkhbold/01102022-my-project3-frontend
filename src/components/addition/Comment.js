import React, { useState, useContext } from 'react'
import { MoviesContext } from '../context/movies'
import {  Grid, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';

const Comment = ({ user, movie, reviews, userReview, setUserReview }) => {  

  const { movies, setMovies } = useContext(MoviesContext)
  const [show, setShow] = useState(false)
  const [text, setText] = useState(user.comment)

  const handleClick = () => { 
    setShow(true)
  }  

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()    
    const editedComment = document.getElementById(`${user.id}`).value    
    setUserReview({...userReview, comment: editedComment})
    fetch(`http://localhost:9292/movies/${movie.id}/reviews/${user.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: editedComment
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        reviews = [...reviews, data]
        movies.map(m => m.id === movie.id ? movie : m)
        setMovies(movies)
      })
    setShow(false)  
    console.log(userReview)  
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid onClick={() => handleClick()}>
        { show ? <TextField id={`${user.id}`} defaultValue={text} onChange={handleChange}/> :
          <Typography>{user.comment}</Typography> }
      </Grid> 
    </form>    
  )
}

export default Comment