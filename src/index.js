import cipher from './cipher.js';

//console.log(cipher);


/*
 //Esto es para que todo lo que se escriba en minusculas se haga mayusculas//
function inicio(){
   
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
        console.log(this.value);
    },true);
    
    //Que la funcion regrese el mesaje escrito//
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    }, true);

    document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento)
    },true);

}

 //Hacer el cifrado y el descifrado creo que esta parte se hace en el cipher js//

 function cifrar(texto, desplazamiento){

    
        
 }*/

 document.getElementById("mensaje").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
    //console.log(this.value);
});

document.getElementById("cifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    let textoCifrado = document.getElementById("mensaje2");
    console.log(cipher.encode(texto, desplazamiento));
    textoCifrado.value = cipher.encode(texto, desplazamiento);


    
   
});

document.getElementById("descifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let desplazamiento = document.getElementById("desplazamiento").value;
    let textoCifrado = document.getElementById("mensaje2").value;
    cipher.decode(texto, desplazamiento, textoCifrado);


})


 //const cifrar = document.querySelector('#cifrar');
 //const descifrar = document.querySelector('#descifrar');

 //descifrar.addEventListener('click', e => {

 //})


document.getElementById("cifrar").addEventListener("click", function(){
    console.log("prueba")
})
 //console.log(resultado + "prueba");

 //document.getElementById("mensaje2").innerHTML = resultado ;


