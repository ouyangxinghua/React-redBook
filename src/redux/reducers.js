import { combineReducers } from 'redux'

const initialState = {
  showTarbar: true,
  shopCarts: []
}

function showTarbar(showTarbar = initialState.showTarbar, action) {
  switch (action.type) {
    case "HIDE_TABBAR":
      return action.status
    default:
      return showTarbar
  }
}
function shopCarts(shopCarts = initialState.shopCarts, action) {
  switch (action.type) {
    case "ADD_CART":
      return [
        action.data,
        ...shopCarts
      ]
    default:
      return shopCarts
  }
}


export default combineReducers({
  showTarbar,
  shopCarts
})