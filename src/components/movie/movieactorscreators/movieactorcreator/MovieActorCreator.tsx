import { movieData } from '../../movieData'
import classes from './MovieActorCreator.module.scss'

export interface MovieActorCreatorProps {
  id?: string
  src?: string
  alt?: string
  name?: string
  link?: string
}

export const MovieActorCreator = ({
  id,
  src,
  alt,
  name,
  link,
}: MovieActorCreatorProps) => {
  /*return (
    <div className={classes.movieActorCreatorContainer}>
      <Link className={classes.linkContainer} to={link || '/'}>
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
  )*/
}
