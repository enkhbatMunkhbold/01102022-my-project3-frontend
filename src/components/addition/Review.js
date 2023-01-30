import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../context/movies'
import Rating from './Rating'

const Review = () => {

  const { movies } = useContext(MoviesContext)
  const { id } = useParams()
  
  const selected = movies.filter(movie => movie.id === parseInt(id))[0]
  
  
  return (
    < Rating movie={selected}/>
  )
}

export default Review