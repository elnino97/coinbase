import { ReactComponent as CoingateLogo } from "../Assets/coingate.svg";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__div}>
        <a className={classes.navbar__item} href="/">
          <CoingateLogo />
        </a>
        <div className={classes.navbar__item}>
          <a className={classes.navbar__link} href="/">
            Products
          </a>
        </div>
        <div className={classes.navbar__item}>
          <a className={classes.navbar__link} href="/">
            Resources
          </a>
        </div>
        <div className={classes.navbar__item}>
          <a className={classes.navbar__link} href="/">
            Buy Instantly
          </a>
        </div>
      </div>
      <div className={classes.navbar__div}>
        <div className={classes.navbar__item}>
          <a className={classes.navbar__link} href="/">
            Log In
          </a>
        </div>
        <div className={classes.navbar__item + " " + classes.navbar__signup}>
          <a className={classes.navbar__link} href="/">
            Sign Up &gt;
          </a>
        </div>
      </div>
      <div className={classes.hamburger}>
        <div className={classes.hamburger__bar}></div>
        <div className={classes.hamburger__bar}></div>
        <div className={classes.hamburger__bar}></div>
      </div>
    </nav>
  );
};

export default Nav;
