import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import "./App.css";

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

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
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <Cards pokemonData={pokemonData} />;
}
