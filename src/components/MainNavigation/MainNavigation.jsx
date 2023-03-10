import { FiMenu, FiSearch } from "react-icons/fi";

import logo from "../../assets/logo.png";
import Search from "../Search/Search";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.header}>
      <div>
        <FiMenu className={classes.hamburger} />
        <a href="/">
          <div>
            <img src={logo} alt="manga search" className={classes.logo} />
          </div>
        </a>
        <Search />
      </div>
    </div>
  );
};

export default MainNavigation;
