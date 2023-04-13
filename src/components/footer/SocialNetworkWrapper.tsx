
import ButtonApp from '../UI/button/ButtonApp';
import Socialnetworkicons from './Socialnetworkicons';
import apple from './../../static/svgs/apple.png'
import google from './../../static/svgs/google.png'
import tv from './../../static/svgs/tv.png'
import classes from './SocialNetworkWrapper.module.scss'

export default function SocialNetworkWrapper() {
  return (
    <div className={classes.wrapper}>
      <ButtonApp logo = {apple} p1 = 'load' p2 ='appstore' href='https://apps.apple.com/RU/app/id455705533?mt=8' />
      <ButtonApp logo = {google} p1 = 'available' p2 ='google' href='https://play.google.com/store/apps/details?id=ru.ivi.client&referrer=af_tranid%3DaJ8H0YNzTdreqBiZAiGpbA%26shortlink%3DdevicesAndroid%26c%3DdevicesAndroid%26pid%3DWebsite+ivi%26source_caller%3Dui&pli=1' />
      <ButtonApp logo = {tv} p1 = 'watch' p2 ='smart' href='https://www.ivi.ru/pages/tvsmart/' />
      <Socialnetworkicons/>
    </div>
  )
}
