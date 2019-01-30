<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-top1px border-1px">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{city}}</div>
                    </div> 
                </div>
            </div>
            <div class="area">
                <div class="title border-top1px border-1px">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="city of hot" :key="city.spell" @click="handleChangeCity($event,city.name)">
                        <div class="button">{{city.name}}</div>
                    </div> 
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
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
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'CityList',
        props: {
            cities:Object,
            hot: {
                type: Array,
                default: function() { return [] }
            },
            letter: String
        },
        computed: {
            ...mapState(['city'])
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true  // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true
            })
        },
        methods: {
            handleChangeCity(event,cityName) {
                if(event._constructed) { 
                    this.changeCity(cityName)
                }                
            },
            ...mapActions(['changeCity'])
        },
        watch: {
            letter() {
                if(this.letter) {
                    let element = this.$refs[this.letter][0]   //注意这里,因为这个ref是 v-for出来的, this.$refs['A']是个数组,要加个[0]索引
                    this.scroll.scrollToElement(element)
                }
            }
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