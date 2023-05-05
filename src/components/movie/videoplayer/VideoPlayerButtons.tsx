import { Button } from '../../UI/button/Button'
import classes from './VideoPlayerButtons.module.scss'
import bookmark from '../../../static/svgs/bookmark.svg'
import share from '../../../static/svgs/share.svg'

export const VideoPlayerButtons = () => {
  return (
    <div className={classes.videoPlayerButtonsContainer}>
      <Button className="play__btn" id="Трейлер" />
      <Button className="bookmark__btn" src={bookmark} />
      <Button className="share__btn" src={share} />
    </div>
  )
}
