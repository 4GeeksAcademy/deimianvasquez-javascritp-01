//errores de sintaxis
//errores de lógica

// condicionales

/*
if(condición){
    Si  la condición es verdadera

}else{
    Si la condición el falsa
}
*/

// let age = 15

// if (age >= 15) {
//     console.log("Tienes acceso")
// } else {
//     console.log("No tienes acceso aún!")
// }

let password = "123456"
let email = "deimianvasquez@gmeil.com"


// if (email == "deimianvasquez@gmeil.com") {
//     if (password == "123456") {
//         console.log("Bienvenido a Deimianland")
//     } else {
//         console.log("Credenciales inválidas")
//     }
// } else {
//     console.log("Credenciales inválidas")
// }

// if (email == "deimianvasquez@gmeil.com" && password == "123456") {

//     console.log("Bienvenido a Deimianland")

// } else {
//     console.log("Credenciales inválidas")
// }

//ifelse

// let age = 4

// if (age < 6) {
//     console.log("Entrada gratis")
// } else {
//     if (age <= 60) {
//         console.log("paga 100%. Estas en la flor de la vida")
//     } else {
//         console.log("paga 50%. Una promoción")
//     }
// }

// if (age < 6) {
//     console.log("Entrada gratis")
// } else if (age <= 60) {

//     console.log("paga 100%. Estas en la flor de la vida")
// } else {
//     console.log("paga 50%. Una promoción")
// }


/*
    imprimir los números del 1 al 100
    imprimir para los divisibles de 3 (FIZZ)
    imprimir para los divisibles de 5 (BUZZ)
    imprimir para los divisibles de 3, 5 (FIZZBUZZ)
    Si no es divisible imprimir números
*/

// for (let num = 1; num <= 100; num++) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("FIZZBUZZ")
//     } else if (num % 3 == 0) {
//         console.log("FIIZ")
//     } else if (num % 5 == 0) {
//         console.log("BUZZ")
//     } else {
//         console.log(num)
//     }
// }


//Funciones

/*
    function sum(insumos(parametros)){
        bloque de código que se va a ejecutar

        recordar lleva return --> el resultado del proceso arriba
    }

    La manera de ejecutar la función es: sum(insumos--> Argumentos)
*/

// function sum(num1 = 0, num2 = 0, num3 = 0) {
//     let result = num1 + num2 + num3;
//     return result;
// }

// console.log(sum(158))

// function sum(...args) { // rest operator
//     console.log(args)
//     let result = 0

//     for (let num of args) {
//         if (typeof num == "number") {
//             result = result + num
//         } else {
//             return result
//         }
//     }

//     return result

// }

// console.log(sum(6, 7, 8, 5, 55,))

// funcion anonima
// const sum = function (num1 = 0, num2 = 0) {
//     console.log(num1 + num2)
//     return num1 + num2
// }

// sum(59, 755)
// function saludar() {
//     console.log("paso 2 egundos saludar")
// }

// setInterval(function () { return sum(59, 25) }, 2000)



// Función flecha(Arrow fnction)

// const saludar = (name, age, pets) => {
//     return (`Hola ¿qué tal ${name}? tienes ${age} años de edad, tus mascotas son ${pets}`)
// }


// console.log(saludar("Deimian", 18, ["Dog", "Cat"]))

// // setInterval(() => console.log(saludar("Juanita")), 1000)

function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

console.log(multiply(sum(3, 5), sum(multiply(5, 6), multiply(50, 65)))); // se ejecutan de adentro a fuera
