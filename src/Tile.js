import React from 'react';

const Tile = (props) => {
  return (
    <div className='tile' aria-label={props.title + ' tile'}>
      <img src={props.imagePath} alt={props.title}></img>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {/* <img>{props.image}</img> */}
    </div>
  );
};

export default Tile;
