let arr = [2, 31, 234, -6, 3, 221, 2];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = nti;
  }

  console.log(arr);
}

//Best Time Complexity : O(n)
//Avg Time Complexity : O(n²)
//Worst Time Complexity : O(n²)
insertionSort(arr);
