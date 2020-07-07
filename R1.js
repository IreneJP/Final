/*Construye una función “calculadora()” que reciba como parámetros de entrada: • Tipo de operación • Operadores (siempre 2 operadores para hacerlo más sencillo).
Las operaciones permitidas son: suma (“sum”), resta (“subs”), multiplicación (“mult”) y división (“div”). 
Dependiendo del identificador de la operación, y los parámetros de entrada, la función debe decidir qué operación realizar y devolvernos un resultado válido.
*/


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
// esto es un comentario para el reto2 de GIT