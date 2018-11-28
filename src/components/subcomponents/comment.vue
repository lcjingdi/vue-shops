<template>
    <div>
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
    
    export default {
        data: function(){
            return {
                pageIndex: 1,
                comments: []
            }
        },
        created(){
            console.log(123);
            this.getComments();
        },
        methods: {
            getComments(){
                this.comments = [
                    {add_time: "1999.19.19", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"},
                    {add_time: "1999.19.32", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"},
                    {add_time: "1999.19.42", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"},
                    {add_time: "1999.19.55", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"},
                    {add_time: "1999.19.66", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"},
                    {add_time: "1999.19.77", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"},
                    {add_time: "1999.19.88", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"},
                    {add_time: "1999.19.99", user_name: "jd", content:"阿萨德飞机拉萨快递费就拉萨快递费"}
                    ]
            },
            getMore(){

            },
        }
    }
    
</script>   

<style lang="scss" scoped>

</style>
