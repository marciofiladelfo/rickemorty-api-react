import "./character.css";

const Character = ({ id, name, image, species, status }) => {
  return (
    <div className="character">
      <img src={image} alt={name} />
      <div>
        {id} - {name}
      </div>
      <div>
        {species} - {status}
      </div>
    </div>
  );
};

export default Character;
