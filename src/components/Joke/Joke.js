/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import styles from "./styles";
import Categories from "../Categories";
import notFunnyImage from "../../images/notFunny.png";
import funnyImage from "../../images/funny.jpg";
import WithJoke from '../WithJoke';

const Joke = () => {
  const [ category, setCategory ] = React.useState(null)
  return (
    <div css={styles}>
      <WithJoke
        render={({ loading, joke, fetchNewJoke }) => (
          <>
            <div className="newJokeBtn">
              <button onClick={() => fetchNewJoke(category)}>Fetch it you coward!</button>
            </div>
            <Categories category={category} setCategory={setCategory} />
            <div className="joke">
              {loading ? (
                <span role="img" aria-label="waiting">
                  ⏳
                </span>
              ) : (
                joke
              )}
            </div>
            <div className="image">
              <img alt="chuck" src={joke ? funnyImage : notFunnyImage} />
            </div>
          </>
        )}
      />
    </div>
  );
};

export default Joke;
