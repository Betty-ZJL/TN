//给定一个未排序的整数数组，找到其中位数。
function findMedian(arr) {
    let arrSorted = arr.sort(function (a, b) {
        return a - b;
    });
    let len = arrSorted.length;
    console.log(`[${arr}]的中位数是：`);
    return (arrSorted[parseInt(len / 2)] + arrSorted[parseInt((len - 1) / 2)]) / 2;
}

//test
console.log(findMedian([1, 4, 3, 2, 5, 7, 6]));
console.log(findMedian([1, 3, 5, 4, 2, 6]));
