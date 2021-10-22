const path = require('path');

module.exports = {
  entry: {
    contact: './src/scripts/contact.ts',
    typeContact: './src/scripts/typeContact.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  output: {    
    path: path.resolve(__dirname + '/src/scripts'),
    filename: '[name].js',
  },
};