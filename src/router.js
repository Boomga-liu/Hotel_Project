import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/Index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: 'room_detail/:roomId',
          name: 'RoomDetail',
          component: () => import('@/views/RoomDetail.vue')
        },
        {
          path: 'checkout',
          name: 'CheckOut',
          component: () => import('@/views/CheckOut.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
