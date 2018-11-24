<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipsList" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a></li>
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
export default {
  data: function() {
    return {
      swipsList: [
        {
          id: 1,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173120&di=f5b67c6aff4cffe4a7550f1f0748593b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D39f7a1888b0a19d8df0e8c455a82e7e7%2Fc2cec3fdfc03924523c019368c94a4c27d1e2596.jpg"
        },
        {
          id: 2,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173119&di=7f948b27bd9c84a662ecf58fb2fcabad&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130227%2F8786105_153051386191_2.jpg"
        },
        {
          id: 3,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173119&di=7437a7b42eab135fdd7c8f2c316238c7&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140301%2F18089642_112953300000_2.jpg"
        },
        {
          id: 4,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173119&di=6d39cce9ed3c0e0725bf3cbc25b674a1&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F18d8bc3eb13533fa3d9640faa2d3fd1f40345bc6.jpg"
        },
        {
          id: 5,
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543029173120&di=6d95418237f5f0a99823585d1928b47d&imgtype=0&src=http%3A%2F%2Fpic30.nipic.com%2F20130605%2F7447430_151725906000_2.jpg"
        }
      ]
    };
  },
  created: function() {
    this.getSwips();
  },
  methods: {
    getSwips: function() {}
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