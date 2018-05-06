import Vue from 'vue'
import Router from 'vue-router'

//引入商品相关的组件
import Goodslist from '@/components/goods/list'
import Goodsdetail from '@/components/goods/detail'

//引入新闻相关的组件
import Newsdetail from '@/components/news/detail'
import Newslist from '@/components/news/list'

//引入图片相关额组件
import Picslist from '@/components/pics/list'
import Picsdetail from '@/components/pics/detail'

//引入tabbar相关的组件
import Home from '@/components/tabbar/home'
import Member from '@/components/tabbar/member'
import Cart from '@/components/tabbar/cart'
import Search from '@/components/tabbar/search'

Vue.use(Router)

export default new Router({
  routes: [
    //商品
    {
      path:"/goods",
      component:Goodslist
    },
    {
      path:"/goods/detail",
      component:Goodsdetail
    },
    //新闻
    {
      path:"/news",
      component:Newslist
    },
    {
      path:"/news/detail/:id",
      component:Newsdetail
    },
    //图片
    {
      path:"/pics/:id",
      component:Picslist
    },
    {
      path:"/pics/detail",
      component:Picsdetail
    },
    //tabbar
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/memeber",
      component:Member
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/search",
      component:Search
    }
  ],
  linkActiveClass:"mui-active"
})
