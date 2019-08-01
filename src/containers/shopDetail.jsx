import { connect } from 'react-redux';
import ShopDetail from '../components/shopDetail/shopDetail';
import { hidetarbar } from '../redux/action'
 
const mapStateToProps = (state) => {
  return {
    showTarbar: state.showTarbar
  }
}
const mapDispatchToProps = (disptch) => {
  return {
    hideTabbar: (status) => {
      disptch(hidetarbar(status));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);