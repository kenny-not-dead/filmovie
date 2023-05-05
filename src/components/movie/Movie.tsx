import { VideoPlayer } from './videoplayer/VideoPlayer'
import { MovieDescription } from './moviedescription/MovieDescription'
import { VideoPlayerButtons } from './videoplayer/VideoPlayerButtons'
import classes from './Movie.module.scss'
import { movieData } from './movieData'

export const Movie = () => {
  return (
    <div className={classes.movieContainer}>
      <div className={classes.playerContainer}>
        <VideoPlayer url={movieData.url} />
        <VideoPlayerButtons />
      </div>
      <MovieDescription />
    </div>
  )
}
