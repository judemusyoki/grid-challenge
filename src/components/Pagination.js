import React from 'react';

const Pagination = ({ tilesPerPage, totalTiles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTiles / tilesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='search-note'>
      <h1 aria-label='Pages'>Pages</h1>
      <ul>
        {pageNumbers.map((number) => (
          <li
            className='pagination'
            key={number}
            aria-label='Page number'
            title={'Page ' + number}
          >
            <a onClick={() => paginate(number)} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
