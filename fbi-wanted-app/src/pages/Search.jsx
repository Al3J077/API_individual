import { useEffect, useState } from "react";
import { getWanted } from "../services/fbi";

export default function Search() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [office, setOffice] = useState("");

  useEffect(() => {
    getWanted(office ? { field_offices: office } : {}).then((data) => setItems(data.items));
  }, [office]);

  const filtered = items.filter(
    (i) =>
      i.title?.toLowerCase().includes(query.toLowerCase()) ||
      i.description?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Buscar</h2>
      <input
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={office} onChange={(e) => setOffice(e.target.value)}>
        <option value="">Todas las oficinas</option>
        <option value="miami">Miami</option>
        <option value="newyork">New York</option>
        <option value="losangeles">Los Angeles</option>
      </select>
      <ul>
        {filtered.map((i) => (
          <li key={i.uid}>{i.title}</li>
        ))}
      </ul>
    </div>
  );
}