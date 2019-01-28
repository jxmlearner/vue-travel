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
                likeList: [
                    {id: '0001', title: '深圳野生动物园', imgUrl:'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg', 
                    commentNum:16129, price:155, stars:5, area:'小梅沙'},
                    {id: '0002', title: '八达岭长城', imgUrl:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg', 
                    commentNum:44155, price:157.5, stars:4, area:'延庆县'}
                ]
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