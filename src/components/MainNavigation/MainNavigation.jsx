import { useEffect, useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (props.isSearch) setIsSearchPage(props.isSearch);
  }, [props.isSearch]);

  const clickMenuHandler = () => {
    setIsClicked((prev) => !prev);
  };
  console.log(isClicked);

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes["chumberger-wrapper"]}>
          <div
            onClick={clickMenuHandler}
            className={
              !isClicked
                ? `${classes.chumberger}`
                : `${classes.chumberger} ${classes["clicked"]}`
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/*START MENU MOBILE */}
        <div
          className={
            isClicked
              ? `${classes["menu-container"]}`
              : `${classes["menu-container"]} ${classes["hide-menu"]}`
          }
        >
          <div className={classes["menu-inner-container"]}>
            <div className={classes["menu-top"]}></div>
            <div className={classes["menu-header"]}>
              <ul className={classes["nav-list"]}>
                <li className={classes["nav-item"]}>
                  <NavLink className={classes["nav-link"]}>Top Manga</NavLink>
                </li>
                <li className={classes["nav-item"]}>
                  <NavLink className={classes["nav-link"]}>
                    Recommendations
                  </NavLink>
                </li>
                <li className={classes["nav-item"]}>
                  <NavLink className={classes["nav-link"]}>About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* END MENU MOBILE */}

        <Link to="/" className={classes["logo-wrapper"]}>
          <div>
            <img src={logo} alt="manga search" className={classes.logo} />
          </div>
        </Link>
        <div className={classes.large}></div>
        <ul className={`${classes.large} ${classes["nav-list"]} `}>
          <li className={classes["nav-item"]}>
            <NavLink className={classes["nav-link"]}>Top Manga</NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes["nav-link"]}>Recommendations</NavLink>
          </li>
          <li className={classes["nav-item"]}>
            <NavLink className={classes["nav-link"]}>About</NavLink>
          </li>
        </ul>
        <div
          className={
            !isSearchPage
              ? classes["search-wrapper"]
              : `${classes["search-wrapper"]} ${classes["search-btn-hide"]}`
          }
        >
          <input
            placeholder="Search by title"
            className={classes["search-input"]}
          />
          <Link to="/search" className={classes["search-inner-container"]}>
            <FiSearch className={classes.search} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
