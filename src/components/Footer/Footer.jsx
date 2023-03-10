import logo from "../../assets/logo.png";
import classes from "./Footer.module.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div className={classes.container}>
      <div className={classes["inner-container"]}>
        <img src={logo} alt="logo" className={classes.logo} />
        <p className={classes.copyright}>
          ©︎{currentYear} Manga Search.
          <span>All rigths reserved.</span>
        </p>
      </div>
    </div>
  );
};
export default Footer;
