export default function Cards({ pokemonData, handleClick }) {
  console.log(pokemonData);
  if (!pokemonData || pokemonData.length === 0) return <div>Loading...</div>;
  return (
    <div>
      <div className="pokemonGrid">
        {pokemonData.map((pokemon) => (
          <div
            key={pokemon.id}
            className="pokemonCard"
            onClick={() => handleClick(pokemon.id)}
          >
            <img src={pokemon.image} alt={pokemon.name}></img>
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
