<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in cates"
            :key="item.id"
            class="mui-control-item"
            v-bind:class="[item.id === 0 ? 'mui-active' : '']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="photolist">
      <routerLink v-for="item in list" tag="li" :key="item.id" :to="'/home/photoinfo/' + item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <p class="info-body">{{item.zhaiyao}}</p>
        </div>
      </routerLink>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data: function() {
    return {
      cates: [],
      list: []
    };
  },
  mounted: function() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created: function() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory: function() {
      this.cates = [
        { id: 0, title: "全部" },
        { id: 1, title: "科技" },
        { id: 2, title: "教育" },
        { id: 3, title: "iOS" },
        { id: 4, title: "前端" },
        { id: 5, title: "安卓" },
        { id: 6, title: "苹果" },
        { id: 7, title: "新闻" },
        { id: 8, title: "手机" }
      ];
    },
    getPhotoListByCateId(cateId) {
      this.list = [
        {
          id: 1,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 2,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 3,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 4,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 5,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 6,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 7,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 8,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 9,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        },
        {
          id: 10,
          title: "有气质的美女",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543535955703&di=422ded97af9e8aecd07e847173e47a5a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F2cf5e0fe9925bc311e9a79a455df8db1ca1370c2.jpg",
          zhaiyao:
            "万物想你不及我心念你，万物喜你不及我心悦你，感情不是水龙头，不能说关就关，但可以像电池，慢慢的消耗，总有一天会耗尽所有的念想。失望和生气怎么会一样，生气只是想被人哄，而失望是你说什么我都听不进去，开始理性思考这段感情存在的意义。"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photolist {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    position: relative;
    margin-bottom: 10px;
    box-shadow: 0 0 6px #999;
    img {
      width: 100%;
      vertical-align: middle;
    }
    background: #ccc;
    text-align: center;
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      color: white;
      text-align: left;
      max-height: 100px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 12px;
        color: white;
      }
    }
  }
}
</style>
