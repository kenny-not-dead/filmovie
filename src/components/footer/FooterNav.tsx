import React from 'react'
import classes from './FooterNav.module.scss'
import { FormattedMessage } from 'react-intl'
import Aitem from './footernavitems/Aitem'
import { NavLink } from 'react-router-dom'
import { Button } from '../UI/button/Button'
import phone from './../../static/svgs/phone.svg'
import mail from './../../static/svgs/mail.svg'
import logo from './../../static/svgs/logo.svg'

export default function FooterNav() {
  let item = [
    {
      href: 'https://corp.ivi.ru/?_gl=1%2Alkzg34%2A_ga%2AMTAyOTM3NDg3NS4xNjc5ODEzNDI3%2A_ga_GETQ4387MJ%2AMTY4MTMyMDA2NC4zLjEuMTY4MTMyOTQzMi41OS4wLjA.',
      id: 'aboutcompani',
    },
    {
      href: 'https://corp.ivi.ru/career/?_gl=1*lkzg34*_ga*MTAyOTM3NDg3NS4xNjc5ODEzNDI3*_ga_GETQ4387MJ*MTY4MTMyMDA2NC4zLjEuMTY4MTMyOTQzMi41OS4wLjA.#career-vacancy-block',
      id: 'vacancy',
    },
    {
      href: 'https://www.ivi.ru/pages/beta/',
      id: 'beta',
    },
    {
      href: 'https://www.ivi.ru/info/partners',
      id: 'partners',
    },
    {
      href: 'https://corp.ivi.ru/advertisers/?_gl=1*k75pa2*_ga*MTAyOTM3NDg3NS4xNjc5ODEzNDI3*_ga_GETQ4387MJ*MTY4MTMyMDA2NC4zLjEuMTY4MTMyOTQ4Ny40LjAuMA..',
      id: 'advertising',
    },
    {
      href: 'https://www.ivi.ru/info/agreement',
      id: 'agreement',
    },
    {
      href: 'https://www.ivi.ru/info/confidential',
      id: 'privacy',
    },
    {
      href: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens',
      id: 'compliance',
    },
  ]

  return (
    <div className={classes.wrapper}>
      <div>
        <h4>
          <FormattedMessage id="aboutus" />
        </h4>
        {item.map((item) => (
          <Aitem item={item} key={item.id} />
        ))}
      </div>
      <div className={classes.nav}>
        <h4>
          <FormattedMessage id="sections" />
        </h4>
        <NavLink to={'/main'}>
          <FormattedMessage id="main" />
        </NavLink>
        <NavLink to={'/catalog'}>
          <FormattedMessage id="films" />
        </NavLink>
      </div>
      <div>
        <h4>
          <FormattedMessage id="support" />
        </h4>
        <p>
          <FormattedMessage id="supportp1" /> <br />{' '}
          <FormattedMessage id="supportp2" />
        </p>
        <div className={classes.btnwrapper}>
          <Button id="message" />
          <div className={classes.minibtnwrapper}>
            <Button src={mail} />
            <Button src={phone} />
          </div>
        </div>
        <a href="https://ask.ivi.ru/?_gl=1*1bzh0p4*_ga*MTAyOTM3NDg3NS4xNjc5ODEzNDI3*_ga_GETQ4387MJ*MTY4MTMyMDA2NC4zLjEuMTY4MTMyOTYwNC41OC4wLjA.">
          ask.ivi.ru
        </a>
        <p>
          <FormattedMessage id="answer" />
        </p>
      </div>
      <a
        href="https://www.ivi.ru/subscribe?redirect_url=%2F"
        className={classes.subscription}
      >
        <img src={logo} alt="" />
        <p>
          <FormattedMessage id="noadvertising" />{' '}
        </p>
      </a>
    </div>
  )
}
