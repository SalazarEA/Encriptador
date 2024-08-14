function ocultar(){
    var muneco = document.querySelector("#ocultar");
    var respuesta = document.querySelector("#mostrar_resultado")
    if(muneco.style.visibility === "hidden"){
        muneco.style.visibility = "visible";

    }else{
        muneco.style.visibility = "hidden";
        respuesta.style.visibility = "visible";

    }
 
}

function borrar(){
    var borrarTexto = document.querySelector("#encriptar");
      borrarTexto.value = "";

}


function encriptar(){
    var parrafo = document.querySelector("#encriptar").value;
    var remplazo = parrafo.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    document.querySelector("#result").value = remplazo;
    document.querySelector("#encriptar").value;
    
    ocultar();
    borrar();
    
}


function desencriptar(){
    var parrafo = document.querySelector("#encriptar").value;
    var remplazo = parrafo.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    document.querySelector("#result").value = remplazo;
    document.querySelector("#encriptar").value;

    borrar();
}



function copiarTexto(){
    var textoACopiar = document.querySelector("#result").value;
    try {
        navigator.clipboard.writeText(textoACopiar);
        console.log('contenido copiado' + textoACopiar);

    }catch(err){
        console.log('error al copiar', err);
    }

    ocultar();
    borrar();     

}

