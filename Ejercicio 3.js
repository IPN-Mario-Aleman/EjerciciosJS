// Tercer ejercio del adventjs
/*El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:*/

const carta1 = "bici coche (balón) bici coche peluche" // -> ✅
const carta2 =  "(muñeca) consola bici" // ✅
const carta3 = "bici coche (balón) bici coche" // -> ❌
const carta4 = "peluche (bici [coche) bici coche balón" // -> ❌
const carta5 = "(peluche {) bici" // -> ❌
const carta6 = "() bici" // ❌

function isValid(letter) {
  let a = true
  if(letter.includes('()') || letter.includes('{') || letter.includes('[')){
    a = false
    return a
  }
  
  if(letter.includes('(') && letter.includes(')')){
    let arr = letter.split(' ')
    //console.log(arr)
    for(let i = 0; i < arr.length; i++){
      if(arr[i].charAt(0) === ')'){
        a = false
        return a
      }else{
        if(arr[i].charAt(0) === '(' && arr[i].charAt(arr[i].length-1) === ')'){
          a = true
        }else{
          if(arr[i].charAt(arr[i].charAt(0)) === '(') {
            a = false
            return a
          }else{
          console.log(arr[i])
            if(arr[i].charAt(arr[i].length - 1) === '(' || arr[i].charAt(arr[i].length - 1) === ')') {
              a = false
              return a
            }
          }
        }
      }
      // a = true
    } // vamos a comprobar que los "()" esten bien secuenciados
    //a = true
  }else{
    a = false
  }
    
  return a
}
console.log(isValid(carta1))