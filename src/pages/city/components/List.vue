<template>
    <div class="list">
        <div class="area">
            <div class="title border-top1px border-1px">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div> 
            </div>
        </div>
        <div class="area">
            <div class="title border-top1px border-1px">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">北京</div>
                </div> 
            </div>
        </div>
        <div class="area">
            <div class="title border-top1px border-1px">A</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CityList'
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/mixins.styl'
@import '~@/assets/css/stylus/variable.styl'

.title {
    line-height: .44rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    border-top1px(#ccc)
    border-1px(#ccc)
}
.button-list {
    overflow: hidden;
    padding: .1rem;
    .button-wrapper {
        float: left;
        width: 33.33%;
        .button {
            margin: .1rem;
            padding: .1rem 0;
            text-align: center;
            border: .01rem solid #ccc;    
            border-radius: .06rem;
        }
    }
}
</style>