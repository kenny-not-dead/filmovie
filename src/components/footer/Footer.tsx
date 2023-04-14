import classes from './Footer.module.scss';
import FooterNav from './FooterNav';
import Info from './Info';
import SocialNetworkWrapper from './SocialNetworkWrapper';

export function Footer() {
  return (
    <footer className={classes.container}>
      <FooterNav/>
      <SocialNetworkWrapper/>
      <Info/>
    </footer>
  )
}
