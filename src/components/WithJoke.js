import React from "react";

const WithJoke = ({ render }) => {
  const [joke, setJoke] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchNewJoke = async (category) => {
    setLoading(true);
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${
        category ? category : ""
      }`
    );
    const joke = await response.json();
    setJoke(joke.value);
    setLoading(false);
  };
  return <>{render({ joke, loading, fetchNewJoke })}</>;
};

export default WithJoke;
