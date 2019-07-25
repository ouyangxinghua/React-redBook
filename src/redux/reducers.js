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
    case "CANCLE_CART":
      return action.data
    case "ADD_SHOP":
      return shopCarts.map((list) => {
        if (action.data === list.id) {
          return { ...list, num: list.num + 1 }
        }
        return list
      })
    case "REDUCE_SHOP":
      return shopCarts.map((list) => {
        if (action.data === list.id) {
          if (list.num === 1) {
            return { ...list, num: 1 }
          } else {
            return { ...list, num: list.num - 1 }
          }
        }
        return list
      })
    case "SELECT":
      return shopCarts.map((list) => {
        if (action.data === list.id) {
          return { ...list, select: !list.select }
        }
        return list
      })
    case "ALLSELECT":
      return shopCarts.map((list) => {
        return { ...list, select: !list.select}
      })
    default:
      return shopCarts
  }
}


export default combineReducers({
  showTarbar,
  shopCarts
})