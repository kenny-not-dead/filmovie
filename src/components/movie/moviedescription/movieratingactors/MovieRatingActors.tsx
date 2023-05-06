import { MovieRatingActor } from './movieratingactor/MovieRatingActor'
import { movieData } from '../../movieData'
import classes from './MovieRatingActors.module.scss'

export const MovieRatingActors = () => {
  return (
    <div className={classes.movieRatingActorsContainer}>
      <MovieRatingActor rating={movieData.rating} />
      <MovieRatingActor />
      <MovieRatingActor />
      <MovieRatingActor />
      <MovieRatingActor />
    </div>
  )
}
