<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" v-model="keyword" placeholder="输入城市名或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-1px" v-for="item of list" :key="item.id" @click="handleChangeCity($event,item.name)">{{item.name}}</li>
                <li v-show="hasNoData" class="search-item border-1px">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { mapActions } from 'vuex'
    export default {
        name: 'CitySearch',
        data() {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        props: {
            cities: Object
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.search,{
                click: true
            })
        },
        computed: {
            hasNoData() {
                return !this.list.length
            }
        },
        methods: {
            handleChangeCity(event,cityName) {
                if(event._constructed) { 
                    this.changeCity(cityName)
                    this.$router.push('/')
                }                
            },
            ...mapActions(['changeCity'])
        },
        watch: {
            keyword() {
                if(this.timer) {
                    clearTimeout(this.timer)
                }
                if(!this.keyword) {
                    this.list = []
                    return
                }
                this.timer = setTimeout(()=> {
                    const result = []
                    for(let i in this.cities) {
                        this.cities[i].forEach(value => {
                            if((value.spell.indexOf(this.keyword)> -1) || (value.name.indexOf(this.keyword)>-1)) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                },100)
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/variable.styl'
@import '~@/assets/css/stylus/mixins.styl'

.search {
    padding: .1rem;
    background: $bgcolor;
    .search-input {
        height: .62rem;
        line-height: .62rem;
        width: 100%;
        text-align: center;
        padding: 0 .1rem;
        border:none;
        border-radius: .06rem;
        color: #666;
        &:focus {
            outline: none;
        }
    }
}
.search-content {
    position: absolute;
    top: 1.7rem;
    left:0;
    right: 0;
    bottom:0;
    background: #eee;
    z-index: 1;
    overflow: hidden;
    .search-item {
        line-height: .62rem;
        padding-left: .2rem;
        background: #fff;
        color: #666;
        border-1px(#ccc)
    }
}
</style>