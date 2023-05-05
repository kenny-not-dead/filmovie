import { Movie } from '../../components/movie/Movie'
import { MovieBreadCrumbs } from '../../components/movie/moviebreadcrumbs/MovieBreadCrumbs'

import classes from './MoviePage.module.scss'
export const MoviePage = () => {
  return (
    <div className={classes.container}>
      <MovieBreadCrumbs />
      <Movie />
    </div>
  )
}
