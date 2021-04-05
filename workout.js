// function sumCurry(...a) {
//     return function () {
//         const sum1 = a.reduce((acc, next) => acc + next, 0)
//         const argsArr = []
//         Object.keys(arguments).forEach(a => argsArr.push(arguments[a]))
//         const sum2 = argsArr.length > 0 && argsArr.reduce((acc, next) => acc + next, 0)
//         return arguments.length === 0 ? a : sumCurry(sum1 + sum2)
//     }
// }

// console.log(sumCurry(1)(2)(3)(4)(5, 4, 5)())