<template>
    <div class="header">
        <div class="header-back" @click="goback"><i class="icon iconfont icon-left"></i></div>
        城市选择
    </div>
</template>

<script>
    export default {
        methods: {
            goback() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/variable.styl'
.header {
    position: relative;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align:center;
    color: #fff;
    background: $bgcolor;
    font-size: .32rem;
    .header-back {
        width: .8rem;
        line-height: $headerHeight;
        padding: 0 .2rem;
        font-size: .36rem;
        text-align: left;
        cursor:pointer;
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>