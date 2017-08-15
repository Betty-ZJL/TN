/*
题目：统计数组 arr 中值等于 item 的元素出现的次数。
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2。
要求：不要使用for循环
 */

function count(arr, item) {
    return arr.filter(function (i) {
        return i === item
    }).length;
}

//test
console.log(count([1, 3, 7, 1, 4,], 1));
