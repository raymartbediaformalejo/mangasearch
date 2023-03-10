import { useEffect, useState } from "react";

import { BsFillStarFill } from "react-icons/bs";
import classes from "./MangaItem.module.css";

const MangaItem = (props) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getAuthors = () => {
      return Object.entries(props.authors)
        .map((author) => {
          let authorArr = [];
          if (author[1].name.indexOf(",") > -1) {
            const authorComma = author[1].name.split(",");

            authorArr.push(`${authorComma[1]} ${authorComma[0]}`);
          } else {
            authorArr.push(author[1].name);
          }
          return authorArr;
        })
        .join("/")
        .split();
    };

    setAuthors(getAuthors());
  }, [props.authors]);

  let mangaDesc = props.title;

  if (props.chapters && props.titleSynonyms) {
    mangaDesc = `Chapter ${props.chapters}: ${props.titleSynonyms}`;
  }

  if (props.chapters) {
    mangaDesc = `Chapter ${props.chapters}: ${props.title}`;
  }

  return (
    <>
      <div className={classes.container}>
        <a href="/">
          <div className={classes["inner-container"]}>
            <img className={classes.img} src={props.image} alt="manga" />
            <div className={classes.description}>
              <p className={classes.title}>{props.title}</p>
              <p className={classes.author}>{authors}</p>
            </div>
          </div>
        </a>
        <div className={classes.chapter}>
          <div>
            <p className={classes.rank}>#{props.rank}</p>
            {props.rating && (
              <p className={classes.rating}>
                {props.rating?.toFixed(1)}
                <span>{<BsFillStarFill />}</span>
              </p>
            )}
          </div>
          <p className={classes["total-chapter"]}>{mangaDesc}</p>
        </div>
      </div>
    </>
  );
};

export default MangaItem;
