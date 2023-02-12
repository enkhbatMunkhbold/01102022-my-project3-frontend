import React, { Fragment, useState, useContext, useEffect } from 'react'
import { MoviesContext } from '../context/movies'
import { Container, FormControl, Grid, List, ListItem, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

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

const Reviews = ({ movie }) => { 
  
  const { movies, setMovies } = useContext(MoviesContext)
  let { id, reviews } = movie
  const [fields, setFields] = useState([])
  const [thisMovieReviews, setThisMovieReviews] = useState(reviews)
  const [userReview, setUserReview] = useState({
    name: '',
    review: ''
  })
  
  const classes = useStyles();

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${id}/reviews`)
    .then(res => res.json())
    .then(data => {
      // const reviewData = data.filter(m => m.movie_id === id)
      // setThisMovieReviews(reviewData)
      console.log(`Fetched ${id} data`, data)
    })
  }, [setThisMovieReviews])

  console.log('This movie reviews:', thisMovieReviews)
  const listMovieReviews = thisMovieReviews.map((user, index) =>     
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
    console.log('Movie ID:', id)
    console.log('User review:', userReview)

    fetch( `http://localhost:9292/movies/${id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(userReview)
    }).then(res => res.json())
      .then(postedReview => {
        console.log("Posted review:", postedReview)
        reviews = [...reviews, postedReview]
        setThisMovieReviews([...thisMovieReviews, postedReview])
        movies.map(m => m.id === id ? movie : m)
        setMovies(movies)
      })
    console.log('This movie reviews after post:', thisMovieReviews)
    fields.forEach(f => f.value = '')
  }
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

export default Reviews