import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Jude Musyoki Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
