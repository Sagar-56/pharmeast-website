import { connect } from 'react-redux'
import { addToCart } from "../redux/Action/Action";
// import DealsMain from '../Component/deals/DealsMain';
import DealDisplay from '../Component/deals/DealDisplay';

const mapStateToProps = (state) => ({
    data: state.cardItems.cardData
})

const mapDispatchToProps = (dispatch) => ({
    addToCardHandler: (data) => dispatch(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DealDisplay)