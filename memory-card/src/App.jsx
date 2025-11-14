import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import "./App.css";
import Scores from "./Components/Scores";

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clickedCards, setClickedCards] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const pokemonList = response.data.results;

        //second API call to fetch pokemon images
        const pokemonDetails = await Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );

        //extract data from pokemon we need
        const pokemonWithImages = pokemonDetails.map((res) => ({
          name: res.data.name,
          image: res.data.sprites.front_default,
          id: res.data.id,
        }));

        setPokemonData(pokemonWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  function shuffle(array) {
    const arr = [...array];
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }
  function handleClick(id) {
    if (clickedCards.includes(id)) {
      setUserScore(0);
      setClickedCards([]);
    } else {
      setClickedCards((prev) => [...prev, id]);
      console.log("clicked cards:", [...clickedCards, id]);
      setUserScore((prev) => prev + 1);
      setHighestScore((prev) => Math.max(prev, userScore + 1));
    }

    setPokemonData((prev) => shuffle(prev));
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Cards pokemonData={pokemonData} handleClick={handleClick} />
      <Scores userScore={userScore} highestScore={highestScore} />;
    </>
  );
}

//add event listener to all pokemon cards
//shuffle the pokemon cards when user clicks on  a pokemon
//keep track of the pokemon cards already clicked
//add a counter for every unique pokemon clicked
//reset the counter if pokemon card was previously clicked
