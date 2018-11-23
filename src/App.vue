<template>
    <div>

        <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
        <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
        <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
        <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
        <button type="button" class="mui-btn mui-btn-primary">蓝色</button>
        <button type="button" class="mui-btn mui-btn-primary">蓝色</button>

        <div class="mui-slider">
        <div class="mui-slider">
  <div class="mui-slider-group mui-slider-loop">
    <!--支持循环，需要重复图片节点-->
    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="4.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542974738666&di=0e51e8f9c8f0a36489f0d14d70d33d2d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D0d96a1d0db1373f0e13267dccc66218e%2F83025aafa40f4bfb2738a7ff094f78f0f63618b4.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542974738665&di=762db15d600c8890caf046bbe3287f49&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F7%2F5%2F2%2F9%2F7529616%2F20091%2F21%2F1232538197977_mthumb.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542974738665&di=d4fbafa08993e7028aa5e47e29faa504&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dcf306df302fa513d45a7649d55043f8e%2F279759ee3d6d55fbec448e0967224f4a20a4dd1b.jpg" /></a></div>
    <div class="mui-slider-item"><a href="#"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542974738665&di=e1777d9baf0d20e8bb4abb2a94a4a3cf&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D73f4290cc2fcc3cea0cdc170fa2cbcfd%2Fc2fdfc039245d688e0db178aaec27d1ed31b24c6.jpg" /></a></div>
    <!--支持循环，需要重复图片节点-->
    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="1.jpg" /></a></div>
  </div>
</div>

</div>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      toastInstanse: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.show();
      setTimeout(() => {
        this.toastInstanse.close();
      }, 3000);
    },
    show() {
      this.toastInstanse = Toast({
        message: "xx",
        duration: -1
      });
    }
  }
};
</script>

<style>
</style>