import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        onClick={() => props.setPage(props.page - 1)}
        className="btn btn-primary btn-sm"
        disabled={props.page === 1}
      >
        Previous Page
      </button>
      <p className="mb-0">Page: {props.page}</p>
      <button
        onClick={() => props.setPage(props.page + 1)}
        className="btn btn-primary btn-sm"
      >
        Next Page
      </button>
    </header>
  );
}

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character?page=" + page);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row justify-content-center">
          {characters.map((character) => (
            <div className="col-md-4 col-sm-6 col-12 d-flex align-items-stretch justify-content-center" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;