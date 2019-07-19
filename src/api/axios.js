import axios from 'axios';
import * as MOCK from "./mock.js"

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.response.use((res) => {
  if (res.data.data.code !== 200) {
    window.alert('网络异常....')
    return Promise.reject(res)
  }
  return res
}, (error) => {
  window.alert('网络异常....')
  return Promise.reject(error)
})

function fetchGet(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const API = {
  getFound:() => {
    return fetchGet(MOCK.found)  //请求首页发现页面数据
  },
  getFocus:() => {
    return fetchGet(MOCK.focus)  //请求首页关注页面数据
  },
  getCity:() => {
    return fetchGet(MOCK.city)  //请求首页城市页面数据
  },
  getShop:() => {
    return fetchGet(MOCK.shop)  //请求商城首页数据
  }
}