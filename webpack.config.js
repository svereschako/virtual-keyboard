const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],        
      },
      { 
      	test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, 
      	use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: "file?name=[name].[ext]"
                    }
                }
            ] 
      }
    ],    
  },
};