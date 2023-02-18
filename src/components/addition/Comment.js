import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core';
import { Typography } from '@mui/material';

const Comment = ({ user }) => {  

  const [show, setShow] = useState(false)
  const [text, setText] = useState(user.comment)

  const handleClick = () => {   
    setShow(true)
  }  

  const handleChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }

  return (
    <Grid sx={11} onClick={() => handleClick(user.comment)}>
        { show ? <TextField fullWidth type="input" defaultValue={text} onChange={handleChange}/> :
          <Typography>{user.comment}</Typography> }
    </Grid> 
  )
}

export default Comment