module.exports = {
    env: {
        test: {
            presets: ['react-app', ['@babel/preset-env', { loose: true }]]
        }
    }
}
