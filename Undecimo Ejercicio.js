/*Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:

• Entrada de un sólo uso: Cuesta 12$ por cada película.

• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜*/

let boleto = 12
let price = 0
let fidellityPass = 250
for(let i=0; i<24; i++){
  boleto = boleto * .75
  price = price + boleto
  //console.log(price)
}
fidellityPass = fidellityPass + price // pase: no: 24 precio: 286  // pase: no: 23 precio: 285.9638
// 12*23 = 276
// 12*24 = 288

// solucion
export default function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  console.log(times)
  if(times>=24){
    return true
  }
  return false
}