import { get, post } from '@/utils/request'

// 混入get和post方法
export default {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        async $get(url, data) {
          let res = await get(url, data)
          return res.data
        },
        async $post(url, data) {
          let res = await post(url, data)
          return res.data
        }
      }
    })
  }
}