let env = process.env.NODE_ENV || 'development'
let apiAddr

if(env === 'production') {  //生产环境
    apiAddr = 'http://localhost:5000/api/'
} else if(env === 'development') {  //开发环境
    apiAddr ='/api/'
}

export default {
    apiAddr
}

