import axios from 'axios';

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d293e9731ae7d5eda23314f/redBookApp'

// axios.interceptors.response.use((res) => {
//   if (res.data.code !== 200){
//     window.alert('网络异常....')
//     return Promise.reject(res)
//   }
//   return res
// },(error) => {
//   window.alert('网络异常....')
//   return Promise.reject(error)
// })

export function fetchGet(url){
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
      resolve(response.data)
    },err => {
      reject(err)
    })
    .catch(error => {
      reject(error)
    })
  })
}

// export default {
//   fetchGet
// }