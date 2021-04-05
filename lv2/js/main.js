var textCalculador = document.getElementById("text-calculador");
var textFormula = document.getElementById("text-formula");
var textResultado = document.getElementById("text-resultado");
var punto = document.getElementById("punto");
var borrar = document.getElementById("borrar");
var reiniciar = document.getElementById("reiniciar");
var botones = document.querySelectorAll('.basicos > button');
var botonesEspeciales = document.querySelectorAll('.especial');
var operadorActivo = false;
var num1 = "";
var borrarTextFormula = false;

for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", ()=>{
        textFormula.value += botones[i].value;
        
        if((textFormula.value == "") || ( botones[i].value== "=") || ( botones[i].value== "x") || ( botones[i].value== "/") || (botones[i].value== "+") || (botones[i].value== "-") || (botones[i].value== ".")){
            desactivarOperadores();
            if(botones[i].value != "="){
                console.log(operadorActivo);
                if( (num1=="") && (operadorActivo == false)){
                    if (botones[i].value != "."){
                        operadorActivo = true;
                        num1 = textCalculador.value;
                        textCalculador.value = "";
                        operador =  botones[i].value;
                    }else{
                        
                        textCalculador.value += botones[i].value;
                    }
                    
                }else if(botones[i].value != "."){
                    console.log("hora de sumar2");
                    console.log("el operador es: ", operador);
                    console.log(num1, operador, textCalculador.value, "=");
                    console.log("calcular1");
                    calcular(num1, operador, textCalculador.value);
                    textCalculador.value = "";
                   

                    num1 = "";
                    console.log(num1);
                }else{
                    textCalculador.value += botones[i].value;
                }
                
            }else{
                console.log("hora de sumar");
                console.log("el operador es: ", operador);
                console.log(num1, operador, textCalculador.value, "=");
                textFormula.value = textFormula.value.substring(0, textFormula.value.length - 1);
                
                textCalculador.value = calcular(num1, operador, textCalculador.value);
                textFormula.value += " = " + textCalculador.value;
                borrarFormula(textFormula.value.length, textFormula.value);
                num1 = "";
                activarOperadores();
            }   
            
        }else{
            activarOperadores();
            textCalculador.value += botones[i].value;
        }
        despermitirPunto();
    }); 
   
}
borrar.addEventListener("click", ()=>{
    console.log("borrar")
    textFormula.value = textFormula.value.substring(0, textFormula.value.length - 1);
    textCalculador.value = textCalculador.value.substring(0, textCalculador.value.length - 1);
});
reiniciar.addEventListener("click", ()=>{
    console.log("reiniciar")
    textFormula.value = "";
    textResultado.value = "";
    textCalculador.value = "";
    operadorActivo = false;
    num1 = "";
    borrarTextFormula = false;
    desactivarOperadores();
});

function desactivarOperadores(){
    for(let i = 0; i < botonesEspeciales.length; i++){
        botonesEspeciales[i].disabled = true;
    }
}
function activarOperadores(){
    for(let i = 0; i < botonesEspeciales.length; i++){
        botonesEspeciales[i].disabled = false;
        if((operadorActivo == false)&&(botonesEspeciales[i].value == "=")&&(textCalculador !="")){
            console.log(operadorActivo, botonesEspeciales[i].value , textCalculador.value)
            botonesEspeciales[i].disabled = true;
        }
    }
}
function calcular(num1, operador, num2){
    switch (operador){
        case "+":
            num1 = parseInt(num1) + parseInt(num2);
            break;
        case "/":
            num1 = num1 / num2;
            break;
        case "-":
            num1 = num1 - num2;
            break;
        case "x":
            num1 = num1 * num2;
            break;
    }
    console.log("resultado: ", num1);
    textResultado.value = num1;
    operadorActivo = false;
    return num1;
}
function borrarFormula(largo, valor){
    for(var i = 0; i < largo; i++){
        if(valor[i] == "="){
            if(borrarTextFormula == true){
                i += 2;
                nuevoValue = valor.substring(i, largo);
                textFormula.value = nuevoValue;
                console.log("nuevo valor: ", nuevoValue)
                console.log("valor de I: ", i);
                break;
            }else{
                borrarTextFormula = true;
                console.log("borrar cambiado a True")
            }
        }
    }
}
function despermitirPunto(){
    text = textCalculador.value;
    for(var i = 0; i < textCalculador.value.length; i++){
        if(text[i] == "."){
            punto.disabled = true;
        }
    }
}

    
