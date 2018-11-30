<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swipsList" :key="item.url">
        <img :src="item.url" alt v-bind:class="{full: isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["swipsList", "isfull"]
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  text-align: center;
  .mint-swipe-item {
    img {
      height: 100%;
    }
  }
}
.full {
    width: 100%;
}
</style>
