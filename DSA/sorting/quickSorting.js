let arr = [2, 31, 234, -6, 3, 221, 2];

function quickSort(arr){
    if(arr.length<2) return arr

    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)]
}
//Avg Case: O(n log(n))
//Worst Case: O(n²)

console.log(quickSort(arr))