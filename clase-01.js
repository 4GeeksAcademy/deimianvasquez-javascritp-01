// Variables


// let - const - var

// palabra clave  --- Alcance   -----  Reasignación  --- Redeclaracion
// var                Global               Si               Si
// let                De Bloque            Si               No
// const              De Bloque            No               No


var name = "Deimian"
name = 10
var name = "José"
// console.log(name)


function numbers() {
    let name = "Deimian"
    name = "PEdro"
    // console.log(name)
}
numbers()


const userDb = "juanito"
// userDb = "Pedro" --> no se puede reasignar
// console.log(userDb)

// let nombreApellido = "Camel case"
// let ageDog = 16
// let lastName = "Vásquez"



/* Tipos datos 
string --> Cadena de texto
number --> Números enteros y flotantes
boolean --> Verdadero o Falso
null --> No tiene nada (vacio)
undefined --> No le asignamos valor

arrays --> lista de cualquier tipo de datos
objetos literales --> objetos
funciones --> pasos para resolver procesaor repetitivos
*/

let description = "Mi nombre es Deimian, trabajo con 4Geeks Academy"
let pets = false
let price = 56
let email = null
let password

let nameTwo = "Alejandro"
let lastname = "García"

// concatenar string -> convencionar
// console.log("Hola ¿qué tal " + nameTwo + " " + lastname + "?")

// literals, backtick, acento grave ``
// console.log(`Hola ¿qué tal ${nameTwo} ${lastname}?`)


let person = {
    //lave(key):valor(value)
    name: "Elio",
    lastname: "Colmenares",
    pets: ["Perro", "loro"]
}

let starPeople = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [
            "https://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "https://swapi.dev/api/people/2/"
    },
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.dev/api/planets/8/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [
            "https://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:11:50.376000Z",
        "edited": "2014-12-20T21:17:50.311000Z",
        "url": "https://swapi.dev/api/people/3/"
    },
    {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "https://swapi.dev/api/starships/13/"
        ],
        "created": "2014-12-10T15:18:20.704000Z",
        "edited": "2014-12-20T21:17:50.313000Z",
        "url": "https://swapi.dev/api/people/4/"
    },
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female",
        "homeworld": "https://swapi.dev/api/planets/2/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [],
        "created": "2014-12-10T15:20:09.791000Z",
        "edited": "2014-12-20T21:17:50.315000Z",
        "url": "https://swapi.dev/api/people/5/"
    },
    {
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "52BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:52:14.024000Z",
        "edited": "2014-12-20T21:17:50.317000Z",
        "url": "https://swapi.dev/api/people/6/"
    },
    {
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:53:41.121000Z",
        "edited": "2014-12-20T21:17:50.319000Z",
        "url": "https://swapi.dev/api/people/7/"
    },
    {
        "name": "R5-D4",
        "height": "97",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, red",
        "eye_color": "red",
        "birth_year": "unknown",
        "gender": "n/a",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "species": [
            "https://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:57:50.959000Z",
        "edited": "2014-12-20T21:17:50.321000Z",
        "url": "https://swapi.dev/api/people/8/"
    },
    {
        "name": "Biggs Darklighter",
        "height": "183",
        "mass": "84",
        "hair_color": "black",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "24BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/"
        ],
        "species": [],
        "vehicles": [],
        "starships": [
            "https://swapi.dev/api/starships/12/"
        ],
        "created": "2014-12-10T15:59:50.509000Z",
        "edited": "2014-12-20T21:17:50.323000Z",
        "url": "https://swapi.dev/api/people/9/"
    },
    {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/20/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/38/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/48/",
            "https://swapi.dev/api/starships/59/",
            "https://swapi.dev/api/starships/64/",
            "https://swapi.dev/api/starships/65/",
            "https://swapi.dev/api/starships/74/"
        ],
        "created": "2014-12-10T16:16:29.192000Z",
        "edited": "2014-12-20T21:17:50.325000Z",
        "url": "https://swapi.dev/api/people/10/"
    }
]



let arrMix = [
    {
        marca: "ford",
        year: 1988,
        cilindrada: "V8"
    },
    {
        marca: "Toyota",
        year: 2023,
        cilindrada: "1.5"
    },
    {
        marca: "Ferrari",
        year: 2023,
        cilindrada: "1"
    },
]

// starPeople.forEach(element => {
//     console.log("Hola ¿qué tal"+" "+element.name+"?")
// });


// console.log(typeof person)
// console.log( Array.isArray(arrMix))

let num1 = 20
let num2 = 30

let sum = function (num1, num2) {
    return num1 + num2
}
// console.log(sum(15, 89))
// console.log(sum(896, 8889))

//Operadores aritmeticos
/*
+ --> Sumar
- --> Restar
* --> multiplicar
/ --> Dividir
% --> Módulo: da el resto despues de la divición
++ --> Incremento
-- --> Decremento
*/

let num3 = 10
num3 = num3 - 1
// console.log(num3++)
// console.log((599 % 2) == 0)


// 1. - divimos por 2 el numero
// 2. - Si el resto es cero es parent
// 3. - Si el resto es distinto a cero es impar



// Operadores de comparación 
/*
    ==  --> Igua a, devuelve true si los valores son iguales
    === --> Estrictamente igual
    !=  --> NO igual a, devuelve el contrario a la validación
    !==  --> NO igual a, devuelve el contrario a la validación(estrictamente)
    >    --> Mayor que, devuelve true si el operador de la izquiera es mayor que el de la derecha
    <    --> Menor que, devuelve true si el operador de la izquiera es menor que el de la derecha
    >=    --> Mayor igual
    <=   --> Menor Igual
    
    ASIGNACIÖN
    = --> asignación, asigna lo que esta de3l lado derecho al lado izquierdo
*/


// console.log("6" == 6) //--> Evalua el valor
// console.log("6" === 6)
// console.log("6" !== 6) //--> NO igual a, devuelve el contrario a la validación
// console.log(6 > 8)
// console.log(6 <= 6)

/*
    Operadores logícos:
    &&  --> operador and
    ||  --> Operador or
    !   --> Operador lógico not 

*/

let age = 16
let codeDress = false
let borracho = true

console.log(age > 18 && codeDress && !borracho)
console.log(age > 18 || codeDress || !borracho)


/*
5 pasos para cambiar un bombillo -- ya tenemos el bombillo

    1.- Revisar si el bombillo esa dañado
    2.- verificar que esta apagado 
    3.- Traer la escalera
    4.- Desenrroscar el bombillo para quitarlo
    5.- enroscar el bombillo nuevo
    6.- bajarse de la escalera
    7.- encender el bombillo 
    8.- guardar la escalera
    

    1.- Traer una escalera
    2.- Quitar el bombillo malo
    3.- colocar el bombillo nuevo
    4.- bajarse de la escalera
    5.- Validar si el bombillo que cambiamos funciona

*/