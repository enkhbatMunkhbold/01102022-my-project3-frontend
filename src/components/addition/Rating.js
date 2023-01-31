import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core';
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
  }
}));

const Rating = ({ movie }) => {
  const classes = useStyles();
  const paperStyle={padding: '0px 0px 80px', width: 700, margin: "80px auto", height: 850, backgroundColor: "#FEFBE7"}
  
  return (
    <div>
      <Grid align='center'>
        <Paper elevation={20} style={paperStyle}>
          <CardHeader className={classes.header} title={<h3 className={classes.text}>Review for {movie.name}</h3>}>
          </CardHeader>
        </Paper>
      </Grid>
    </div>
  )
}

export default Rating