import React from 'react';
import { makeStyles, createTheme } from '@material-ui/core/styles';
import clapperBoard from '../images/clapperboard.png';
import camera from '../images/video-camera.png';
import Grid from '@material-ui/core/Grid';
import posterImage from '../images/movies_poster.png';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    backgroundImage: `url(${posterImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    opacity: "1.2",
    height: "850px"
  }, 
  title: {
    marginTop: "15px",
    padding: "10px auto 50px", 
    color: "#00D7FF",
    fontFamily: "Kanit, sans-serif", 
    fontSize: "80px",
    textShadow: "1.5px 0 black"
  },
  clapperBoard: {
    maxWidth: "100px",
    margin: "2rem 0 5rem 8rem"
  },
  picture: {
    maxWidth: "85px",
    margin: "2rem 8rem 5rem 0"
  },
  webInfo: {    
    textAlign: "left",
    margin: "5% 2% 0 65%",
    backgroundColor: "#7FB5FF",
    opacity: "0.85"
  },
  linkToLIstText: {
    textAlign: "left",
    margin: "0 2% 0 65%",
    backgroundColor: "#7FB5FF",
    opacity: "0.85"
  },
  buttonGrid: {
    margin: "10rem auto"
  }, 
  icons: {
    paddingRight: "8px"
  }
}))

const Home = () => { 
  const classes = useStyles(); 
  const theme = createTheme({ 
    typography: {
      fontFamily: "Merriweather, sans-serif",
      fontSize: 20,
      fontWeightBold: 200,
    }
  });

  const handleFacebookBtn = () => {
    window.location.href = 'https://www.facebook.com'
  }

  const handleTwitterBtn = () => {
    window.location.href = 'https://www.twitter.com/home'
  }

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <img className={classes.clapperBoard} src={clapperBoard} alt="camera..."/>
        </Grid>
        <Grid item xs={8}>
          <h1 className={classes.title}>Welcome To World Of Movies!</h1> 
        </Grid>  
        <Grid item xs={2}>
          <img className={classes.picture} src={camera} alt="camera..."/>
        </Grid>    
        <Grid item xs={7}>
          <Typography></Typography>
        </Grid>    
        <Grid item xs={5} className={classes.webInfo}>
          <Typography theme={theme} style={{color: "#fff"}}>
            Welcome to the World of Movies! In this website you can find any movie you
            want to learn about or create movie data, which's information doesn't 
            exist in our database, and <Link to="/movies/new">add</Link> to it!
          </Typography>
        </Grid>     
        <Grid item xs={7}>
          <Typography></Typography>
        </Grid>    
        <Grid item xs={5} className={classes.linkToLIstText}>
          <Typography theme={theme} style={{color: "#fff"}}>
            You can see a full list of our database movies <Link to="/movies">HERE!</Link> 
          </Typography>
        </Grid>   
        <Grid item xs={2} className={classes.buttonGrid}>
          <Button variant="outlined" color='primary' size='large' style={{margin: '10px'}} onClick={handleFacebookBtn}>
            <FontAwesomeIcon icon={faFacebookF} className={classes.icons} />  Share
          </Button>
          <Button variant="contained" color='primary' size='large' style={{margin: '10px'}} onClick={handleTwitterBtn}>
            <FontAwesomeIcon icon={faTwitterSquare} className={classes.icons} /> Share
          </Button>
        </Grid> 
        <Grid item xs={10}>
        </Grid>                 
      </Grid>
    </Box>
  )
}

export default Home