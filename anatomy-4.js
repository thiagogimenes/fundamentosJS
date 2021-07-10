//Anonymous function
//IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(function (a, b, c) {
    let x = 300
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})();

//Function do tipo IIFE utilizando arrow
(() => {
    console.log('arrow #01')
})();

//utilizando apenas uma linha de código
(() => console.log('arrow #02'))();