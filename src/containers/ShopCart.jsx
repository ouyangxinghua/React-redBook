import { connect } from 'react-redux';
import ShopCart from '../components/shopCart/shopCart';
import { hidetarbar } from '../redux/action'
 
const mapStateToProps = (state) => {
  return {
    showTarbar: state.showTarbar,
  }
}
const mapDispatchToProps = (disptch) => {
  return {
    hideTabbar: (status) => {
      disptch(hidetarbar(status));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);