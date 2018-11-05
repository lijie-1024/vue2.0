import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/home.vue'
import Member from '@/components/tabbar/member'
import Shopcar from '@/components/tabbar/shopcar'
import Search from '@/components/tabbar/search'
import NewsList from '@/components/news/newslist.vue'
import NewsInfo from '@/components/news/newsinfo.vue'
import PhotoList from '@/components/photo/photolist.vue'
import PhotoInfo from '@/components/photo/photoinfo.vue'
import GoodsList from '@/components/goods/goodslist.vue'
import GoodsInfo from '@/components/goods/goodsinfo.vue'
import GoodsDesc from '@/components/goods/goodsdesc.vue'
import GoodsComment from '@/components/goods/goodscomment.vue'



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
    {
      path: '/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/goodslist',
      component: GoodsList
    },
    {
      path: '/goodsinfo/:id',
      name:'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/goodsdesc/:id',
      name:'goodsdesc',
      component: GoodsDesc
    },
    {
      path: '/goodscomment/:id',
      name:'goodscomment',
      component: GoodsComment
    },

  ],
  linkActiveClass:'mui-active'
})
