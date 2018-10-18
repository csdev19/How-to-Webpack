const path = require('path');
// para un plugin deberemos importarlo como se hace normalmente en js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // para trabajar los LOADERS usaremos el atributo module
    module: {
        rules: [       
            // Aqui iran los loaders
            {
                // test: tipo-de-archivo-que-quiero-reconocer
                // use: que-loader-se-va-a-encargar-del-archivo 
                test: /\.css$/,
                use: ['style-loader','css-loader'],
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader',
                    // ahora ya no necesitamos style-loader
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // Aqui iran los plugins
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}