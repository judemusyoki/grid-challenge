import React from 'react';
import Pagination from './Pagination';

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Pagination
        tilesPerPage={props.tilesPerPage}
        totalTiles={props.totalTiles}
        paginate={props.paginate}
      />
      <p>Jude Musyoki Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
