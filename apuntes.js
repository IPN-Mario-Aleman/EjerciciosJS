/*
* 👋 Welcome to RunJS 🚀
*
* To get started, try typing some code into this editor.
*
* The result will then be shown on the right. 🤯 Mind blowing!
*
* Activate your copy of RunJS to do even more amazing things,
* including:
* - installing NPM packages
* - opening multiple tabs
* - type checking
* - autocomplete
* - and supporting development 😀
*
* Enjoy! 💫
*/

let number = 1
typeof number
let objeto1 = {
  propiedad: 'texto1',
  titulo: 'Mario',
  text: '0'
}
typeof objeto1
objeto1
objeto1.propiedad

typeof Symbol()

/* tipos de variables
1. null
2. undefined
3. boolean
4. number
5. string
6. object
7. symbol */

const nombreVariable = 1
nombreVariable

/*  JSON { JavaScript Object Notation}   */ 
let persona = {
  nombre: 'Mario',
  apellido: 'Alemán',
  email: 'mar.alemanf@gmail.com'
}
persona.nombre
persona.apellido
persona.email
window.document
window.innerWidth
window.outerWidth

let myArray = [1,2,3,4]
let miSet = new Set (myArray)

miSet

console.dir(document)


/* funciones*/
var num1 = 1
var num2 = 2 

function sumar(num1,num2){
  let resultado = num1 + num2
  return resultado;
}

sumar(num1,num2)


/* metodos */

/*objeto*/ 
const persona2 = {
  nombre: 'Mario',
  apellido: 'Aleman',
  id: 5,
  nombreCompleto: function(){
    return `${this.nombre} ${this.apellido}`
  }
}
persona2.nombreCompleto()

const miArray = [1,2,3,'hola',28,{a:1}]

miArray
typeof miArray

var iterador = miArray[Symbol.iterator]();
iterador.next().value
iterador.next().value
iterador.next().value
iterador.next().value
iterador.next().value
iterador.next().value
iterador.next().value



let frutas = ['manzana','fresa','naranja','kiwwi','banana','piña','coco','mandarina','toronja','uva','papaya']
console.log(frutas.length)
frutas

/*para saber la posicion de cada elemento*/
frutas.forEach(function(index, item, array){
  console.log(item,index)
})

/* Añade y elimina un elemento del final*/
let newLength = frutas.push('Sandia')
frutas
let last = frutas.pop()
frutas


/*añade un elemento del inicio*/
let primero = frutas.shift()
frutas
let newLength = frutas.unshift('Cacao')
frutas


/* para saber la posicion de un elemento teniendo su nombre y Remover un item */

let pos = frutas.indexOf('kiwwi')
pos

let removedItem = frutas.splice(pos, 1)
frutas


/*remover de un arrar desde una posicion y el numero de items que queremos remover*/
let pos = 1;
let n = 4;

let removedItems = frutas.splice(pos,n)

console.log(frutas)

console.log(removedItems)


/*copiar un arreglo*/
let shallowCopy = frutas.slice()
shallowCopy


/*salida en pantalla de los elementos de un arreglo
console.log(frutas[0])
console.log(frutas[5])
console.log(frutas.[frutas.length-1])
*/
/*
console.log(frutas['2'] =! frutas['02'])
*/

/*con keys podemos saber que casillas estan ocupadas por nuestro arreglo
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6

fruits.length = 10
console.log(fruits)
console.log(fruits[8])
*/

/*const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsdz')
myArray*/
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case


/*boolean*/


const persona = {
  nombre: 'Mario',
  apellido: 'Aleman',
  edad: 24
}

if(persona.edad > 18){
  console.log('puede tomar cerveza')
}else if(persona.nombre == Mario){
  console.log('canta')  
}else{
  console.log('No canta y no toma cerveza')
}

/*un = es un signo de asignacion y == de comparación y el === compara el tipo de dato y el valor del dato */
persona.edad == '24'


persona.edad === "24" 
// es el valor de persona.edad igual al valor del string 24 ? 
typeof persona.edad  === typeof '24'


if(persona.apellido == 'Aleman' && persona.nombre == 'Mario'){
  console.log("Hola Mario Aleman")
} else {
  console.log('Hola extraños')
}

let frutas = ['manzana','fresa','piña','uva']
function convertirMayuscula(fruta){
  let respuesta = fruta.toUpperCase()
  console.log(respuesta)
}


/*
frutas.forEach(convertirMayuscula)
*/
/*
let n = 6
let res = 0
function areaPolygon(n,res){
  res = res + ((n-1)*4)
  n = n - 1
  if(n===0){
    res=res+1
    console.log(res)
    return res
  }else{
    areaPolygon(n,res)  
  }
}

areaPolygon(n,res)*/

let frutas = ['manzana','fresa','naranja','kiwwi','banana','piña','coco','mandarina','toronja','uva','papaya']
console.log(frutas.length)
frutas

/*para saber la posicion de cada elemento*/
frutas.forEach(function(index, item, array){
  console.log(item,index)
})

let map1 = frutas.map(x => x+' Hola')







console.log(map1)


let calificaciones = [7,8,9,5,4,9,10]

/*function soloPares(numeroActual){
  return numeroActual % 2 === 0
}

let resultado = calificaciones.filter(soloPares)
resultado

/*arrow function */

let res = calificaciones.filter((numeroActual) =>
  numeroActual % 2 === 0
)
console.log(res)












asdasd