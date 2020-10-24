import { connect } from 'react-redux';
import { loadPrices } from '../actions/price-actions';
import Prices from '../components/prices';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { prices: state.prices.prices.prices };
};

const mapDispatchToProps = { loadPrices };

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
