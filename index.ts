class Autor{
    private nombre :string;
    private biografia : string;
    
    constructor(pNombre : string){
        this.nombre = pNombre;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }

    public getBiografia(){
        return this.biografia;
    }

    public setBiografia(pBiografia: string):void{
        this.biografia = pBiografia;
    }
}

class Libro{
    private nombre :string;
    private autores : Autor[];
    private editorial : string;
    private edicion : number;

    constructor(pNombre: string, pAutores:Autor[],pEditorial:string,pEdicion:number){
        this.nombre = pNombre;
        this.autores = pAutores;
        this.editorial=pEditorial;
        this.edicion = pEdicion;
    }

    /**
     * getNombre
   
    */
    public getNombre() {
        return this.nombre;
        
    }

   /**
    * setNombre
    */
   public setNombre(pNombre) {
        this.nombre = pNombre;
   }

   /**
    * getEditorial
    */
   public getEditorial() {
        return this.editorial;
   }

   
   public getEdicion() : number {
        return this.edicion; 
   }


   public setEditorial(pEditorial : string):void {
        this.editorial = pEditorial;
   }

   
   public setEdicion(pEdicion : number):void {
        this.edicion = pEdicion;
   }

   public setAutores(pAutores: Autor[]):void {
        this.autores = pAutores;
   }

   public getAutores():Autor[]{
     return this.autores;
   }

}

class GestorLibros{
    private libros : Libro[];

    constructor(pLibros: Libro[]){
        this.libros = pLibros;
    }

    /**
     * listarLibros
    */
    public listarLibros() {
        return this.libros;
        
    }

    public agregarLibro(pLibro: Libro):void {
        this.libros.push(pLibro);
        console.log("Se agrego el siguiente Libro " + pLibro.getNombre());
    }

    public eliminarLibro(pLibro: Libro):void{
        let control : number = 0;
        for(let i:number=0; i<this.libros.length; i++){
            if(pLibro.getNombre() === this.libros[i].getNombre()){
                this.libros.splice(i,1);
                console.log("Se Elimino el siguiente libro: " + pLibro.getNombre());
                control = 1;
                break;
            }

        }
        if (control === 0){
            console.log("No se encontro Libro");
        }
        
        
    
    }

    public modificarLibro(pLibro: Libro):void{
        let control : number = 0;
        for(let i:number=0; i<this.libros.length; i++){
            if(pLibro.getNombre() === this.libros[i].getNombre()){
                let auxLibro : Libro = this.libros[i];
                this.libros[i] = pLibro;
                console.log("Se modifico el siguiente libro: " + auxLibro.getNombre());
                control = 1;
                break;
   
            }        
          
        } 
        if (control === 0){
            console.log("No se encontro Libro");
        }
    }
}

//se crean los Autores
let autorUno = new Autor("Catalina");
let autorDos = new Autor("Susana");
let autorTres = new Autor("Lila");

//se crean Los libros

let libroUno = new Libro("LIBRO UNO",[autorUno],"EDITORIAL AUSTRAL",1984);
let libroDos = new Libro("LIBRO DOS",[autorUno,autorDos],"EDITORIAL NORTE",1999);
let libroTres = new Libro("LIBRO TRES",[autorUno,autorDos,autorTres],"EDITORIAL PACIFICO",2011);

//SE MUESTRAN LIBRO
console.log(libroUno);
console.log(libroDos);
console.log(libroTres);

// SE AGREGA BIOGRAFIA DEL AUTOR DEL LIBRO UNO
autorUno.setBiografia("nacio en Argentina en el año 1840");
console.log(libroUno);

//SE CREA GESTORLBROS

let miGestor = new GestorLibros([libroUno,libroDos]);

//AGREGAR LIBRO
miGestor.agregarLibro(libroTres);
let libroCuatro = new Libro("LIBRO CUATRO",[autorUno,autorDos,autorTres],"EDITORIAL PACIFICO",2021);
miGestor.agregarLibro(libroCuatro);

//ELIMINAR UN LIBRO
miGestor.eliminarLibro(libroDos);
console.log(miGestor.listarLibros());

//MODIFICAR LIBRO
libroCuatro.setNombre("LIBRO 5");

console.log(miGestor.listarLibros());



