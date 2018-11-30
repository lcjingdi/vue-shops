<template>
  <div>
    <div :to="'/home/goodsinfo/'+ 15" @click="goDetail(15)">
      <h1>123</h1>
    </div>
  </div>
</template>
<script>
    export default {
        data: function(){
            return {}
        },
        methods: {
            goDetail(id) {
                // this.$router.push('/home/goodsinfo/'+18)
                // this.$router.push({path: '/home/goodsinfo/' + 20})
                this.$router.push({name: 'goodsinfo', params: {id: 666}})
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
