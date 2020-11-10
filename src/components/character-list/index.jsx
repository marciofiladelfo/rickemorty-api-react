import Character from "../character";

const CharacterList = ({ list }) => {
  return list.map(({ name, image }, index) => (
    <Character key={index} name={name} image={image} />
  ));
};

export default CharacterList;
