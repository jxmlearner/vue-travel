import axios from '../utils/http'

async function getHomeInfo() {
    return await axios.get('index.json')
}

export default {
    getHomeInfo
}