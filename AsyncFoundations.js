/*
    Nested Async Callbacks (this leads to 콜백헬)

    Disadvantages
    1. it's hard to read
    2. logic is difficult to reason about
    3. it's not modular
*/

// let counter = 0;
// setTimeout(() => {
//     counter++;
//     console.log(`Counter : ${counter}`);
//     setTimeout( () => {
//         counter++
//         console.log(`Counter : ${counter}`);
//         setTimeout( () => { 
//             counter++
//             console.log(`Counter : ${counter}`);
//         }, 3000)
//     }, 2000)
// }, 1000)

/*
 Returning a Promise: Promise Chaining
*/
let randomInt;
const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 500)
});

promise.then( data => {
    console.log(`Random int passed to resolve: ${data}`);
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(Math.floor(Math.random() * 10));
        }, 3000)
    });
})
.then( data => {
    console.log(`Second random int passed to resolve: ${data}`);
});