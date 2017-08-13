//给定一个未排序的整数数组，找到其中位数。
function findMedian(arr) {
    console.log(`[${arr}]的中位数是：`);
    arr.sort(function (a, b) {return a - b});
    let len = arr.length;
    return (arr[parseInt(len / 2)] + arr[parseInt((len - 1) / 2)]) / 2;
}

//test
console.log(findMedian([1, 4, 3, 6, 5, 7, 2]));
console.log(findMedian([1, 3, 5, 4, 2, 6]));
