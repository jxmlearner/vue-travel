<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" :ref="item"
        @click="handleLetterChange"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        data() {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        props: {
            cities: Object
        },
        computed: {
            letters() {
                const letters = Object.keys(this.cities)
                return letters
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            handleLetterChange(e) {
                let letter = e.target.innerText
                this.$emit('change',letter)
            },
            handleTouchStart() {
                this.touchStatus = true
            },
            handleTouchMove(e) {
                if(this.touchStatus) {
                    if(this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(()=>{
                        const startY = this.startY
                        const touchY = e.touches[0].clientY - 85
                        const index = Math.floor((touchY - startY) / 20 )
                        if(index>=0 && index < this.letters.length){
                            this.$emit('change',this.letters[index])
                        }
                    },16)                                        
                }
            },
            handleTouchEnd() {
                this.touchStatus = false
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/variable.styl'
.list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.7rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item {
        text-align: center;
        line-height: .4rem;
        color: $bgcolor
    }
}
</style>