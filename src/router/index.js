import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      meta: { title: '首页' },
      component: () => import('@/views/Home'),
      children: [
        {
          path: '',
          component: () => import('@/components/List')
        },
        {
          path: 'news/:id',
          meta: { title: '日报' },
          component: () => import('@/components/News')
        }
      ]
    },
    {
      path: '/themes',
      meta: { title: '主题日报' },
      component: () => import('@/views/Themes')
    },
    {
      path: '/theme/:id',
      meta: { title: '主题日报-detail' },
      component: () => import('@/components/Theme')
    },

    {
      path: '/about',
      meta: { title: '关于' },
      component: () => import('@/views/About')
    }
  ]
})

export default router