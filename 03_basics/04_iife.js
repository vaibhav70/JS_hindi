// immediately invoked function expression
// used for eliminating the pollution of the global scope
let arg = "hello guys";


(function chai() {
    //named iife
    console.log('db connected');
})();



((arg1) => {console.log(`${arg1}`)})(arg);
