import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Tile from './Tile';

import tiles from './tiles';

const App = () => {
  // const [tiles, setTiles] = useState(tiles);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFiltered(
      tiles.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      <Header />
      {/* {notes.map(createNote)} */}
      <div className='create-note'>
        <input
          type='text'
          label='Search grid'
          onChange={handleChange}
          placeholder='Search..'
        />
      </div>

      {filtered.map((tile, idx) => (
        <Tile
          key={idx}
          title={tile.title}
          description={tile.description}
          imagePath={tile.imagePath}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
