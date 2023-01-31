import React, { Fragment, useState } from 'react'
import { Container, Typography, Divider, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { MovieReviewDto } from '../MovieReviewDto';

const UserReview = () => {

  const [movieRevies, setMovieReviews] = useState([
    new MovieReviewDto('John', 'hi!')
  ])

  const listMovieReviews = movieRevies.map((movieReviewDto, index) => 
    <ListItem key={index}>
      <ListItemText primary={`${movieReviewDto.user}: ${movieReviewDto.review}`}/>
    </ListItem>
  )

  return (
    <Fragment>
      <Container>
        <Paper elevation={2}>
          <Box p={3}>
            <Typography variant='h6' gutterBottom>
              Hello World!
            </Typography>
            <Divider/>
            <Grid container spacing={4} alignItems='center'>
              <Grid item>
                <List>
                  {listMovieReviews}
                </List>
              </Grid>
              <Grid item></Grid>
              <Grid item></Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  )
}

export default UserReview