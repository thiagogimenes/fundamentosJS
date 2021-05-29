// Function declaration - forma tradicional de criar funções no JS

// função que não recebe nenhum parametro e não retorna nada
function sayHello() {
    console.log('Hello!')
}
//necessário invocar a função 
sayHello()

//função que recebe parametro, mas não retorna nada
function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}
//valor com $ está interpolando a invocação
sayHelloTo('Mike')

// função que não recebe parametro, mas retorna alguma coisa.
function returnHi() {
    return 'Hi!'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

// função que recebe parametro e retorna alguma coisa.
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'))