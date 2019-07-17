import { connect } from 'react-redux';
import searchBox from '../common/searchBox/searchBox';
import { hidetarbar } from '../redux/action'
 
const mapDispatchToProps = (disptch) => {
  return {
    hideTabbar: (status) => {
      disptch(hidetarbar(status));
    }
  }
}
export default connect(null, mapDispatchToProps)(searchBox);