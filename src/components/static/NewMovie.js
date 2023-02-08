import React, { useState, useContext } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, FormGroup, FormHelperText} from '@material-ui/core';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { MoviesContext } from '../context/movies';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const NewMovie = () => {
  const { movies, setMovies } = useContext(MoviesContext)
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    actors: '',
    img_link: '',
    genre: '',
    year: 0,
    plot: '',
    rating: '',
    favorite: false
  })

  const [radioValue, setRadioValue] = useState('non-favorite')
  const [state, setState] = React.useState({
    Action: false,
    Adventure: false,
    Animation: false,
    Biography: false,
    Comedy: false,    
    Crime: false, 
    Documentary: false,   
    Drama: false,
    History: false,
    Horror: false,    
    Mystery: false,
    Romance: false,    
    Scifi: false,    
    Thriller: false,
    War: false,
    Western: false
  }); 
  
  const { Action, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, History, Horror, Mystery, Romance, Scifi, Thriller, War, Western} = state;
  const paperStyle={padding: '50px 20px 80px', width: 700, margin: "80px auto", height: 850, backgroundColor: "#FEFBE7"}
  const headerStyle={margin:20}
  const avatarStyle={backgroundColor: 'blue'}  
  
  const handleCheck = e => {
    setState({ ...state, [e.target.name]: e.target.checked })
  }

  const handleRadioButton = e => {
    setRadioValue(e.target.value)
  }

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault() 
    let isAlreadyExist = false
    for(let movie of movies) {
      if(movie.name === formData.name) {
        alert("A movie is already existing in the list!")        
        isAlreadyExist = true
        window.history.back()
      } 
    }
      
    if(!isAlreadyExist) {
      const movieGenreList = Object.entries(state).filter(item => item[1]).map(item => item[0]).join(', ') 
      const createdMovie = {
        name: formData.name,
        actors: formData.actors,
        img_link: formData.img_link,
        genre: movieGenreList,
        year: Number(formData.year),
        plot: formData.plot,
        rating: formData.rating,
        favorite: (radioValue === 'non-favorite') ? false : true
      }
  
      fetch('http://localhost:9292/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdMovie)
      }).then(res => res.json())
        .then(postedMovie => {
          setMovies([...movies, postedMovie])
          alert("Movie created and added to the list successfully!")
        })        
      }
      e.target.reset()
      setRadioValue('non-favorite')
      Object.entries(state).map(item => item[1] === true ? setState(false) : item)
  }   

  return (
    <div>
    <Grid align="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>
            <LocalMoviesIcon/>
          </Avatar>
        </Grid>
        <h2 style={headerStyle}>INSERT MOVIE</h2>
        <Typography variant="caption">
          Please fill this form to insert your favorite movie into Database!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Movie Title" placeholder='Enter Movie Title' onChange={handleChange} name='name'/>
          <TextField fullWidth label="Image Link" placeholder='Enter Link Address' onChange={handleChange} name='img_link'/>
          <TextField fullWidth label="Actors" placeholder="Enter Actors' names" onChange={handleChange} name='actors'/>
          <TextField fullWidth label="Year" placeholder='Enter Year' onChange={handleChange} name='year'/>
          <TextField fullWidth label="Rating" placeholder='Enter Rating' onChange={handleChange} name='rating'/>  
          <TextField fullWidth multiline label="Plot" 
                     minRows={3} maxRows={5} 
                     placeholder='Enter short plot...'  
                     name='plot'
                     onChange={handleChange}
          />
          <h3 style={{marginBottom: 0}}>Genre</h3>
          <div className={classes.root}>          
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={Action} onChange={handleCheck} name="Action" />}
                  label="Action"
                />
                <FormControlLabel
                  control={<Checkbox checked={Adventure} onChange={handleCheck} name="Adventure" />}
                  label="Adventure"
                />
                <FormControlLabel
                  control={<Checkbox checked={Animation} onChange={handleCheck} name="Animation" />}
                  label="Animation"
                />
                 <FormControlLabel
                  control={<Checkbox checked={Biography} onChange={handleCheck} name="Biography" />}
                  label="Biography"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>      
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={Comedy} onChange={handleCheck} name="Comedy" />}
                  label="Comedy"
                />
                <FormControlLabel
                  control={<Checkbox checked={Crime} onChange={handleCheck} name="Crime" />}
                  label="Crime"
                />
                <FormControlLabel
                  control={<Checkbox checked={Documentary} onChange={handleCheck} name="Documentary" />}
                  label="Documentary"
                />
                 <FormControlLabel
                  control={<Checkbox checked={Drama} onChange={handleCheck} name="Drama" />}
                  label="Drama"
                />
              </FormGroup>
              <FormHelperText>Pick all that applies</FormHelperText>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={History} onChange={handleCheck} name="History" />}
                  label="History"
                />
                <FormControlLabel
                  control={<Checkbox checked={Horror} onChange={handleCheck} name="Horror" />}
                  label="Horror"
                />
                <FormControlLabel
                  control={<Checkbox checked={Mystery} onChange={handleCheck} name="Mystery" />}
                  label="Mystery"
                />
                 <FormControlLabel
                  control={<Checkbox checked={Romance} onChange={handleCheck} name="Romance" />}
                  label="Romance"
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={Scifi} onChange={handleCheck} name="Scifi" />}
                  label="Sci-Fi"
                />
                <FormControlLabel
                  control={<Checkbox checked={Thriller} onChange={handleCheck} name="Thriller" />}
                  label="Thriller"
                />
                <FormControlLabel
                  control={<Checkbox checked={War} onChange={handleCheck} name="War" />}
                  label="War"
                />
                 <FormControlLabel
                  control={<Checkbox checked={Western} onChange={handleCheck} name="Western" />}
                  label="Western"
                />
              </FormGroup>
            </FormControl>
          </div>        
          <FormControl component="fieldset" style={{mt: 10, mb: 30}}>            
            <RadioGroup aria-label="favorite" name="favorite" value={radioValue} style={{display: 'initial'}} onChange={handleRadioButton}>
              <h3 style={{marginBottom: 20}}>Favorite</h3>
              <FormControlLabel value="favorite" control={<Radio />} label="Yes" />
              <FormControlLabel value="non-favorite" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl> 
          <div style={{marginTop: 20}}>
            <Button type="submit" variant="contained" color="primary">Create Movie</Button>
          </div>             
        </form>
      </Paper>
    </Grid>
    </div>
  )
}

export default NewMovie