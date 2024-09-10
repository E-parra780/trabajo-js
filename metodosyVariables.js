//variables let:
let nombre1 ="Juan";
let hora = "22:10";
let numero = 14;
let barrio = "Pilarica";
let tel = 3132304797;

//variables const
const pi = 3.1416;
const dolar= 4247;
const gravedad = -9.38;
const campeon = "nacional";
const e = 2.7182;

//funcion sin parametros
const caminar = ()=>console.log("estas caminando")
caminar();

//caminar con if
const caminarConValidacion = () => {
    let caminar = "Hola, estas caminando";
    if (saludo) {
        console.log(saludo);
    } else {
        console.log("No puedes caminar");
    }
};
saludarConValidacion();

//funcion con parámetro
const saludarPersona = (nombre) => console.log(`Hola, ${nombre}!`);
saludarPersona("Omar"); 

//saludar con validacion
const saludarConValidacion = (nombre) => {
    if (typeof nombre === "string" && nombre.length > 0) {
        console.log(`Hola, ${nombre}!`);
    } else {
        console.log("El nombre no es válido.");
    }
};
saludarConValidacionPersona("Carlos");

//funcion sumar, dos parametros 
const suma = (a, b) => console.log(a + b);
suma(14, 22);


//Funcion con switch

const operaciones = (a, b, operacion) => {
    switch(operacion) {
        case "sumar":
            console.log(a + b);
            break;
        case "restar":
            console.log(a - b);
            break;
        case "multiplicar":
            console.log(a * b);
            break;
        case "dividir":
            if (b !== 0) {
                console.log(a / b);
            } else {
                console.log("No se puede dividir entre cero.");
            }
            break;
        default:
            console.log("Operación no válida.");
    }
};
operarNumeros(10, 5, "multiplicar"); 


