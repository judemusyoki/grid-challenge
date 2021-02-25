import React from 'react';

const Tile = (props) => {
  return (
    <div className='tile' aria-label={props.title + ' tile'}>
      <img src={props.imagePath} alt={props.title} title={props.title}></img>
      <h1 title={props.title}>{props.title}</h1>
      <p title={props.description}>{props.description}</p>
    </div>
  );
};

export default Tile;
