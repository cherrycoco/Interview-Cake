// recursion O(n^n)
// const fibonacci = (n) => {
//   if (n === 0) {
//     return 0;
//   }

//   if (n === 1 || n === 2) {
//     return 1;
//   }

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// iterative O(n)
// const fibonacci = (n) => {
//   let result = [0, 1, 1];
//   if (n === 0) return 0;
//   if (n === 1 || n === 2) return 1;

//   for (let i = 3; i <= n; i++) {
//     result[i] = result[i - 1] + result[i - 2];
//   }

//   return result[n];
// }

const cacheFibonacci = (n) => {
  let cache = [0, 1, 1];

  const fib = (n) => {
    if (cache[n]) {
      return cache[n];
    }

    return cache[n] = fib(n - 1) + fib(n - 2);
  }
  
  return fib;
}


console.log(cacheFibonacci()(5));


