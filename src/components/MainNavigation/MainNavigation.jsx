import { useEffect, useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [isSearchPage, setIsSearchPage] = useState(false);

  useEffect(() => {
    if (props.isSearch) setIsSearchPage(props.isSearch);
  }, [props.isSearch]);
  return (
    <div className={classes.header}>
      <div>
        <FiMenu className={classes.hamburger} />
        <Link to="/">
          <div>
            <img src={logo} alt="manga search" className={classes.logo} />
          </div>
        </Link>

        <form
          className={
            !isSearchPage
              ? classes["search-container"]
              : `${classes["search-container"]} ${classes["search-btn-show"]}`
          }
        >
          <Link to="/search" className={classes["search-inner-container"]}>
            <FiSearch className={classes.search} />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default MainNavigation;
