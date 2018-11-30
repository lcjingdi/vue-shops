import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopContainer from "./components/tabbar/ShopContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

import NewsList from "./components/news/Newslist.vue";
import NewsInfo from "./components/news/NewsInfo.vue";

import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";

import GoodsList from "./components/goods/GoodsList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";

var router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: HomeContainer
    },
    {
      path: "/member",
      component: MemberContainer
    },
    {
      path: "/shop",
      component: ShopContainer
    },
    {
      path: "/search",
      component: SearchContainer
    },
    {
      path: "/home/newslist",
      component: NewsList
    },
    {
      path: "/home/newsinfo/:id",
      component: NewsInfo
    },
    {
      path: "/home/photolist",
      component: PhotoList
    },
    {
      path: "/home/goodslist",
      component: GoodsList
    },
    {
      path: "/home/photoinfo/:id",
      component: PhotoInfo
    },
    {
      path: "/home/goodsinfo/:id",
      component: GoodsInfo,
      name: 'goodsinfo'
    }
  ],
  linkActiveClass: "mui-active"
});

export default router;
