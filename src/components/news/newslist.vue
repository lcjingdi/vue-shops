<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <routerLink :to="'/home/newsinfo/'+item.id">
          <img
            class="mui-media-object mui-pull-left"
            v-bind:src="item.img_url"
          >
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'>
              <span>{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </routerLink>
      </li>

    </ul>
  </div>
</template>

<script>

import {Toast} from "mint-ui";

export default {
    data: function(){
        return {
            newslist: [
                {id: 1, title: "biaoti", add_time:"2015-12-12",miaoshu:"我是一个图片",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 2, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 3, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 4, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 5, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 6, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 8, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 82, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 124, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 3434, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 11, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 13, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 14, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 15, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"},
                {id: 166, title: "biaoti", add_time:"2015-12-12",click:"199",img_url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=5818061eb9de9c82b268f1cc04e8ea7f/d058ccbf6c81800ad3986b29bb3533fa828b479c.jpg"}
            ]
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            Toast("获取新闻列表成功");
            // this.newslist = 
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 12px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
