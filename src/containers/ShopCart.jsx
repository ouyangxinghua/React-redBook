import { connect } from 'react-redux';
import ShopCart from '../components/shopCart/shopCart';
import { hidetarbar,cancleCart,addShop,reduceShop,Select, allSelect } from '../redux/action'
 
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
    },
    cancle: (data) => {
      disptch(cancleCart(data))
    },
    addShopNum: (data) => {
      disptch(addShop(data))
    },
    reduceShopNum: (data) => {
      disptch(reduceShop(data))
    },
    select: (data) => {
      disptch(Select(data))
    },
    allselect: () => {
      disptch(allSelect())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);