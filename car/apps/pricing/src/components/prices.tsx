import React, { useEffect } from 'react';

const Prices = ({ prices = [], loadPrices }) => {
  useEffect(() => {
    loadPrices();
  }, [loadPrices]);

  return (
    <section>
      {prices &&
        prices.map(price => <h3 key={price.id}>{price.drive_Away_Price}</h3>)}
    </section>
  );
};

export default Prices;
