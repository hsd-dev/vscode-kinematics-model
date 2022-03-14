const path = require('path');

module.exports = {
    mode:'development',
    entry: path.join(__dirname, 'urdf.ts'),
    output: {
        filename: 'urdf.js',        
        path:     path.resolve(__dirname, '../../lib/')
    },
    module: {        
        rules: [
            {   
                test: /\.tsx?$/,
                loader: 'ts-loader',                
                exclude: /node_modules/,
            },
        ]
    },    
    resolve: {        
        extensions: [".tsx", ".ts", ".js"]
    }
    
};