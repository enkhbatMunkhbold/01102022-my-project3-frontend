import React from 'react'
import { Grid, Paper, Divider, TextField } from '@material-ui/core';
import { Box } from '@mui/system'
import CardHeader from '@mui/material/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  header: {
    backgroundColor: "#2C74B3",
    height: '4rem'
  },
  text: {
    color: "#fff"
  },
  box: {
    height: '10rem'
  }
}));

const Rating = ({ movie }) => {
  const classes = useStyles();
  const paperStyle={padding: '0px 0px 80px', width: 700, margin: "30px auto", height: 750, backgroundColor: "#FEFBE7"}
  
  return (
    <div>
      <Grid align='center'>
        <Paper elevation={20} style={paperStyle}>
          <CardHeader 
            className={classes.header} 
            title={<h3 className={classes.text}>
              Review for {movie.name}
            </h3>}/>
          <Box p={3}>
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
            <Divider/>
          </Box>
        </Paper>
      </Grid>
    </div>
  )
}

export default Rating