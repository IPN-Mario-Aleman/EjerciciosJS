/*¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.

Lo mejor es que veamos un ejemplo:

// tenemos el árbol en forma de objeto
const tree = {
  value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
  left: {
    value: 2, // el nodo izquierdo necesita dos decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  },
  right: {
    value: 3, // el nodo de la derecha necesita tres decoraciones
    left: null, // no tiene más ramas
    right: null // no tiene más ramas
  }
}

Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6


countDecorations(tree) // 6
*/
function countDecorations(bigTree) {
    // ¡No olvides compartir tu solución en redes!
      let que=[],newque=[],result=[];
      if(bigTree!==null){
          que.push(bigTree);
      }else{
          return [0];
      }
      do{
          let sum=0;
      que.forEach(function(item){
        sum+=item.value;
      })
          result.push(sum);
          while(que.length!=0){
              let node=que.shift();
              if(node.left!==null){
                  newque.push(node.left);
            }
              if(node.right!==null){
                  newque.push(node.right);
              }
          }
          let temp=newque;
          newque=que;
          que=temp;
      }while(que.length!=0);
    console.log(result)
    let total = 0
    result.forEach(function(a) {
      total = total + a 
    })
      return total;
  }
  
  const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }
  
  
  let j=countDecorations(bigTree) // 28
  console.log(j)
  /*
          1
        /   \
       5     6
      /     / \
     7     5   1
    /
   3
  
  /*Por cierto, Bellf Gates me ha contado que este tipo de ejercicio es muy típico en las entrevistas de trabajo para programadores. ¿Lo sabías?*/