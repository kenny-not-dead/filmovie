import { Link } from 'react-router-dom'
import { movieData } from '../movieData'
import classes from './MovieBreadCrumbs.module.scss'

export const MovieBreadCrumbs = ({
  showHomeLink = true,
  showMovieName = true,
}) => {
  const secondLinkClassName = showHomeLink
    ? classes.movieBreadCrumbsLink
    : classes.movieBreadCrumbsLinkType

  return (
    <div className={classes.movieBreadCrumbsContainer}>
      {showHomeLink && (
        <Link to="/" className={classes.movieBreadCrumbsLinkType}>
          Мой кинограмм
        </Link>
      )}
      <Link to="/" className={secondLinkClassName}>
        {movieData.type === 'movie' ? 'Фильмы' : 'Мультфильмы'}
      </Link>
      <Link
        to={`/${movieData.type}/${movieData.genre[0]}`}
        className={classes.movieBreadCrumbsLink}
      >
        {movieData.genre[0]}
      </Link>
      {showMovieName && (
        <span className={classes.movieBreadCrumbsName}>{movieData.name}</span>
      )}
    </div>
  )
}
