import { useState, useEffect } from 'react'
import { MovieActorCreator } from './movieactorcreator/MovieActorCreator'
import { MovieActorsCreatorsModal } from './movieactorscreatorsmodal/MovieActorsCreatorsModal'
import { movieData } from '../movieData'
import classes from './MovieActorsCreators.module.scss'

export const MovieActorsCreators = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [actorsCount, setActorsCount] = useState(9)
  const [sGap, setSGap] = useState(25)

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    if (width <= 480 && width >= 300) {
    } else if (width <= 724 && width >= 600) {
      setActorsCount(3)
    } else if (width <= 837 && width >= 725) {
      setActorsCount(4)
    } else if (width <= 947 && width >= 838) {
      setActorsCount(5)
    } else if (width <= 1059 && width >= 948) {
      setActorsCount(6)
    } else if (width <= 1160 && width >= 1060) {
      setActorsCount(7)
    } else if (width <= 1280 && width >= 1160) {
      setActorsCount(8)
    } else {
      //setSCount(7)
    }
    console.log(width)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [width])

  return (
    <div className={classes.movieActorsCreatorsContainer}>
      <MovieActorCreator
        id="Режиссер"
        src={movieData.director.photo}
        name={movieData.director.name}
        alt={movieData.director.name}
      />
      {movieData.actors.slice(0, actorsCount).map((el) => (
        <MovieActorCreator
          key={el.id}
          src={el.photo}
          alt={el.name}
          name={el.name}
        />
      ))}
      <MovieActorsCreatorsModal />
    </div>
  )
}
