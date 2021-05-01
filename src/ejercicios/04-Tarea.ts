interface DireccionSuperHeroe{
    calle: string;
    pais: string;
    ciudad: string;
}


interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: DireccionSuperHeroe;
    mostrardireccion(): string;
}


const superHeroe:SuperHeroe  = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY', 
    },
    mostrardireccion(){
        return this.nombre + ', '+ this.direccion.ciudad + ', '+this.direccion.pais;
    },

}

console.log(superHeroe.mostrardireccion());