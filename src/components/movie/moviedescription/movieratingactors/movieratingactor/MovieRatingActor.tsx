import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import classes from './MovieRatingActor.module.scss'

export interface MovieRatingActorProps {
  id?: string
  rating?: string
  src?: string
  alt?: string
  name?: string
  link?: string
}

export const MovieRatingActor = ({
  id,
  rating,
  src,
  alt,
  name,
  link,
}: MovieRatingActorProps) => {
  return (
    <div className={classes.movieRatingActorContainer}>
      <Link to={link || '/'}>
        <div className={classes.movieRatingImgContainer}>
          {rating ? (
            <p className={classes.movieRating}>{rating}</p>
          ) : (
            <img className={classes.movieActorImg} src={src} alt={alt} />
          )}
        </div>
        <div className={classes.movieRatingActorName}>
          {rating ? (
            <p className={classes.movieRatingActorName}>
              <FormattedMessage id="Рейтинг Кинопоиска" />
            </p>
          ) : (
            <p className={classes.movieRatingActorName}>{name}</p>
          )}
        </div>
      </Link>
    </div>
  )
}
