import React from 'react';

const Prices = ({ prices = [], loadPrices }) => {
  const getPrices = () => {
    loadPrices();
  };

  return (
    <pre>
      <code>{JSON.stringify(prices, [], 4)}</code>
      <button onClick={getPrices}>Click me</button>
    </pre>
  );
};

export default Prices;
