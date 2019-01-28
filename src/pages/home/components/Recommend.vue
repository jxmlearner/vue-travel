<template>
    <div>
        <div class="gray-split"></div>
        <h2 class="common-title">
            <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <span class="mp-title">猜你喜欢</span>
        </h2>
        <ul class="mp-like-list">
            <li class="mp-like-item border-1px" v-for="item of likeList" :key="item.id">
                <div class="img-box">
                    <img class="mp-like-img" :src="item.imgUrl" :alt="item.title">
                </div>
                <div class="right-content">
                    <div class="mp-like-title ellipsis">{{item.title}}</div>
                    <div class="mp-like-comment">
                        <span class="stars">
                            <i class="icon iconfont icon-star-fill" v-for="star in item.stars"></i>
                        </span>
                        <span class="comment-num">{{item.commentNum}}条评论</span>
                    </div>
                    <div class="mp-like-price">
                        <span class="mpg-price">¥ <em class="mpg-price-num">{{item.price}}</em></span>
                        起<span class="mp-like-address">{{item.area}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',        
        data() {
            return {
                
            }            
        },
        props: {
            likeList: {
                type: Array,
                default: function() { return [] }
            }
        }
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
        border-1px(#e0e0e0)
        &:last-child::after {
            border: none;
        }
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
            padding-top: .22rem;
            .mp-like-title {
                font-size: .32rem;
                color: #212121;
                height: .44rem;
                line-height: .44rem;
            }
            .mp-like-comment {
                padding-top: .2rem;
                .stars { color: #ffb436;}
                .comment-num { margin-left: .2rem;}
            }
            .mp-like-price {
                position: relative;
                margin-top: .28rem;
                color: #616161;
                font-size: .24rem;
                line-height: .4rem;
                .mpg-price {
                    color: #ff8300;
                    .mpg-price-num {
                        font-size: .4rem;
                    }
                }
                .mp-like-address {
                    position: absolute;
                    right: .24rem;
                    bottom: 0;
                }
            }
        }
    }
}
</style>