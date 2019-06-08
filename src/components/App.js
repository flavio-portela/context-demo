import React from "react";
import Joke from "./Joke";
import { JokeProvider, JokeContext } from "./JokeContext";
function App() {
  return (
    <div>
      <JokeProvider>
        <Joke />
        <JokeContext.Consumer>{({ joke }) => joke}</JokeContext.Consumer>
      </JokeProvider>
    </div>
  );
}

export default App;
