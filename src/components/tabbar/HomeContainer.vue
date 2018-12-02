<template>
  <div>
    <swiper :swipsList="lunbolist" :isfull="true"></swiper>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><routerLink to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯666</div>
        </routerLink></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><routerLink to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </routerLink></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><routerLink to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </routerLink></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
export default {
  data: function() {
    return {
      lunbolist: [
        {
          id: 1,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173120&di=f5b67c6aff4cffe4a7550f1f0748593b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D39f7a1888b0a19d8df0e8c455a82e7e7%2Fc2cec3fdfc03924523c019368c94a4c27d1e2596.jpg"
        },
        {
          id: 2,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173118&di=00057647e081d281c65570ec4f52342c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Da6a1921e9b8fa0ec6bca6c4e4efe339b%2F09fa513d269759eef91c30e6b8fb43166d22df4b.jpg"
        },
        {
          id: 3,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173116&di=cd1584b44bcd5195a2950ebe5f33e2f9&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201401%2F10%2F20140110211351_HJhH8.thumb.700_0.jpeg"
        },
        {
          id: 4,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173114&di=f36cb59457dae4053097762a3f154ee6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa71ea8d3fd1f41345447d7aa2f1f95cad0c85ef6.jpg"
        },
        {
          id: 5,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173111&di=58a484187b224d3a1a80bbd3550ae7dc&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130608%2F7447430_092225119000_2.jpg"
        }
      ]
    };
  },
  created: function() {
    this.getSwips();
  },
  methods: {
    getSwips: function() {}
  },
  components: {
    swiper
  }
};
</script>

<style lang="scss">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
</style>