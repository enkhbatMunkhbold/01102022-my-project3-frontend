import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';

const Comment = ({ user }) => {  

  const [show, setShow] = useState(false)
  // console.log('User from comment:', user)

  const handleEdit = (review) => {   
    setShow(true)
    console.log('Selected review:', review) 
  }  

  return (
    <Grid sx={11} onClick={() => handleEdit(user.comment)}>
        { show ? <TextField value={user.comment} /> :
          <Typography>{user.comment}</Typography> }
    </Grid> 
  )
}

export default Comment;