import axios from '../utils/http'

async function getHomeInfo(curCity) {
    return await axios.get('index.json?city='+curCity)
}

export default {
    getHomeInfo
}