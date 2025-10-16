import { useEffect, useState } from "react";
import { getWanted } from "../services/fbi";

export default function Original() {
  const [randomItem, setRandomItem] = useState(null);

  async function loadRandom() {
    const data = await getWanted();
    const items = data.items;
    const random = items[Math.floor(Math.random() * items.length)];
    setRandomItem(random);
  }

  useEffect(() => {
    loadRandom();
  }, []);

  if (!randomItem) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Buscado al azar</h2>
      {randomItem.images?.[0] && (
        <img src={randomItem.images[0].original} alt={randomItem.title} width="200" />
      )}
      <h3>{randomItem.title}</h3>
      <p>{randomItem.description}</p>
      <button onClick={loadRandom}>Otro al azar</button>
    </div>
  );
}