<template>
    <div>
        <city-header></city-header>
        <city-search />
    </div>
</template>

<script>
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'

    export default {
        components: {
            CityHeader,
            CitySearch
        }    
    }
</script>

<style scoped>

</style>