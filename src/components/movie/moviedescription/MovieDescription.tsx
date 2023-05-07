import { Link } from 'react-router-dom'
import { movieData } from '../movieData'
import sound from '../../../static/svgs/sound.svg'
import { TextShow } from '../../UI/text/Textshow'
import { MovieRatingActors } from './movieratingactors/MovieRatingActors'
import classes from './MovieDescription.module.scss'
export const MovieDescription = () => {
  return (
    <div className={classes.descriptionContainer}>
      <h1 className={classes.movieTitle}>{movieData.name}</h1>
      <div className={classes.movieParamsContainer}>
        <Link to="/" className={classes.movieParamsLink}>
          {movieData.year}
        </Link>
        <span className={classes.movieParams}> {movieData.movieLength}</span>
        <span className={classes.movieParams}> {movieData.ratingMPAA}</span>
        <br />
        <Link className={classes.movieParamsLink} to="/">
          {movieData.country}
        </Link>
        <ul className={classes.movieParamsList}>
          <li>
            <Link
              to={`/movies/${movieData.genre[0]}`}
              className={classes.movieParamsLink}
            >
              {movieData.genre[0]}
            </Link>
          </li>
          <li>
            <Link to="/movies" className={classes.movieParamsLink}>
              {movieData.genre[1]}
            </Link>
          </li>
          <li>
            <Link to="/movies" className={classes.movieParamsLink}>
              {movieData.genre[2]}
            </Link>
          </li>
        </ul>
        <div className={classes.movieQualityContainer}>
          <span className={classes.movieQuality}>FullHD</span>
          <div className={classes.iconContainer}>
            <img
              className={classes.movieSoundIcon}
              src={sound}
              alt="sound icon"
            />
          </div>
          <span className={classes.movieLanguage}>Рус</span>
        </div>
      </div>
      <MovieRatingActors />
      <TextShow
        number="500"
        open="Детали о фильме"
        close="Свернуть детали"
        text={movieData.description}
      />
    </div>
  )
}
