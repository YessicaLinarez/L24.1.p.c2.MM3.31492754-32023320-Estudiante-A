import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante {

    constructor(nombre, acumuladorNotas, cantidadMaterias) {
        super(nombre, acumuladorNotas, cantidadMaterias);
    }

    calcularBeca() {
        const promedio = this.calcularPromedio();
        if (promedio > 15) {
            return 30;
        } else if (promedio >= 10) {
            return 20;
        } else {
            return 0;
        }
    }
    
}