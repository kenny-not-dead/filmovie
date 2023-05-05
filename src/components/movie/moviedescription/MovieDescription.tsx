import { Link } from 'react-router-dom'
import { movieData } from '../movieData'
import classes from './MovieDescription.module.scss'

export const MovieDescription = () => {
  return (
    <div className={classes.descriptionContainer}>
      <h1 className={classes.movieTitle}>{movieData.name}</h1>
      <div className={classes.movieParamsContainer}>
        <a className={classes.movieParamsLink} href="/">
          {movieData.year}
        </a>
        <span className={classes.movieParams}> {movieData.movieLength}</span>
        <span className={classes.movieParams}> {movieData.ratingMPAA}</span>
        <br />
        <a className={classes.movieParamsLink} href="/">
          {movieData.country}
        </a>
        <ul className={classes.movieParamsList}>
          <li>
            <Link
            {/*пока не решил как реализовать*/}
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
      </div>
    </div>
  )
}
