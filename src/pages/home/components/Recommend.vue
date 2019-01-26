<template>
    <div>
        <div class="gray-split"></div>
        <h2 class="common-title">
            <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <span class="mp-title">猜你喜欢</span>
        </h2>
        <ul class="mp-like-list">
            <li class="mp-like-item">
                <div class="img-box">
                    <img class="mp-like-img" src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg" alt="深圳野生动物园">
                </div>
                <div class="right-content">
                    <div class="mp-like-title mp-ellipsis">深圳野生动物园</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend'
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/mixins.styl'

.mp-like-list {
    margin-left: .24rem;
    .mp-like-item {
        position: relative;
        overflow: hidden;
        padding: .2rem 0;
        &:after {
            top: 100%;
        }            
        border(1px,#e0e0e0)
        display: flex;
        .img-box {
            width: 2rem;
            height: 2rem;
            position: relative;
            img{ width: 100%;}
        }
        .right-content {
            flex:1;
            padding-left: .2rem;
        }
    }
}
</style>