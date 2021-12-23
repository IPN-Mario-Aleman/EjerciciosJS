/*¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol. */

function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let arbol = ''
  for(var i = 1; i <= (height + 2) ; i++){
    let p = i * 2 - 1
    let l = ((height * 2 -1) - (i < (height + 1) ? p : 1)) / 2
    for(var j = 0; j < 3; j++){
      arbol += j != 1 ? '_'.repeat(l) : i < (height + 1) ? '*'.repeat(p) : '#' 
    }
    arbol += i < (height + 2) ? '\n' : ''
  }
  return arbol
}

createXmasTree(39)