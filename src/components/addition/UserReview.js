import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container, FormControl, Grid, IconButton, List, ListItem, TextField } from '@material-ui/core';
import { MovieReviewDto } from '../MovieReviewDto';
import SendIcon from '@mui/icons-material/Send';

const UserReview = () => {

  const [movieRevies, setMovieReviews] = useState([
    new MovieReviewDto('John', 'Hi, everyone! This is awesome movie!')
  ])

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
      {/* <Container>
        <Paper elevation={2}>
          <Box p={3}> */}
            {/* <Typography variant='h6' gutterBottom>
              Hello World!
            </Typography>
            <Divider/> */}
            <Grid container spacing={3} alignItems='center'>
              <Grid xs={12} style={{height: '32rem'}} item>
                <List style={{height: '30rem', overflow: 'auto'}}>
                  {listMovieReviews}
                </List>
              </Grid>
              <Container style={{height: '14rem'}}>
                <Grid container sx={{mb: 5}}>
                  <FormControl fullWidth>
                    <TextField
                      value={user}
                      label='User'
                      variant='standard'
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <TextField
                      value={review}
                      label='Your review..'
                      variant='outlined'
                    />                    
                  </FormControl>                
                </Grid>
              </Container>
            </Grid>
          {/* </Box>
        </Paper> */}
      {/* </Container> */}
    </Fragment>
  )
}

export default UserReview