

let matriz = new Array([1, 2, -1], [6, 5, 4], [-9, 8, 9]);
console.log("___________")

let diagonalDescendente = 0;

for ( let i = 0; i < matriz.length; ++i){
    console.log(matriz[i][i])
    diagonalDescendente = diagonalDescendente + matriz[i][i]
}

console.log("==================")

let auxiliarColumna = 0;
let diagonalAscendente = 0;

for ( let i = matriz.length -1; i >= 0; --i){
    console.log(matriz[i][auxiliarColumna]);
    diagonalAscendente = diagonalAscendente + matriz[i][auxiliarColumna]
    auxiliarColumna = auxiliarColumna + 1;
}

let diferenciaDiagonal = (diagonalAscendente) - (diagonalDescendente);
console.log(diferenciaDiagonal);

let valorAbsoluto = Math.abs(diferenciaDiagonal);
console.log(valorAbsoluto);





