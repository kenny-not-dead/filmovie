import SocialNetwork from '../UI/socialnetwork/SocialNetwork'
import vk from '../../static/svgs/vk.svg';
import ok from '../../static/svgs/odnoklassniki.svg';
import twit from '../../static/svgs/twitter.svg';
import viber from '../../static/svgs/viber.svg';
import linkedin from '../../static/svgs/linkedin.svg';
import telegram from '../../static/svgs/telegram.svg';
import classes from './Socialnetworkicons.module.scss'


export default function Socialnetworkicons() {
  return (
    <div className={classes.wrapper}>
      <SocialNetwork icon = {vk} alt = 'VK' href = "https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"/>
      <SocialNetwork icon = {ok} alt = 'OK' href = "https://ok.ru/ivi.ru"/>
      <SocialNetwork icon = {twit} alt = 'twitter' href = "https://twitter.com/ivi_ru"/>
      <SocialNetwork icon = {viber} alt = 'viber' href = "https://vb.me/a0544c"/>
      <SocialNetwork icon = {linkedin} alt = 'linkedin' href = "https://www.linkedin.com/company/2543415/"/>
      <SocialNetwork icon = {telegram} alt = 'telegram' href = "https://t.me/official_iviru"/>
    </div>
  )
}
