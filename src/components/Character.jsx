const Character = ({ character }) => {
    return (
      <div className="character-card text-center p-3 mb-5">
        <h3>{character.name}</h3>
        <img className="img-fluid rounded-pill mb-3" src={character.image} alt="character image" />
        <p><strong>Status:</strong> {character.status}</p>
        <p><strong>Species:</strong> {character.species}</p>
        <p><strong>Gender:</strong> {character.gender}</p>
        <p><strong>Origin:</strong> {character.origin.name}</p>
      </div>
    );
  }
  
  export default Character;