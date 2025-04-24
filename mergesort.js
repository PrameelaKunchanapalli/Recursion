// Merge function to combine sorted arrays
function merge(left, right) {
    const sorted = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
  
    return [...sorted, ...left, ...right];
  }
  
  // Merge Sort Recursive
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  // Test cases
  console.log("Merge Sort:");
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
  console.log(mergeSort([105, 79, 100, 110]));      
  