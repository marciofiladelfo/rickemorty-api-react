import { useState, useEffect } from "react";
import CharacterList from "./components/character-list";
import "./App.css";

const App = () => {
  const [characterList, addCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        addCharacterList(res.results);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CharacterList list={characterList} />
      </header>
    </div>
  );
};

export default App;
