let arr = [2, 31, 234, -6, 3, 221, 2];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (i != minIndex) {
      [arr[minIndex], arr[i]]=[arr[i],arr[minIndex]]
    }
  }

  console.log(arr)
}

//Best Case: O(n²)
//Avg Case: O(n²)
//Worst Case : O(n²)

selectionSort(arr);
