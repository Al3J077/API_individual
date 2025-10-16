import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWanted } from "../services/fbi";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getWanted().then((data) => setItems(data.items));
  }, []);

  return (
    <div className="home-container">
      <h2>Lista de buscados</h2>
      <div className="cards-grid">
        {items.map((item) => (
          <div className="card" key={item.uid}>
            <h3>{item.title}</h3>
            {item.images?.[0] && (
              <img src={item.images[0].original} alt={item.title} />
            )}
            <p>{item.description?.slice(0, 100)}...</p>
            <Link to={`/detail/${item.uid}`} className="btn">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}