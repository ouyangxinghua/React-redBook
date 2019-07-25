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
function cancleCart(data){
  return {
    type: "CANCLE_CART", data
  }
}
function addShop(data){
  return {
    type: "ADD_SHOP",data
  }
}
function reduceShop(data){
  return {
    type: "REDUCE_SHOP",data
  }
}
function Select(data){
  return {
    type: "SELECT",data
  }
}
function allSelect(){
  return {
    type: "ALLSELECT"
  }
}



export {
  hidetarbar, //控制底部Tabbar的显示和隐藏
  addCart,    //添加购物车
  cancleCart, //删除购物车商品
  addShop,    //增加购买数量
  reduceShop,  //减少购买数量
  Select,      //是否选中
  allSelect    //全选
}