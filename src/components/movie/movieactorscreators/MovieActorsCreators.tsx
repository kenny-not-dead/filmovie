import { MovieActorCreator } from './movieactorcreator/MovieActorCreator'
import { MovieActorsCreatorsModal } from './movieactorscreatorsmodal/MovieActorsCreatorsModal'
import { movieData } from '../movieData'
import classes from './MovieActorsCreators.module.scss'

export const MovieActorsCreators = () => {
  return (
    <div className={classes.movieActorsCreatorsContainer}>
      <MovieActorCreator
        id="Режиссер"
        src={movieData.director.photo}
        name={movieData.director.name}
        alt={movieData.director.name}
      />
      {movieData.actors.slice(0, 9).map((el) => (
        <MovieActorCreator
          key={el.id}
          src={el.photo}
          alt={el.name}
          name={el.name}
        />
      ))}
      <MovieActorsCreatorsModal />
    </div>
  )
}
