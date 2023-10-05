// const count = false;

// let promise = new Promise(function(resolve, reject){
//     if (count){
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value.");
//     }
// });
// console.log(promise);

let countValue = new Promise(function (resolve, reject) {
    reject('Promise Rejected.');
});

// Executes when promise is resolved successfully.

countValue
    .then(function successValue(result) {
        console.log(result);
    },
)

.catch(
    function errorValue(result) {
        console.log(result)
    }
)

.finally(
    function greet() {
        console.log('This code is executed.')
    }
)

