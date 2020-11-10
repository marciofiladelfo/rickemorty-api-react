import "./character.css";

const Character = ({ name, image }) => {
  return (
    <div className="Character">
      <img src={image} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default Character;
