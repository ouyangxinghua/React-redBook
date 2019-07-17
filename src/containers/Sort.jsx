import { connect } from 'react-redux';
import Sort from '../components/sort/Sort';
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
export default connect(mapStateToProps, mapDispatchToProps)(Sort);