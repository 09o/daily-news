import axios from 'axios'
import { BASE_URL } from '@/config'

// 对axios请求二次封装
const instance = axios.create({
  baseURL: BASE_URL
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

// 导出get和post方法
export const get = (url, params) => instance.get(url, {
  params
})

export const post = (url, params) => instance.post(url, params)