import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { Movie } from '../../components/movie/Movie'
import { Poster } from '../../components/poster/Poster'
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
