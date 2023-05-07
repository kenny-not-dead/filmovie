import { MovieRatingActor } from './movieratingactor/MovieRatingActor'
import { movieData } from '../../movieData'
import classes from './MovieRatingActors.module.scss'

export const MovieRatingActors = () => {
  return (
    <div className={classes.movieRatingActorsContainer}>
      <MovieRatingActor rating={movieData.rating} />
      {movieData.actors.slice(0, 4).map((el) => (
        <MovieRatingActor
          key={el.id}
          src={el.photo}
          alt={el.name}
          name={el.name}
        />
      ))}
    </div>
  )
}
