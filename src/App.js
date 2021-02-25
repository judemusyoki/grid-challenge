import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tile from './Tile';

import tiles from './tiles';

const App = () => {
  // const [tiles, setTiles] = useState(tiles);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tilesPerPage] = useState(10);

  const indexOfLastPost = currentPage * tilesPerPage;
  const indexOfFirstPost = indexOfLastPost - tilesPerPage;
  const currentTiles = tiles.slice(indexOfFirstPost, indexOfLastPost);
  const totalTiles = tiles.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFiltered(
      currentTiles.filter((tile) =>
        tile.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, currentTiles]);

  return (
    <div>
      <Header />
      <div className='search-tiles'>
        <label htmlFor='Search'></label>
        <input
          id='Search'
          name='Grid search box'
          aria-label='Search'
          type='text'
          label='Search grid'
          onChange={handleChange}
          placeholder='Search..'
          autoFocus
          title='Search bar'
        />
      </div>

      {filtered
        ? filtered.map((tile, idx) => (
            <Tile
              key={idx}
              title={tile.title}
              description={tile.description}
              imagePath={tile.imagePath}
            />
          ))
        : 'No results found'}
      <Footer
        tilesPerPage={tilesPerPage}
        totalTiles={totalTiles}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
