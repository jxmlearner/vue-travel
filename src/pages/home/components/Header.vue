<template>
    <div class="header">
        <div class="back"><i class="icon iconfont icon-left"></i></div>
        <div class="head-search">
            <a class="search-input">
                <i class="icon iconfont icon-sousuo"></i>输入城市/景点/游玩主题
            </a>
        </div>
        <a class="head-city">
            <span>深圳<i class="icon iconfont icon-caret-down"></i></span>   
        </a>
    </div>
</template>

<script>
    export default {
        name: 'homeHeader'
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/variable.styl'
.header {
    height: .88rem;   //计算方式： 如44px   44*2/100 = 0.88rem
    background: $color;
    color: #fff;
    display: flex;
    align-items: center;
    .back {
        width: .8rem;
        line-height: .88rem;
        padding: 0 .2rem;
        font-size: .36rem;
        text-align: left;
        cursor:pointer;
    }
    .head-search {
        flex: 1;
        height: 100%;
        padding: .1rem;
        .search-input {
            display: block;
            height: 100%;
            line-height: .68rem;
            padding: 0 .2rem;
            color: #e4e7ea;
            border-radius: .08rem;
            background: #fff;
            i { margin-right: .04rem;}
        }
    }
    .head-city {
        padding: 0 .1rem;
        cursor: pointer;
        i {
            margin-left: .04rem;
            font-size: .24rem;
            line-height: .88rem;
        }
    }
}
</style>