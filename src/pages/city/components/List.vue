<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-top1px border-1px">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div> 
                </div>
            </div>
            <div class="area">
                <div class="title border-top1px border-1px">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="city of hot" :key="city.spell">
                        <div class="button">{{city.name}}</div>
                    </div> 
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-top1px border-1px">{{key}}</div>
                <div class="item-list">
                    <div class="item border-1px" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'CityList',
        props: {
            cities:Object,
            hot: {
                type: Array,
                default: function() { return [] }
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper)
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/mixins.styl'
@import '~@/assets/css/stylus/variable.styl'

.list{
    position: absolute;
    left: 0;
    right: 0;
    top: 1.7rem;
    bottom: 0;
    overflow: hidden;
    .title {
        line-height: .54rem;
        background: #eee;
        padding-left: .2rem;
        color: #666;
        border-top1px(#ccc)
        border-1px(#ccc)
    }
    .button-list {
        overflow: hidden;
        padding: .1rem .6rem .1rem .1rem;
        box-sizing: content-box;
        .button-wrapper {
            float: left;
            width: 33.33%;
            box-sizing: content-box;
            .button {
                margin: .1rem;
                padding: .1rem 0;
                text-align: center;
                border: .01rem solid #ccc;    
                border-radius: .06rem;
            }
        }
    }
    .item-list {
        .item {
            line-height: .76rem;
            color:#666;
            padding-left: .2rem;
            border-1px(#ccc)
            &:last-child::after {
                border:none;
            }
        }
    }
}
</style>