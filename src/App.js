import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Tile from './Tile';
import Pagination from './components/Pagination';

import tiles from './tiles';

const App = () => {
  // const [tiles, setTiles] = useState(tiles);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tilesPerPage, setTilesPerPage] = useState(4);

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

  // const Pagination = ({ tilesPerPage, totalTiles }) => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= Math.ceil(totalTiles / tilesPerPage); i++) {
  //     pageNumbers.push(i);
  //   }

  //   return (
  //     <nav>
  //       <ul>
  //         {pageNumbers.map((number) => (
  //           <li key={number}>
  //             <a href='!#'>{number}</a>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   );
  // };

  return (
    <div>
      <Header />
      {/* {notes.map(createNote)} */}
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
      <Pagination
        tilesPerPage={tilesPerPage}
        totalTiles={totalTiles}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
};

export default App;
