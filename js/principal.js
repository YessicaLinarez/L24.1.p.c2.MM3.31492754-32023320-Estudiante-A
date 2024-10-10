/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a 
15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca. 
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un 
estudiante y reporte el monto de la beca, o si no le corresponde beca.*/

import Cl_estudiante from "./Cl_estudiante.js";
import Cl_becado from "./Cl_becado.js";

let estudiante = new Cl_estudiante();
let estudiante1 = new Cl_becado(Mary, 132, 8, 16.50);
let estudiante2 = new Cl_becado(Alirio, 315, 35, 0);

estudiante.procesarbecado{estudiante1};
estudiante.procesarbecado{estudiante2};

let salida = document.getElementById("salida");

salida.innerHTML = `
<br>nombre del estudiante: ${estudiante.this.nombre()}
<br>total de notas acumuladas: ${estudiante.acumuladorNotas()}
<br>Nota Promedio: ${estudiante.calcularPromedio()}%
`;
