/*Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:*/

function canReconfigure(from, to){
  // ¡No olvides compartir tu solución en redes!
  if(from.length != to.length){
    return false
  }
  const from1 = from.split('')
  const to1 = to.split('')
  //from = 'MMMAAA'
  //to = 'ZZZYYY'
  
  for(let i=0; i<from.length; i++){
    //console.log(from1[i])  M
    //console.log(to1[i])    Z
    let reConMachine = from[i]
    let reconfigure = to1[i]
    
    for(let j=i+1; j<from.length; j++){
      if(from1[j].includes(reConMachine)){ // SI 'from1' INCLUYE A 'M' EN UNA POSICION i+1
        if(to1[j] != reconfigure){ // Como si lo incluye, entonces, queremos saber que valor le reconfigura a la maquina el cual debe ser el mismo para el anterior si no retornara falso
          return false
        }
      }
    }
    
    for(let j=i+1; j<from.length; j++){
      if(to1[j].includes(reconfigure)){
        if(from1[j] != reConMachine){ 
          return false
        }
      }
    }// hacemos lo mismo pero para to
    
    
  }//reconfiguración
  
  return true
}

/*
function canReconfigure(from, to){
  const myToSet = new Set(to)
  const myFromSet = new Set(from)
  console.log(myToSet)
  console.log(myFromSet)
  if(myFromSet.size !== myToSet.size || from.length !== to.length) return false
  return true
}
*/
// Correcto, pero eso no quiere decir que no pueda haber duplicados. Por ejemplo 'MMMAAA' con 'ZZZYYY' sería válido.

const from = 'CON'
const to = 'JNN'

//const from = 'CON'
//const to   = 'JNN'
canReconfigure(from, to) // false

/*
const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
/* la transformación sería así:
B -> L
A -> I
L -> B


const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
 no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO


const from = 'abcdefghijkl'
const to   = 'lkjihgfedcba'
canReconfigure(from, to) // false
// no se puede hacer la transformación:
/*M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)


const from = 'AA'
const to   = 'MID'
canReconfigure(from, to) // false -> no tiene la misma longitud
*/
