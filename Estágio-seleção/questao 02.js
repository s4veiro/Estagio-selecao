function isFibonacci(num){
    if(num < 0){
        return false;
    }
    let a = 0;
    let b = 1;

    while(b < num){
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;


}

const resultado = isFibonacci(10);

if (resultado) {
    console.log("Esse número pertence à sequência Fibonacci.");
} else {
    console.log("Esse número NÃO pertence à sequência Fibonacci.");
}