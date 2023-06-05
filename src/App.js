import React, { useEffect, useState } from "react";
import emojiData from "./emojiData.json";
import "./index.css";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div>
      <h1 id="tytul">♟👽Wyszukiwarka emotek😎♟</h1>
      <input
        type="text"
        placeholder="wyszukaj emotke🤬"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {data.map((emoji) => (
        <div id="box">
          <h2 key={emoji.title}>
            {emoji.symbol}
            {emoji.title}
            {emoji.symbol}
          </h2>
        </div>
      ))}
      <footer>Jakub Konkol 4P &copy;2023</footer>
    </div>
  );
}

export default App;
