import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { Movie } from '../../components/movie/Movie'
import { Poster } from '../../components/poster/Poster'
import { Title } from '../../components/title/Title'
import { MovieBreadCrumbs } from '../../components/movie/moviebreadcrumbs/MovieBreadCrumbs'

import classes from './MoviePage.module.scss'
import '../MainPage/buttons.scss'
import { movieData } from '../../components/movie/movieData'

const posters_s = [
  {
    title: 'Губка боб',
    url: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
    score: '7,9',
    info: '1999-2021, США, Фентези',
    seasons: '13 сезонов',
  },
  {
    title: 'Титаник',
    url: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85',
    score: '8,6',
    info: '2012, Россия, Документальные',
    seasons: '1 сезон',
  },
  {
    title: 'Друзья',
    url: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85',
    score: '9,1',
    info: '1994-2004, США, Комедийные',
    seasons: '10 сезонов',
  },
  {
    title: 'Губка боб',
    url: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
    score: '7,9',
    info: '1999-2021, США, Фентези',
    seasons: '13 сезонов',
  },
  {
    title: 'Титаник',
    url: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85',
    score: '8,6',
    info: '2012, Россия, Документальные',
    seasons: '1 сезон',
  },
  {
    title: 'Друзья',
    url: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85',
    score: '9,1',
    info: '1994-2004, США, Комедийные',
    seasons: '10 сезонов',
  },
  {
    title: 'Титаник',
    url: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85',
    score: '8,6',
    info: '2012, Россия, Документальные',
    seasons: '1 сезон',
  },
  {
    title: 'Друзья',
    url: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85',
    score: '9,1',
    info: '1994-2004, США, Комедийные',
    seasons: '10 сезонов',
  },
  {
    title: 'Титаник',
    url: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85',
    score: '8,6',
    info: '2012, Россия, Документальные',
    seasons: '1 сезон',
  },
  {
    title: 'Друзья',
    url: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85',
    score: '9,1',
    info: '1994-2004, США, Комедийные',
    seasons: '10 сезонов',
  },
]

export const MoviePage = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [sCount, setSCount] = useState(7)

  const [sGap, setSGap] = useState(25)

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    if (width <= 480 && width >= 300) {
      setSCount(3)

      setSGap(27)
    } else if (width <= 640 && width >= 481) {
      setSCount(4)

      setSGap(25)
    } else if (width <= 768 && width >= 641) {
      setSCount(5)

      setSGap(15)
    } else if (width <= 1280 && width >= 768) {
      setSCount(5)

      setSGap(20)
    } else {
      setSCount(7)

      setSGap(20)
    }
    console.log(width)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [width])

  return (
    <div className={classes.container}>
      <MovieBreadCrumbs showHomeLink={false} showMovieName={false} />
      <Movie />
      <div className={classes.slider__block}>
        <Title
          top={false}
          arrow={false}
          title={`С фильмом «${movieData.name}» смотрят`}
        />
        <Swiper
          slidesPerView={sCount}
          spaceBetween={sGap}
          navigation={true}
          modules={[Navigation]}
          style={{ padding: '20px 10px 30px 10px', position: 'initial' }}
        >
          {posters_s.map((poster, index) => {
            return (
              <SwiperSlide>
                <Poster
                  size="s"
                  title={poster.title}
                  url={poster.url}
                  score={poster.score}
                  info={poster.info}
                  seasons={poster.seasons}
                  key={index}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <MovieBreadCrumbs showHomeLink={true} showMovieName={true} />
    </div>
  )
}
