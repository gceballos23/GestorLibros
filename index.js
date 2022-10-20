var Autor = /** @class */ (function () {
    function Autor(pNombre) {
        this.nombre = pNombre;
    }
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Autor.prototype.getBiografia = function () {
        return this.biografia;
    };
    Autor.prototype.setBiografia = function (pBiografia) {
        this.biografia = pBiografia;
    };
    return Autor;
}());
var Libro = /** @class */ (function () {
    function Libro(pNombre, pAutores, pEditorial, pEdicion) {
        this.nombre = pNombre;
        this.autores = pAutores;
        this.editorial = pEditorial;
        this.edicion = pEdicion;
    }
    /**
     * getNombre
    */
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    /**
     * setNombre
     */
    Libro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    /**
     * getEditorial
     */
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getEdicion = function () {
        return this.edicion;
    };
    Libro.prototype.setEditorial = function (pEditorial) {
        this.editorial = pEditorial;
    };
    Libro.prototype.setEdicion = function (pEdicion) {
        this.edicion = pEdicion;
    };
    Libro.prototype.setAutores = function (pAutores) {
        this.autores = pAutores;
    };
    Libro.prototype.getAutores = function () {
        return this.autores;
    };
    return Libro;
}());
var GestorLibros = /** @class */ (function () {
    function GestorLibros(pLibros) {
        this.libros = pLibros;
    }
    /**
     * listarLibros
    */
    GestorLibros.prototype.listarLibros = function () {
        return this.libros;
    };
    GestorLibros.prototype.agregarLibro = function (pLibro) {
        this.libros.push(pLibro);
        console.log("Se agrego el siguiente Libro " + pLibro.getNombre());
    };
    GestorLibros.prototype.eliminarLibro = function (pLibro) {
        var control = 0;
        for (var i = 0; i < this.libros.length; i++) {
            if (pLibro.getNombre() === this.libros[i].getNombre()) {
                this.libros.splice(i, 1);
                console.log("Se Elimino el siguiente libro: " + pLibro.getNombre());
                control = 1;
                break;
            }
        }
        if (control === 0) {
            console.log("No se encontro Libro");
        }
    };
    GestorLibros.prototype.modificarLibro = function (pLibro) {
        var control = 0;
        for (var i = 0; i < this.libros.length; i++) {
            if (pLibro.getNombre() === this.libros[i].getNombre()) {
                var auxLibro = this.libros[i];
                this.libros[i] = pLibro;
                console.log("Se modifico el siguiente libro: " + auxLibro.getNombre());
                control = 1;
                break;
            }
        }
        if (control === 0) {
            console.log("No se encontro Libro");
        }
    };
    return GestorLibros;
}());
//se crean los Autores
var autorUno = new Autor("Catalina");
var autorDos = new Autor("Susana");
var autorTres = new Autor("Lila");
//se crean Los libros
var libroUno = new Libro("LIBRO UNO", [autorUno], "EDITORIAL AUSTRAL", 1984);
var libroDos = new Libro("LIBRO DOS", [autorUno, autorDos], "EDITORIAL NORTE", 1999);
var libroTres = new Libro("LIBRO TRES", [autorUno, autorDos, autorTres], "EDITORIAL PACIFICO", 2011);
//SE MUESTRAN LIBRO
console.log(libroUno);
console.log(libroDos);
console.log(libroTres);
// SE AGREGA BIOGRAFIA DEL AUTOR DEL LIBRO UNO
autorUno.setBiografia("nacio en Argentina en el año 1840");
console.log(libroUno);
//SE CREA GESTORLBROS
var miGestor = new GestorLibros([libroUno, libroDos]);
//AGREGAR LIBRO
miGestor.agregarLibro(libroTres);
var libroCuatro = new Libro("LIBRO CUATRO", [autorUno, autorDos, autorTres], "EDITORIAL PACIFICO", 2021);
miGestor.agregarLibro(libroCuatro);
//ELIMINAR UN LIBRO
miGestor.eliminarLibro(libroDos);
console.log(miGestor.listarLibros());
//MODIFICAR LIBRO
libroCuatro.setNombre("LIBRO 5");
console.log(miGestor.listarLibros());
