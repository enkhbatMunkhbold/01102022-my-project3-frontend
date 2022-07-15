import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MovieCard from "./MovieCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MovieList = ({ movies }) => {    
  console.log(movies);
  const movieCards = movies.map(m => {
      return <MovieCard key={m.id} movie={m}/>
  })

  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "30px"}}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MovieList
