export default function Cards({ pokemonData }) {
  console.log(pokemonData);
  function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  shuffle(pokemonData);
  return (
    <div className="pokemonGrid">
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id} className="pokemonCard">
          <img src={pokemon.image} alt={pokemon.name}></img>
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
}
