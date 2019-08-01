import { combineReducers } from 'redux'

const initialState = {
  showTarbar: true,
}

function showTarbar(showTarbar = initialState.showTarbar, action) {
  switch (action.type) {
    case "HIDE_TABBAR":
      return action.status
    default:
      return showTarbar
  }
}


export default combineReducers({
  showTarbar
})