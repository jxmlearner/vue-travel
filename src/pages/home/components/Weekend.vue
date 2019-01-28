<template>
    <div class="weekend">
        <h2 class="common-title">
            <span class="mp-title"><i class="icon iconfont icon-eye"></i>&nbsp;周末去哪儿</span>
        </h2>
        <div class="weekitem" v-for="item of weekendList" :key="item.id">
            <div class="weekimg">
                <img :src="item.imgUrl" :alt="item.title">
            </div>
            <div class="mp-product-info">
                <p class="product-name">{{item.title}}</p>
                <p class="product-desc">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            weekendList: {
                type: Array,
                default: function() { return [] }
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/mixins.styl'

.weekend {
    background-color:#eee;
    .common-title {
        padding-left: .1rem;
        .mp-title>i {color:#f60;}
    } 
    .weekitem {
        margin-bottom: .1rem;
        background-color: #fff;
        .weekimg {
            height: 0;
            overflow: hidden;
            padding-bottom: 37.383%;
            img {
                width: 100%;
            }
        }
        .mp-product-info {
            position: relative;
            padding: .14rem .2rem .2rem .2rem;
            .product-name {
                padding-right: 1.4rem;
                color: #212121;
                font-size: .28rem;
                line-height: .48rem;
                ellipsis()
            }
            .product-desc {
                padding-right: 1.4rem;
                color: #616161;
                font-size: .24rem;
                line-height: .42rem;
                ellipsis()
            }
        }
    }   
}
</style>