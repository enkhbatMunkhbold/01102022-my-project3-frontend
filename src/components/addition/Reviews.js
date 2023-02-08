import React, { Fragment, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from '../context/movies'
import Rating from './Rating'

const Reviews = () => {

  const { id } = useParams()
  const { movies } = useContext(MoviesContext)
  const selected = movies.filter(movie => movie.id === parseInt(id))[0]
  // console.log('Movies:', movies)

  const [reviews, setReviews] = useState(selected.reviews) 

  // useEffect(() => {
  //   fetch(`http://localhost:3001/movies/${id}/reviews`)
  //   .then(res => res.json())
  //   .then(data => {
  //     // if(data.length > 0) {
  //     //   setReviews([...reviews, data])
  //     // }    
  //     setReviews([...reviews, data.reviews])  
  //     console.log('Fetched DATA:', data)
  //   })
  // }, [setReviews])
  
  return (
    <Fragment>
      < Rating 
        movie={selected}
        reviews={reviews} 
        setReviews={setReviews}
      />
    </Fragment>
   
  )
}

export default Reviews