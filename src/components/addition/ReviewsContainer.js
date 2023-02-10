import React, { Fragment, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { MoviesContext } from '../context/movies'
import { Grid, Paper, AppBar, Toolbar } from '@material-ui/core';
import { Box } from '@mui/system';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Typography } from '@mui/material';
import Reviews from './Reviews';

const ReviewsContainer = () => {

  const { id } = useParams()
  const { movies } = useContext(MoviesContext)
  const selected = movies.filter(movie => movie.id === parseInt(id))[0]
  
  const paperStyle={padding: '0px 0px 30px', width: 700, margin: "30px auto", height: 780, backgroundColor: "#FEFBE7"}

  return (
    <Fragment>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <AppBar position='static'>
            <Toolbar>
              <Box mr={2}>
                <RateReviewIcon fontSize={'large'}/>
              </Box>
              <Typography variant='h6'>
                Reviews to "{selected.name}"
              </Typography>
            </Toolbar>
          </AppBar>
          <Reviews movie={selected}/>
        </Paper>
      </Grid>
    </Fragment>
  )
}

export default ReviewsContainer