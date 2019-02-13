<template>
    <div class="header">
        <router-link to="/" class="header-abc" v-show="showAbs"><i class="icon iconfont icon-left"></i></router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link tag="div" class="header-back" to="/"><i class="icon iconfont icon-left"></i></router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showAbs: true,
                opacityStyle: {
                    opaticy: 0
                }
            }
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrollTop
                if(top> 60) {
                    let opacity = top / 140
                    opacity = opacity>=1? 1: opacity
                    this.opacityStyle = { opacity }
                    this.showAbs = false
                }else {
                    this.showAbs = true
                }
            }
        },
        activated() {
            window.addEventListener('scroll',this.handleScroll)            
        },
        deactivated() {  //对全局监听事件进行移除
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/variable.styl'
.header {
    color: #fff;
    .header-abc {
        position: absolute;
        z-index: 2;
        left: .1rem;
        top: .1rem;
        height: .72rem;
        width: .72rem;
        background: rgba(0,0,0,0.5);
        border-radius: 50%;
        text-align: center;        
        line-height: .72rem;
        color: #fff;
        .iconfont {
            font-size: .4rem;
        }
    }
    .header-fixed {
        position: fixed;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
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
}
</style>