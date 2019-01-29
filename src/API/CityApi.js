import axios from '../utils/http'

async function getCityInfo() {
    return await axios.get('city.json')
}

export default {
    getCityInfo
}