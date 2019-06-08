/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import styles from "./styles";
import notFunnyImage from "../../images/notFunny.png";
import funnyImage from "../../images/funny.jpg";
import { JokeContext } from "../JokeContext";

const Joke = () => {
  return (
    <JokeContext.Consumer>
      {({ joke, loading, fetchNewJoke }) => (
        <div css={styles}>
          <div className="newJokeBtn">
            <button onClick={fetchNewJoke}>Fetch it you coward!</button>
          </div>
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
        </div>
      )}
    </JokeContext.Consumer>
  );
};

export default Joke;
