const path = require('path');

module.exports = {
  entry: './src/index.js', // El punto de entrada de tu aplicación
  output: {
    filename: 'bundle.js', // El nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // La carpeta de salida
  },
  module: {
    rules: [
      // Reglas para procesar diferentes tipos de archivos (ejemplo: JavaScript, CSS, etc.)
    ],
  },
  resolve: {
    modules: ['node_modules', './src/service/axios.config.js'],
  },
};
