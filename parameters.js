//definindo uma função com 3 parametros.
function logParams(a, b, c) {
    console.log(a, b, c)
}

//O javascript permite criar uma função com 3 parametros, mas passar 2 ou menos ou também 3 ou mais. Desta forma serão atribuídos "undefined" para os parametros não definidos.
logParams(1, 2, 3)
logParams(1, 2, 3, 4, 5)
logParams(1, 2)
logParams(1)
//passar também um parametro vazio
logParams()

//Criando uma função atribuindo valores 
function defaultParams(a = 1, b = 4, c = 0) {
    console.log(a,b,c)
}

//se passar o parametro vazio, será atribuido o parametro padrão. Caso passar algum parametro será atribuido o valor no lugar do padrão. Caso passar parametros a mais serão exibidos somente 3.
defaultParams(2,3,5,6,7,8)

//atribuindo uma quantidade flexisivel de parametros.
// spread/rest
function logNums(...nums) {
    console.log(nums)
}

logNums(1,2,3,4,5,6)