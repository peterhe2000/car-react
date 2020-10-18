import { connect } from 'react-redux';
import { loadPrices } from '../actions/price-actions';
import Prices from '../components/prices';

const mapStateToProps = (state, ownProps) => {
  return { prices: state.prices.prices };
};

const mapDispatchToProps = { loadPrices };

export default connect(mapStateToProps, mapDispatchToProps)(Prices);
