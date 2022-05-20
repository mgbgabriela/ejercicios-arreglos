let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let sumav: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese el valor v1 [" + indice + "]"));
  
}  
for (indice = 0; indice < 6; indice++) {
    v2[indice] = Number(prompt("Ingrese el valor v2 [" + indice + "]"));
}

    for (indice= 0; indice <6; indice++){
      sumav[indice]=v1[indice]+v2[indice];

      console.log("suma["+indice+"]="+sumav[indice]);
    }
}
