// Iterative Fibonacci
function fibs(n) {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n); 
  }
  
  console.log("Iterative Fibonacci (fibs):");
  console.log(fibs(10));
  
  // Recursive Fibonacci
  function fibsRec(n) {
    console.log("This was printed recursively");
  
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
  
    const arr = fibsRec(n - 1);
    return [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
  }
  
  console.log("Recursive Fibonacci (fibsRec):");
  console.log(fibsRec(10));
  