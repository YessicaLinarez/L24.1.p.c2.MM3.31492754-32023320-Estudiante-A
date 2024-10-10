export default class Cl_estudiante {
    constructor(nombre, acumuladorNotas, cantidadMaterias) {
        this.nombre = nombre;
        this.acumuladorNotas = acumuladorNotas;
        this.cantidadMaterias = cantidadMaterias;
    }

    set nombre(nombre){
        this.nombre = nombre;
    }
    get nombre(){
        return this.nombre;
    }
    set acumuladorNotas(acumuladorNotas){
        this.acumuladorNotas = acumuladorNotas;
    }
    get acumuladorNotas(){
        return this.acumuladorNotas;
    }
    set cantidadMaterias(cantidadMaterias){
        this.cantidadMaterias = cantidadMaterias;
    }
    get cantidadMaterias(){
        return this.cantidadMaterias;
    
    }

    calcularPromedio() {
        if (this.cantidadMaterias === 0) {
            return 0;
        }
        return this.acumuladorNotas / this.cantidadMaterias;
    }
    reporteBeca() {
        const montoBeca = this.calcularBeca();
        if (montoBeca > 0) {
            return "El estudiante recibe una beca de:";
        } else {
            return "El estudiante no recibe beca";
        }
    }
}





