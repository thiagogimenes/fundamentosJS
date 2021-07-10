//function expression
const increment1 = function(n) {
    return n + 1
}

//utilizando uma função arrow (sempre é uma função anomima)
const increment2 = (n) => {
    return n + 1
}

//esta função recebe apenas um parametro, não há necessidade de parenteses
const increment3 = n => {
    return n + 1
}

//redução de código | palavra return está implicita | sempre usar o return quando estiver entre chaves

const increment4 = n =>  n + 1

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

//Quando informando na função dois parâmetros é necessário colocar entre parenteses
const sum = (a, b) => a + b
console.log(sum(3, 7))