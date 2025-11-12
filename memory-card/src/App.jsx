import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Components/Cards";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        setData(response.data.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return <Cards data={data} />;
}
