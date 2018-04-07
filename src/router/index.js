import Vue from 'vue'
import Router from 'vue-router'

//UI组件官网-Introduce
import OfficalWeb from '@/officialWeb/officialWeb'
import Tutorial from '@/officialWeb/API/tutorial'

//组件开发
import Button from '@/components/button/src/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OfficalWeb',
      component: OfficalWeb
    },

    {
      path: '/Tutorial',
      name: 'Tutorial',
      component: Tutorial
    },

  ]
})
