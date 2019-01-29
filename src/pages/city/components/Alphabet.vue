<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of cities" :key="key" @click="handleLetterChange">{{key}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        methods: {
            handleLetterChange(e) {
                let letter = e.target.innerText
                this.$emit('change',letter)
            }
        }
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/mixins.styl'
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