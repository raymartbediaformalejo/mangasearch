import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import classes from "./Search.module.css";

const Search = () => {
  return (
    <>
      <form className={classes["search-container"]}>
        <Link to="" className={classes["search-inner-container"]}>
          <FiSearch className={classes.search} />
        </Link>
      </form>
    </>
  );
};

export default Search;
