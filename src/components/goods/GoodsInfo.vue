<template>
    <div>
        <h1>goodsinfo---{{id}} </h1>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                id: this.$route.params.id
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>
