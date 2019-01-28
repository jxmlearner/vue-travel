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
                weekendList: [
                    {id: '0001', title: '清远周边逛', imgUrl:'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',desc:'人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'},
                    {id: '0002', title: '浮在海上的绿洲', imgUrl:'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',desc:'南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'},
                ]
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