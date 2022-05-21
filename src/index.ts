/* Invertir Arreglo
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

let nro: number[] =  new Array(dimension);
let dimension : number[] =  new Array();
let indice : number;
let cadena : string = "";


dimension = Number (prompt("Ingrese la cantidad");

for (indice=0; indice < dimension ; indice ++) {
  nro[indice] = Number (prompt ("ingrese un numero"));
  
}
for (indice = dimension-1; indice>=0 ; indice--){
  cadena = cadena + nro [indice]+ " ";


 
}
console.log("Los numeros ingresados son " + cadena + " ");
