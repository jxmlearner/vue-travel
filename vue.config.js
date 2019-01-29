module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: ''
                //target: 'http://localhost:8081/',
                //changeOrigin: true
            }
        }
    }
}