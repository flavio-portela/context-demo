import React from "react";

export const JokeContext = React.createContext(null);

export const JokeProvider = props => {
    const [joke, setJoke] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const fetchNewJoke = async () => {
      setLoading(true);
      const response = await fetch(
        'https://api.chucknorris.io/jokes/random'
      );
      const joke = await response.json();
      setJoke(joke.value);
      setLoading(false);
    };

  return (
    <JokeContext.Provider value={{
      joke,
      loading,
      fetchNewJoke
    }}>
      {props.children}
    </JokeContext.Provider>
  );
};
