import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container, FormControl, Grid, List, ListItem, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3),
    width: '100%'
  },
  textField: {
    margin: 10
  },
  listStyle: {
    height: '30rem',
    overflow: 'auto'
  },
  containerStyle: {
    height: '14rem'
  }, 
  reveiwField: {
    height: '32rem'
  },
  buttonStyle: {
    size: 'large',    
    margin: theme.spacing(5)
  }
}));

const UserReview = ({ movie, reviews, setReviews  }) => { 
  
  const [fields, setFields] = useState([])
  const [userReview, setUserReview] = useState({
    name: '',
    review: ''
  })
  
  const classes = useStyles();

  const listMovieReviews = reviews.map((user, index) => 
    <ListItem key={index}>
      <Box>
        <Typography sx={{fontWeight: 'bold'}}>
          {user.name}
        </Typography>
        <Grid item>
          {user.review}
        </Grid>  
      </Box>      
    </ListItem>
  )

  const handleChange = (e) => {
    setUserReview({...userReview, [e.target.name]: e.target.value})    
    setFields([...fields, e.target])
  }

  const handleSubmit = (e) => {   
    e.preventDefault()  
    console.log('Movie ID:', movie.id)
    console.log('User review:', userReview)

    fetch( `http://localhost:9292/movies/${movie.id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(userReview)
    }).then(res => res.json())
      .then(postedReview => {
        setReviews([...reviews, postedReview])
      })
    setReviews([...reviews, userReview])
    fields.forEach(f => f.value = '')
  }
  
  console.log("Reviews:", reviews)

  return (
    <Fragment>
      <Grid container direction={'column'} spacing={6}>
        <Grid className={classes.reveiwField} item>
          <List className={classes.listStyle}>
            {listMovieReviews}
          </List>
        </Grid>
        <Container className={classes.containerStyle}>
          <Grid container >
            <FormControl className={classes.formControl} onSubmit={handleSubmit}>
              <TextField className={classes.textField}
                label='User'
                placeholder='Insert user name...'
                variant='standard'
                onChange={handleChange}
                name='name'
              />
              <TextField className={classes.textField}
                label='Review'
                placeholder='Type your review...'
                variant='outlined'
                onChange={handleChange}
                name='review'
              />  
              <Grid>
                <Button fullWidth 
                  type='submit'
                  variant='contained' 
                  label='Send'
                  endIcon={<SendIcon/>}
                  className={classes.buttonStyle}
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </Grid>      
            </FormControl>
          </Grid>          
        </Container>
      </Grid>
    </Fragment>
  )
}

export default UserReview