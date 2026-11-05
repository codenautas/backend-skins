// Compila todos los .styl de dist/ y falla si alguno no compila.
'use strict';
var fs = require('fs');
var path = require('path');
var stylus = require('stylus');

function listarStyl(dir){
    return fs.readdirSync(dir).reduce(function(lista, nombre){
        var ruta = path.join(dir, nombre);
        if(fs.statSync(ruta).isDirectory()){
            return lista.concat(listarStyl(ruta));
        }
        return /\.styl$/.test(nombre) ? lista.concat(ruta) : lista;
    }, []);
}

var archivos = listarStyl(path.join(__dirname, '..', 'dist'));
var errores = 0;
archivos.forEach(function(archivo){
    var contenido = fs.readFileSync(archivo, 'utf8');
    if(!contenido.trim()){ return; }
    try{
        stylus(contenido).set('filename', archivo).render();
    }catch(err){
        errores++;
        console.error('ERROR compilando ' + archivo + '\n' + err.message);
    }
});
console.log(archivos.length + ' archivos .styl revisados, ' + errores + ' con errores');
process.exit(errores ? 1 : 0);
