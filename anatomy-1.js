// Function declaration

// função que não recebe nenhum parametro e não retorna nada
function sayHello() {
    console.log('Hello!')
}

sayHello()

//função que recebe parametro, mas não retorna nada
function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

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