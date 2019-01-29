<template>
    <div>
        <city-header></city-header>
        <city-search />
        <city-list :cities="cities" :hot="hotCities" />
        <city-alphabet :cities="cities" />
    </div>
</template>

<script>
    import CityApi from '@/API/CityApi'
    import CityHeader from './components/Header'
    import CitySearch from './components/Search'
    import CityList from './components/List'
    import CityAlphabet from './components/Alphabet'

    export default {
        name: 'City',
        data() {
            return {
                cities: {},
                hotCities: []
            }
        },
        mounted() {
            this.getCityInfo()
        },
        methods: {
            async getCityInfo() {
                let res = await CityApi.getCityInfo()
                let data = res.data
                if(data.ret && data.data) {
                    this.cities = data.data.cities
                    this.hotCities =data.data.hotCities
                }
            }
        },
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        }   
    }
</script>

<style scoped>

</style>