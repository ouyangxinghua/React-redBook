import { connect } from 'react-redux';
import peopleDetail from '../components/peopleDetail/peopleDetail';
import { hidetarbar } from '../redux/action'
 
const mapDispatchToProps = (disptch) => {
  return {
    hideTabbar: (status) => {
      disptch(hidetarbar(status));
    }
  }
}
export default connect(null, mapDispatchToProps)(peopleDetail);