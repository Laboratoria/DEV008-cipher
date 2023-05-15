const cipher = { 
    
    encode:(texto, desplazamiento)=>{
        let resultado = "";
        let numDesplaza = Number(desplazamiento);
        let ubicaLetra = texto.charCodeAt(0)
                
        for (let i= 0; i <texto.length; i++) {
          let vuelta = texto.charCodeAt(i) + numDesplaza
          let cifra = String.fromCharCode(vuelta);
          console.log(cifra)
          resultado += cifra

        }
        return resultado


    },
    decode: (texto, desplazamiento)=>{
        let resultado2 = "";
        let numDesplaza = Number(desplazamiento);
        let ubicaLetra = texto.charCodeAt(0)
                
        for (let i= 0; i <texto.length; i++) {
          let vuelta = texto.charCodeAt(i) - numDesplaza
          let cifra = String.fromCharCode(vuelta);
          console.log(cifra)
          resultado2 += cifra

        }
        console.log(resultado2)

   
    }


    

}




export default cipher;



/*
encode:(texto, desplazamiento) => {

    Number(desplazamiento)
    //console.log ("Number" + " Creo que este es un DOM")

    document.getElementById("desplazamiento")
    //console.log(" desplazamiento" + " este es del DOM")//
   
    document.getElementById("mensaje")
    //console.log("mensaje" +" este es del DOM")//

    document.getElementById("mensaje2")
    //console.log("mensaje2" + " este es del dom")//

    //let cipher = "mensaje"//

    console.log(texto, desplazamiento);
    console.log(texto.charCodeAt(0) + Number(desplazamiento));

    const cadenaDeNombre = texto;

    console.log(cadenaDeNombre.length);

    for (let i= 0; i <cadenaDeNombre.length; i++) {
        console.log(cadenaDeNombre[i], cadenaDeNombre.charCodeAt(i)) 
          
    }

    document.getElementById("mensaje2") 
    //console.log("mensaje2" + "Esto tambíen creo que es parte del DOM");//
    //*console.log(desplazamiento + " este es del DOM")
    document.getElementById("mensaje2").value = cipher(texto, desplazamiento);
    console.log(document.getElementById("mensaje2").value = cipher(texto, desplazamiento));*/
    /*document.getElementById("desplazamiento")= Number

} */
