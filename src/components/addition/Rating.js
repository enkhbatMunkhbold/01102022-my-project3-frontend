import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, FormGroup, FormHelperText} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Rating = ({ movie }) => {
  const classes = useStyles();
  const paperStyle={padding: '50px 20px 80px', width: 700, margin: "80px auto", height: 850, backgroundColor: "#FEFBE7"}
  
  return (
    <div>
      <Grid align='center'>
        <Paper elevation={20} style={paperStyle}>

        </Paper>
      </Grid>
    </div>
  )
}

export default Rating