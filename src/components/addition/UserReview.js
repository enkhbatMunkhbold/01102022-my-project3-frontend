import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container, FormControl, Grid, List, ListItem, TextField } from '@material-ui/core';
import { MovieReviewDto } from '../MovieReviewDto';
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

  return (
    <Fragment>
      <Grid container direction={'column'} spacing={6} alignItems='center'>
        <Grid xs={12} style={{height: '32rem'}} item>
          <List style={{height: '30rem', overflow: 'auto'}}>
            {listMovieReviews}
          </List>
        </Grid>
        <Container style={{height: '14rem'}}>
          <Grid container >
            <FormControl fullWidth className={classes.formControl}>
              <TextField className={classes.textField}
                value={user}
                label='User'
                placeholder='Insert user name...'
                variant='standard'
              />
              <TextField className={classes.textField}
                value={review}
                label='Review'
                placeholder='Type your review...'
                variant='outlined'
              />        
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} md={6} sx={{m: 5}}>
            <FormControl fullWidth>
                          
            </FormControl>                
          </Grid> */}
        </Container>
      </Grid>
    </Fragment>
  )
}

export default UserReview