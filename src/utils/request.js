import axios from 'axios'
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : '',
  timeout: 30000
})


service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    console.log('err' + error)
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
