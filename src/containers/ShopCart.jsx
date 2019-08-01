import { connect } from 'react-redux';
import ShopCart from '../components/shopCart/shopCart';
import { hidetarbar } from '../redux/action'
 
const mapStateToProps = (state) => {
  return {
    showTarbar: state.showTarbar,
    // shopCarts: state.shopCarts
  }
}
const mapDispatchToProps = (disptch) => {
  return {
    hideTabbar: (status) => {
      disptch(hidetarbar(status));
    }
    // cancle: (data) => {
    //   disptch(cancleCart(data))
    // },
    // addShopNum: (data) => {
    //   disptch(addShop(data))
    // },
    // reduceShopNum: (data) => {
    //   disptch(reduceShop(data))
    // },
    // select: (data) => {
    //   disptch(Select(data))
    // },
    // allselect: (data) => {
    //   disptch(allSelect(data))
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);