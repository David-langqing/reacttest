const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/shop', {
        target: 'https://m.zbj.com',
        changeOrigin: true,
    }))
    app.use(proxy('/category', {
        target: 'https://m.zbj.com',
        changeOrigin: true,
    }))
    
    app.use(proxy('/shunt', {
        target: 'https://m.zbj.com',
        changeOrigin: true,
    }))
    app.use(proxy('/api', {
        target: 'http://localhost:3000',
        changeOrigin: true,
    }))
}