import React from 'react';
import { connect } from 'react-redux';
import { LoadPrices } from '../actions/price-actions';

const Prices = ({ prices = [] }) => {
  return null;
};

const mapDispatchToProps = { LoadPrices };

export default connect(null, mapDispatchToProps)(Prices);
