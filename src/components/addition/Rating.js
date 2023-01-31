import React from 'react'
import { Grid, Paper, AppBar, Toolbar } from '@material-ui/core';
import { Box } from '@mui/system'
// import CardHeader from '@mui/material/CardHeader';
// import { makeStyles } from '@material-ui/core/styles';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Typography } from '@mui/material';
import UserReview from './UserReview';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex'
//   },
//   formControl: {
//     margin: theme.spacing(3),
//   },
  // header: {
  // },
  // text: {
  //   color: "#fff"
  // },
  // box: {
  //   height: '10rem'
  // }
// }));

const Rating = ({ movie }) => {
  // const classes = useStyles();
  const paperStyle={padding: '0px 0px 30px', width: 700, margin: "30px auto", height: 750, backgroundColor: "#FEFBE7"}
  
  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          {/* <CardHeader 
            className={classes.header} 
            title={<h3 className={classes.text}>
              Review to {movie.name}
            </h3>}/>
          <Box p={3}>
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
            <Divider/>
          </Box> */}
          <AppBar position='static'>
            <Toolbar>
              <Box mr={2}>
                <RateReviewIcon fontSize={'large'}/>
              </Box>
              <Typography variant='h6'>
                Review to "{movie.name}"
              </Typography>
            </Toolbar>
          </AppBar>
          <UserReview/>
        </Paper>
      </Grid>
    </div>
  )
}

export default Rating