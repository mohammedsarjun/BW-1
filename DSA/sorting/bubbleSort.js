let arr = [2, 31, 234, -6, 3, 221, 2];


function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
}

//Best Time Complexity : O(n) if swapped flag used
//Avg Time Complexity : O(n²)
//Worst Time Complexity : O(n²)
bubbleSort(arr)


