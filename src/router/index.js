import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/home.vue'
import Member from '@/components/tabbar/member'
import Shopcar from '@/components/tabbar/shopcar'
import Search from '@/components/tabbar/search'
import NewsList from '@/components/news/newslist.vue'
import NewsInfo from '@/components/news/newsinfo.vue'
import PhotoList from '@/components/photo/photolist.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/newslist',
      component: NewsList
    },
    {
      path: '/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/photolist',
      component: PhotoList
    },

  ],
  linkActiveClass:'mui-active'
})
