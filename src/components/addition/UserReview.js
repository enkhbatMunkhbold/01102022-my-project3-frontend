import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container, FormControl, Grid, List, ListItem, TextField } from '@material-ui/core';
import { MovieReviewDto } from '../MovieReviewDto';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3),
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

const UserReview = () => {

  const [movieRevies, setMovieReviews] = useState([
    new MovieReviewDto('John', 'Hi, everyone! This is awesome movie!')
  ])

  const classes = useStyles();
  const [user, setUser] = useState('')
  const [review, setReview] = useState('')

  const listMovieReviews = movieRevies.map((movieReviewDto, index) => 
    <ListItem key={index}>
      <Box>
        <Typography variant='h6' gutterBottom>
          {movieReviewDto.user}
        </Typography>
        <Grid item>
          {movieReviewDto.review}
        </Grid>  
      </Box>      
    </ListItem>
  )

  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  const handleReviewChange = (e) => {
    setReview(e.target.value)
  }

  const handleClick = (e) => {
    console.log('User:', user)
    console.log('Review:', review)
  }

  return (
    <Fragment>
      <Grid container direction={'column'} spacing={6}>
        <Grid fullWidth className={classes.reveiwField} item>
          <List className={classes.listStyle}>
            {listMovieReviews}
          </List>
        </Grid>
        <Container className={classes.containerStyle}>
          <Grid container >
            <FormControl fullWidth className={classes.formControl}>
              <TextField className={classes.textField}
                value={user}
                label='User'
                placeholder='Insert user name...'
                variant='standard'
                onChange={handleUserChange}
              />
              <TextField className={classes.textField}
                value={review}
                label='Review'
                placeholder='Type your review...'
                variant='outlined'
                onChange={handleReviewChange}
              />  
              <Grid>
                <Button fullWidth 
                  variant='contained' 
                  label='Send'
                  endIcon={<SendIcon/>}
                  className={classes.buttonStyle}
                  onClick={handleClick}
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