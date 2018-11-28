<template>
  <div>
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>

    <comment :id="this.id"></comment>
  </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
  data: function() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created: function() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo: function() {
      this.newsinfo = { title: "新闻名称", add_time: "1999.20.20", click: "8888",content: "<div><h1>ssss</h1><p>nnnnnnnnandflkasdfnlkasjdflk;asdjf;lkasdfjasf</p></div>" };
    }
  },
  components: {
      comment
  }
};
</script>

<style lang="scss" scoped>
</style>
