module.exports = {
    entry : {
        bundle:'./index.js',
        bundle2:'./index2.js',
        bundle3:'./index3.js'
    },
    output : {
        path:"./build",
        filename:"[name].js"
    },
    module : {
        loaders :[
            {test:/\.js$/, loader:'jsx-loader'}
        ]
    }
}