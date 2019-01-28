<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音" />
    </div>
</template>

<script>
    export default {
        name: 'CitySearch'
    }
</script>

<style scoped lang="stylus">
@import '~@/assets/css/stylus/variable.styl'

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
</style>