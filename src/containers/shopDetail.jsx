import { connect } from 'react-redux';
import ShopDetail from '../components/shopDetail/shopDetail';
import { hidetarbar } from '../redux/action'
 
const mapStateToProps = (state) => {
  return {
    showTarbar: state.showTarbar,
    shopCarts: state.shopCarts
  }
}
const mapDispatchToProps = (disptch) => {
  return {
    hideTabbar: (status) => {
      disptch(hidetarbar(status));
    }
    // addToCart: (data) => {
    //   disptch(addCart(data))
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);