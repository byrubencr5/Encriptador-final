function encriptar(){

    var texto = document.getElementById("areaString").value;

    if(/[A-Z]/.test(texto)){
        alert("Ingrese solo minusculas!");
        location.reload();
    }

    var encryp="";

    for(var i=0; i<texto.length; i++){
        var aux="";
        
        if(texto[i]=='e'){
            aux="enter";
            
        }else if(texto[i]=='i'){
            aux="imes";

        }else if(texto[i]=='a'){
            aux="ai";
        
        }else if(texto[i]=='o'){
            aux="ober";
        
        }else if(texto[i]=='u'){
            aux="ufat";
        
        }else{
            aux=texto[i];
        }

        encryp+=aux;
    }
    console.log(encryp);

    var textOut = document.getElementById("salidaTXT")
    var placehold = document.getElementById("placeholder");

    textOut.textContent = encryp;
    textOut.style.backgroundImage = "none";
    placehold.style.display = "none";
}

function desencriptar(){
    var texto = document.getElementById("areaString").value;

    if(/[A-Z]/.test(texto)){
        alert("Ingrese solo minusculas!");
        location.reload();
    }

    var desencryp="";

    for(var i=0; i<texto.length; i++){
        var aux="";

        if(texto[i]=='e' && texto[i+1]=='n' && texto[i+2]=='t' && texto[i+3]=='e' && texto[i+4]=='r'){
            var aux="e";
            i+=4;
        }else if(texto[i]=='i' && texto[i+1]=='m' && texto[i+2]=='e' && texto[i+3]=='s'){
            var aux="i";
            i+=3;
        }else if(texto[i]=='a' && texto[i+1]=='i'){
            var aux="a";
            i+=1;
        }else if(texto[i]=='o' && texto[i+1]=='b' && texto[i+2]=='e' && texto[i+3]=='r'){
            var aux="o";
            i+=3;
        }else if(texto[i]=='u' && texto[i+1]=='f' && texto[i+2]=='a' && texto[i+3]=='t'){
            var aux="u";
            i+=3;
        }else{
            aux=texto[i];
        }

        desencryp+=aux;
    }
    console.log(desencryp);
    
    var textOut = document.getElementById("salidaTXT")
    var placehold = document.getElementById("placeholder");

    textOut.textContent = desencryp;
    textOut.style.backgroundImage = "none";
    placehold.style.display = "none";
}

function copiartxt(){

    var auxInp = document.createElement("input");
    document.body.appendChild(auxInp);

    var copiado = document.getElementById("salidaTXT").textContent;
    auxInp.value = copiado;
    auxInp.select();
    auxInp.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(auxInp);
}