import React, { useState } from 'react'
import { FormControl, Grid, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';

const Comment = ({ user, userReview, setUserReview }) => {  

  const [show, setShow] = useState(false)
  const [text, setText] = useState(user.comment)

  const handleClick = () => {   
    console.log('userReview:', userReview)
    setShow(true)
  }  

  const handleChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    setUserReview({...userReview, comment: text})
    setShow(false)    
  }

  return (
    <FormControl onSubmit={handleSubmit}>
      <Grid sx={11} onClick={() => handleClick(user.comment)}>
        { show ? <TextField fullWidth defaultValue={text} onChange={handleChange}/> :
          <Typography>{user.comment}</Typography> }
      </Grid> 
    </FormControl>
    
  )
}

export default Comment