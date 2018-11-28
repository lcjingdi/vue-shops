<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr />
        <textarea placeholder="请输入要发表的内容（做多吐槽120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{i + 1}}楼&nbsp; &nbsp; 用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{ item.add_time }}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        data: function(){
            return {
                pageIndex: 1,
                comments: [
                    {add_time: "1999.19.19", user_name: "jd", content:"阿就拉萨快递费阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费阿递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞快递费阿萨德飞机拉萨快递费就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨萨快递费阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费就递费就拉萨快递就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递萨德飞机拉萨快递费阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快费"},
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机萨拉萨快递费就拉萨快费"}
                ]
            }
        },
        created(){
            console.log(123);
            this.getComments();
        },
        methods: {
            getComments(){
                Toast("获取评论成功---"+ this.id);
                this.comments.push(
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快递费阿萨德飞机拉萨快递费就拉萨快费"})
            },
            getMore(){
                this.pageIndex++;
                this.getComments();
            },
        },
        props: ['id']
    }
    
</script>   

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 40px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
