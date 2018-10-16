# Cargando configuracion de rutas relativas

Cuando creamos un **webpack.config** webpack lo buscara automataicamente. Pero tambien podemos hacer que lo busque en cualquier parte de nuestro proyecto con rutas **absolutas** y **relativas**.

Para este ejemplo crearemos una carpeta llamada external para usarla de ejemplo en estos casos. 

Y para esto debemos configurar el package.json:

```json
{
  "name": "ejemplo_entorno",
  "version": "1.0.0",
  "description": "esto solo nos servira a modo de ejemplo para como iniciar un entorno ",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack index.js --output bundle.js --mode development",
    "build:local": "webpack --mode development",
   // este seria el nuevo script
   "build:external": "webpack --config ./external/webpack.config.js"
  },
  "author": "Cristian Sotomayor",
  "license": "MIT",
  "devDependencies": {
    "webpack": "^4.20.2",
    "webpack-cli": "^3.1.2"
  }
}
```

Para especificar la ruta del nuevo archivo **webpack.config** usaremos el **FLAG** **--config** y luego le decimos la ruta relativa a el archivo **package.json**.
Notose que ya no devemos usar el flag **--mode development** porque en el archivo **webpack.config** agregamos la siguiente linea:

```js
module.exports = {
    // seteando el atributo mode
    mode: 'development',
}
``` 

Pero queremos que el archivo **bundle.js** para esto usaremos rutas relativas y absolutas de la siguiente manera:

```js
const path = require('path');
 
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
// ahora con path crearemos una carpeta que contenga el bundle
//filename: path.resolve(__dirname, 'bundle.js')
// ahora podemos solo dealr un nombre
```

## Que es path ? (Aclaracion)

Path es un modulo de **Node.js** y no de **Webpack**, el archivo **webpack.config.js** es un archivo javascript que usa node para funcionar.

La diferencia entre:

```json
entry: path.resolve(__dirname, 'index.js')
```

Y:

```json
entry: './index.js'
```

Es que **__dirname** se basa en el directorio actual, es decir que cambia dependiendo de donde esta el webpack.config.js y la ruta podria verse haciendo lo siguiente:

```js
console.log(__dirname);
```

En mi caso me da la siguiente respuesta:

```console
...
/home/pystudent/Studying/How-to-Webpack/ejemplo_entorno/external
...
```

El **__dirname** devolvera el ruta actual que contiene el archivo desde que la estamos llamando osea seria lo mismo que escribir desde terminal **pwd**.









