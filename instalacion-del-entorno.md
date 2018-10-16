# Instalacion del entorno

Osea, que vamos a necesitar que  usar webpack.

## Pasar empezar si o si, necesitamos tener instalado..

- **Node**:  siempre hay dos versiones, la **LTS** (8.12.0) y la ultima (que en este caso es 10.12.0). Para saber si lo tenemos instalado y que veersion es usamos lo siguiente.
```console
$ node -v
v8.12.0
```
- **Npm**: Esto lo usaremos como gestor de paquetes SIEMPRE cuando instalemos algo en JS. Y para saber si lo tenemos instalado usaremos lo siguiente:
```console
$ npm -v
6.4.1
```


## Ahora podremos crear nuestros proyectos en JS

A modo de ejemplo, creare una carpeta llamada **EJEMPLO_ENTORNO** y ahi haremos las pruebas para la instalacion del entorno.

Una vez dentro de la carpeta en donde queremos trabajar, tenemos que hacer lo siguiente como primer paso:

```console
$ npm init

## despues de escribir esto nos haran una serie de preguntas, asi es como respondi yo:
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults. 

See `npm help json` for definitive documentation on these fields 
and exactly what they do.                                                                            
Use `npm install <pkg>` afterwards to install a package and                                   
save it as a dependency in the package.json file.

Press ^C at any time to quit.                                                                 
package name: (ejemplo_entorno)                                                               
version: (1.0.0)                                                                              
description: esto solo nos servira a modo de ejemplo para como iniciar un entorno             
entry point: (index.js)      
## AQUI SETEAREMOS EL NOMBRE DEL ARCHIVO EL CUAL SERA EL PUNTO DE PARTIDA                                                               
test command:                                                                                 
git repository:                                                                               
keywords:                                                                                     
author: Cristian Sotomayor                                                                    
license: (ISC) MIT                                                                            
About to write to /home/pystudent/Studying/How-to-Webpack/ejemplo_entorno/package.json:      

                                                                                              
{                                                                                             
  "name": "ejemplo_entorno",                                                                  
  "version": "1.0.0",                                                                         
  "description": "esto solo nos servira a modo de ejemplo para como iniciar un entorno ",     
  "main": "index.js",                                                                         
  "scripts": {                                                                                
    "test": "echo \"Error: no test specified\" && exit 1"                                     
  },                                                                                          
  "author": "Cristian Sotomayor",                                                             
  "license": "MIT"                                                                            
}       

Is this OK? (yes) yes
```

Esto nos inicializara un archivo **package.json**, que nos dara una descripcion del proyecto y de los paquetes o modulos que estaremos utilizando (si usan python, vendria a ser una analogia a un **requirements.txt** pero un poco mas descriptiva y escrita con JSON). 

### Ahora vamos a descargar nuestro primer modulo: WEBPACK

De la siguiente manera:

```console
$ npm install webpack --save-dev
# 

### Para que nos sirve el "--save-dev" ??
## Pues de manera general cuando usamos "--save" lo guardara dentro de nuestro paquete
## json como una dependencia general. 
## Pero cuando usamos "-dev" sera guardado como dependencia de desarrollo
## osea que sera usada especificamente por los desarrolladores para crear el 
## codigo pero no sera pasada al servidor (PRODUCCION) 


## Y en caso quieran una version en especifico pueden usar
$ npm install webpack@<numero-de-version> --save-dev
```

## Para comprobar que Webpack esta instalado correctamente

Haremos lo siguiente:

```console
$ webpack -v
# si lo tenemos instalado solo localmente no funcionaria asi que usaremos ..
$ npm list  webpack 

```
## Curiosidades

**Que es el package-lock.json?**

Es el documento que tiene las versiones de las dependencias listadas en **especifico**. Para que el programa tenga un mejor control acerca de que version se uso.





















