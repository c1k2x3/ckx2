import Vue from 'vue'
import Router from 'vue-router'
import Shhome from '@/components/Shhome'
import Shfen from '@/components/Shfen'
import Shgodo from '@/components/Shgodo'
import Shmy from '@/components/Shmy'
import Xiang from '@/components/xiang'
import Seek from '@/components/seek'
import Details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Shhome',
      name: 'Shhome',
      component: Shhome
    },
    {
      path: '/Shfen',
      name: 'Shfen',
      component: Shfen
    },
    {
      path: '/Shgodo',
      name: 'Shgodo',
      component: Shgodo
    },
    {
      path: '/Shmy',
      name: 'Shmy',
      component: Shmy
    },
    {
      path: '/xiang',
      name: 'Xiang',
      component: Xiang
    },
    {
      path: '/seek',
      name: 'seek',
      component: Seek
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path:"/",
      redirect:"Shhome"
    }
  ]
})
