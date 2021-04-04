let botones = document.querySelectorAll("button");
var textarea = document.getElementById("textarea");
var pressOperador = false;
for (let i = 0; i < botones.length; i++){

    botones[i].addEventListener("click", ()=>{
        if((botones[i].value == "=") && (operador)){
            if(textarea.value != ""){
                
                textarea.value = resultado((num1), (operador), (textarea.value));
            }
        }
        else if((botones[i].value == "/") ||  (botones[i].value == "+") ||  (botones[i].value == "*") ||  (botones[i].value == "-")){
            
            num1 = textarea.value;
            if(num1 != ""){
                if (pressOperador == false){
                    pressOperador = true;
                    operador = botones[i].value;
                    console.log(num1 + operador +"tu operador");
                    textarea.value = "";  
                }else{
                    console.log(num1, operador, textarea.value);
                    resultado((num1), (operador), (textarea.value));
                    operador = botones[i].value;
                }
            }
            
        }
        else{
            console.log(botones[i].value);
            textarea.value += botones[i].value;
        }
    });
}
function resultado(num1, operador,value){
    switch (operador) {
        case "/":  num1 = num1 / value;
                break
        case "*":  num1 = num1 * value;
                break
        case "-":  num1 = num1 - value;
                break
        case "+":  num1 = parseInt(num1) + parseInt(value);
                break
    }
    pressOperador = false;
    console.log("EL RESULTADO ES: " + num1);
    return num1;
}
