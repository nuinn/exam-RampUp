// 1. Ejercicio 1 (1pts)
// Se debe trabajar con una variable que contiene la información: “The Bridge 2023”
// Muestra por consola la longitud de la variable
// Utilizando esta variable muestra por consola solo “The Bridge”

const ejercicioUno = "The Bridge 2023";
console.log(ejercicioUno.length)
console.log(ejercicioUno.substring(0,10))

// 2. Ejercicio 2 (2pts)
// Define una variable culpable que sea de tipo booleano.
// Crea una condición en la que sí culpable es verdadero se muestre por consola “Es culpable” y sino que muestre por consola “No es culpable”

const culpable = true
if (culpable === true){
    console.log("Es culpable")
}
else{
    console.log("No es culpable")
}

// 3. Ejercicio 3 (2pts)
// Crea una función que pasándole por argumento un nombre me devuelva "Hola" y el nombre que le he pasado. 
// Ejemplo: Llamó a la función saludar(“Sofía”) y me muestra por consola:
// "Hola soy Sofía".
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function saludar(nombre){
    if (typeof nombre !== "string"){
        return "Debo ser ejecutada con un string"
    }
    return `Hola soy ${nombre}`
}
console.log(saludar("Alex"))

// 4. Ejercicio 4 (2pts)
// Crea una función que pasándole por argumento un nombre me devuelva la longitud de la palabra. 
// Ejemplo: le pasó como argumento "Hola" y me devuelve 4. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function longitudDePalabra(palabra){
    if (typeof palabra !== "string"){
        return "Debo ser ejecutada con un string"
    }
    return palabra.length
}
console.log(longitudDePalabra("Hola"))

// 5. Ejercicio 5 (2pts)
// Dada la siguiente array: [1,2,3,4,5,6,7,8,9,10]; crea una función que devuelva solo los números pares. Resultado esperado: [2, 4, 6, 8, 10]

function encuentraPares(arr){
    const pares = []
    for (const numero of arr){
        if (numero%2 == 0){
            pares.push(numero)
        }
    }
    return pares
}

const testArray = [1,2,3,4,5,6,7,8,9,10]
console.log(encuentraPares(testArray))
