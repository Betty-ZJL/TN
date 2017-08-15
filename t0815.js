/*
题目：统计数组 arr 中值等于 item 的元素出现的次数。
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2。
要求：不要使用for循环
 */

function count(arr, item) {
    let n = arr.filter(function (i) {
        return i === item
    }).length;
    console.log(`[${arr}]中${item}出现的次数为：${n}`);
}

//test
count([1, 3, 7, 1, 4,], 1);
