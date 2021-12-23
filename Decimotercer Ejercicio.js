/*¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...*/

export default function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    const size = gifts.length
    let giftsWrapper = []
    for (let i=0; i < size; i++){
      giftsWrapper.push("*"+gifts[i]+"*")
    }
    let envoltorio = gifts[0].length+2
    
    giftsWrapper.push('*'.repeat(envoltorio))
    giftsWrapper.unshift('*'.repeat(envoltorio))
    return giftsWrapper
}

//wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

//wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/