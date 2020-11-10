import Character from "../character";
import { useState } from "react";
import "./list.css";

const CharacterList = ({ list }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="inputs">
        <h3>Digite o nome do personagem Rick and Morty</h3>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          value={inputValue}
        />
        <div>{inputValue}</div>
      </div>
      <div className="filter">
        {inputValue.length > 0 &&
          list
            .filter((e) => e.name.toLowerCase().includes(inputValue))
            .map(({ id, name, image, species, status }, index) => (
              <Character
                key={index}
                id={id}
                name={name}
                image={image}
                species={species}
                status={status}
              />
            ))}
      </div>
    </>
  );
};

export default CharacterList;
