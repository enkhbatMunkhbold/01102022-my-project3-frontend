import React, { Fragment, useState } from 'react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container, FormControl, Grid, List, ListItem, TextField } from '@material-ui/core';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@material-ui/core/styles';

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

const UserReview = () => {

  const [movieRevies, setMovieReviews] = useState([])

  const classes = useStyles();
  const [userReview, setUserReview] = useState({
    name: '',
    review: ''
  })

  const listMovieReviews = movieRevies.map((user, index) => 
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
  }

  const handleSubmit = (e) => {   
    e.preventDefault()
    setMovieReviews([...movieRevies, userReview])
    console.log(userReview)
    console.log(movieRevies)
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

export default UserReview