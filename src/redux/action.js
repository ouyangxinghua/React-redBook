function hidetarbar(status){
  return {
    type: "HIDE_TABBAR", status
  }
}
function addCart(data){
  return {
    type: "ADD_CART", data
  }
}



export {
  hidetarbar,
  addCart
}