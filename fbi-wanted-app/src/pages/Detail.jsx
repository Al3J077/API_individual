import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWanted } from "../services/fbi";

export default function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getWanted().then((data) => {
      const found = data.items.find((i) => i.uid === id);
      setItem(found);
    });
  }, [id]);

  if (!item) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{item.title}</h2>
      {item.images?.[0] && <img src={item.images[0].original} alt={item.title} width="300" />}
      <p>{item.description}</p>
      <a href={item.url} target="_blank" rel="noreferrer">Ver en FBI</a>
    </div>
  );
}