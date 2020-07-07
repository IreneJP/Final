<<<<<<< HEAD
//Quito la function, y dejo solo este comentario 
=======


function calculadora (tipoOperacion, operador1, operador2 ){
if (tipoOperacion == "suma"){
    var sum = operador1 + operador2;;
    return sum
} else if (tipoOperacion == "resta"){
    var subs = operador1 - operador2; 
    return subs
} else if (tipoOperacion == "division"){
    var div= operador1 / operador2;
    return div
} else if (tipoOperacion == "multiplicacion"){
    var mult = operador1 * operador2;
    return mult
}}


calculadora("multiplicacion", 5, 4);
console.log(calculadora("multiplicacion", 5, 4))
>>>>>>> rama2
