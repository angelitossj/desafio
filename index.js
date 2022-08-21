function calculo(x1,x2){
x1=prompt("Ingrese el primer valor");
x2=prompt("¿Ingrese el segundo numero");

if (x1 < x2){
    return x1 / x2
}
else {
    return x1 * x2
}

}
const tipoDato =(boleano,numerico,numerico_flotante,texto,fecha)=>{
    var boleano = true 
    var numerico = 22 
    var numerico_flotante = 13.56 
    var texto = "mi texto" 
    var fecha = new Date() 

    console.log(typeof(boleano))
    console.log(typeof(numerico))
    console.log(typeof(numerico_flotante))
    console.log(typeof(texto))
    console.log(typeof(fecha))

}
const  retorno=(a,b,c,d,e,f)=>{
let resultadoFinal =(a) + (b);
resultadoFinal= resultadoFinal - c;
resultadoFinal=(resultadoFinal * d)/e;
resultadoFinal=resultadoFinal**f;
return resultadoFinal;
}

function extraer(aNumeros){
    aNumeros=[1, 5, 6, 7, 8, 9, 10, 12]
    aNuevo = aNumeros.slice(aNumeros.length-5)
    return aNuevo

}
aNumeros=[1, 10, 30, 3, 8, 15, 25, 12]
    aNumeros.sort(function(a,b){
        return b-a
    })

    function ordenarAlfabeticamente(array){
        array=["Boca","Riber","Racing","San Lorenzo","Independiente"]
        return array.sort()
    }

    function array(a,b){
        a=[1,2,3,4,5,6,8,8,6,4];
        b=4;

        result=a.filter ((item)=> item !== b)
        console.log(result)


    }
    function promedio(a){
        a=[1, 2, 3, 4];
        let sum = 0;
        
        for (let i = 0; i < a.length; i++) {
            sum += a[i];
        }
         let promedios=sum/4;
        console.log("El resultado de la suma es :",sum);
        console.log("El promedio es :",promedios)
    }
    function buscarAmigos(amigos, nombres){
        nombres="angel"
        var amigos = [{ nombre: 'fran', edad: 20} , { nombre: 'Emi', edad: 25,nombre:"angel",edad:27 }];
        amigos.map(data=>{
            if(data.nombre === nombres){
                console.log(data) 
            }
           
        })
    }

function salario(){
    let salarios = {
        Angel: 100,
        Mario: 160,
        Gabriel: 130
      };
      
      let sum = 0;
      for (let key in salarios) {
        sum += salarios[key];
      }
      console.log(sum)
}
      salario()
     
    // console.log(buscarAmigos())
    
//    promedio()
    // array()
// console.log(ordenarAlfabeticamente())

// console.log(aNumeros)

// console.log(extraer())

// console.log(retorno(2,5,3,2,1,5))
// tipoDato()
// console.log(calculo())