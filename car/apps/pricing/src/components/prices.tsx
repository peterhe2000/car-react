import React from 'react';

const Prices = ({ prices = [], loadPrices }) => {
  const getPrices = () => {
    loadPrices();
  };

  return (
    <section>
      {prices &&
        prices.map(price => <h3 key={price.id}>{price.drive_Away_Price}</h3>)}
      <button onClick={getPrices}>Click me</button>
    </section>
  );
};

export default Prices;
