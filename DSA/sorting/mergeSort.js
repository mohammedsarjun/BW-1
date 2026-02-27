let arr = [2, 31, 234, -6, 3, 221, 2];

function mergeSort(arr){

    if(arr.length<2)return arr

    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid)
    let rightArr=arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){

    let sortedArr=[]
    while(leftArr.length&&rightArr.length){

        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr,...leftArr,...rightArr]

}
//Best Case: O(n log(n))
//Avg Case: O(n log(n))
//Worst Case : O(n log(n))
console.log(mergeSort(arr))