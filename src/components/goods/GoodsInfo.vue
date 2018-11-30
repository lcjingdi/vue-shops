<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :swipsList="lunbolist" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品的名称标题</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>$2399</del>&nbsp;&nbsp;销售价
            <span class="now_price">$2199</span>
          </p>
          <p>购买数量
            <numbox></numbox>
          </p>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：</p>
          <p>上架时间：</p>
        </div>
      </div>

      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data: function() {
    return {
      id: this.$route.params.id,
      lunbolist: []
    };
  },
  methods: {
    goDesc: function(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment: function(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    getLunbotu() {
      this.lunbolist = [
        {
          url:
            "http://b.zol-img.com.cn/sjbizhi/images/4/320x510/1368776107431.jpg"
        },
        {
          url:
            "http://b-ssl.duitang.com/uploads/item/201603/03/20160303171010_BFNzk.jpeg"
        },
        {
          url:
            "http://i7.download.fd.pchome.net/t_600x1024/g1/M00/0E/16/ooYBAFUKm2KIZGShAADuaPxLRMoAACWiwMkxGcAAO6A683.jpg"
        }
      ];
    }
  },
  created: function() {
    this.getLunbotu();
  },
  components: {
    swiper,
    numbox
  }
};
</script>
<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
}
.mui-card-footer {
  display: block;
  button {
    margin: 10px 0;
  }
}
</style>
