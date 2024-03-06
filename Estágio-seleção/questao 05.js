function reverseString(str){
    let resultado = '';
    for(let i = str.length - 1; i--;){
        resultado += str[i];
    }
    return resultado;
}

console.log(reverseString('Paralelepipedo'));