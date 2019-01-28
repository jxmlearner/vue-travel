<template>
    <div>
        <div class="gray-split"></div>
        <h2 class="common-title">
            <img class="mp-title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <span class="mp-title">猜你喜欢</span>
        </h2>
        <ul class="mp-like-list">
            <li class="mp-like-item border-1px">
                <div class="img-box">
                    <img class="mp-like-img" src="http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg" alt="深圳野生动物园">
                </div>
                <div class="right-content">
                    <div class="mp-like-title ellipsis">深圳野生动物园</div>
                    <div class="mp-like-comment">
                        <span class="stars">
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                        </span>
                        <span class="comment-num">16129条评论</span>
                    </div>
                    <div class="mp-like-price">
                        <span class="mpg-price">¥ <em class="mpg-price-num">155</em></span>
                        起<span class="mp-like-address">小梅沙</span>
                    </div>
                </div>
            </li>
            <li class="mp-like-item border-1px">
                <div class="img-box">
                    <img class="mp-like-img" src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg" alt="八达岭长城">
                </div>
                <div class="right-content">
                    <div class="mp-like-title ellipsis">八达岭长城</div>
                    <div class="mp-like-comment">
                        <span class="stars">
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                            <i class="icon iconfont icon-star-fill"></i>
                        </span>
                        <span class="comment-num">44155条评论</span>
                    </div>
                    <div class="mp-like-price">
                        <span class="mpg-price">¥ <em class="mpg-price-num">157.5</em></span>
                        起<span class="mp-like-address">延庆县</span>
                    </div>
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
        border-1px(#e0e0e0)
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