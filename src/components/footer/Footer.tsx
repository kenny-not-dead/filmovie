import classes from './Footer.module.scss';
import FooterNav from './FooterNav';
import Socialnetworkicons from './Socialnetworkicons';

export default function Footer() {
  return (
    <footer className={classes.container}>
      <FooterNav/>
      <Socialnetworkicons/>
    </footer>
  )
}
