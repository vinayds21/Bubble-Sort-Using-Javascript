//Recursive Bubble Sort

const recursiveBubbleSort = (arr, n) => {
  //If there is only single element 
  //the return the array
  if(n == 1){
    return arr;
  }
  
  //Swap the elements by comparing them
  for(let j = 0; j < n - 1; j++){
    if(arr[j] > arr[j + 1]){
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
  
  //Recursively call the function to sort.
  return recursiveBubbleSort(arr, n-1);
}

export default recursiveBubbleSort;
