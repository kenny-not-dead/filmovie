import React from 'react'
import SocialNetwork from '../UI/socialnetwork.tsx/SocialNetwork'
import vk from './../img/icons/SocialNetwork/vk.svg'
import ok from './../img/icons/SocialNetwork/odnoklassniki.svg'
import twit from './../img/icons/SocialNetwork/twitter.svg'
import viber from './../img/icons/SocialNetwork/viber.svg'
import linkedin from './../img/icons/SocialNetwork/linkedin.svg'
import telegram from './../img/icons/SocialNetwork/telegram.svg'
import classes from './Socialnetworkicons.module.css'


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
