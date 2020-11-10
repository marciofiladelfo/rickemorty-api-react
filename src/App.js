import { useState, useEffect } from "react";
import CharacterList from "./components/character-list";

import "./App.css";

const App = () => {
  const [characterAPI, setCharacterAPI] = useState({
    characterList: [],
    nextUrl: "https://rickandmortyapi.com/api/character/",
  });

  const { characterList, nextUrl } = characterAPI;
  const getCharacters = () => {
    if (nextUrl) {
      fetch(nextUrl)
        .then((res) => res.json())
        .then((res) => {
          setCharacterAPI({
            characterList: [...characterList, ...res.results],
            nextUrl: res.info.next,
          });
        });
    }
  };
  useEffect(getCharacters, [nextUrl, characterList]);

  return (
    <div className="App App-header">
      <CharacterList list={characterList} />
    </div>
  );
};

export default App;
