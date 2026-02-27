let arr = [2, 31, 234, -6, 3, 221, 2];

function selectionSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let minIndex=i
    for (j = i + 1; j < arr.length; j++) {
      if(arr[minIndex]>arr[j]){
        minIndex=j
      }
    }

    if(minIndex!=i){
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
  }

  console.log(arr);
}

//Best Case: O(n²)
//Avg Case: O(n²)
//Worst Case : O(n²)

selectionSort(arr);
