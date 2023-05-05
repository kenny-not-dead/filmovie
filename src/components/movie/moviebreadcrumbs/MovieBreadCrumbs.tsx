import { Link } from 'react-router-dom'
import { movieData } from '../movieData'
import classes from './MovieBreadCrumbs.module.scss'

export const MovieBreadCrumbs = () => {
  return (
    <div className={classes.movieBreadCrumbsContainer}>
      <Link to="/" className={classes.movieBreadCrumbsLinkType}>
        {movieData.type === 'movie' ? 'Фильмы' : 'Мультфильмы'}
      </Link>
      <Link
        to={`/${movieData.type}/${movieData.genre[0]}`}
        className={classes.movieBreadCrumbsLink}
      >
        {movieData.genre[0]}
      </Link>
    </div>
  )
}
