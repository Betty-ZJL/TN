/*
计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
 */

function find(num1, num2) {
    let result = [];
    for (let i = 0; i < num1.length; i++) {
        let n = i;
        result[i] = '';
        for (let j = 0; j < num2.length; j++) {
            if (num1[n] == num2[j]) {
                result[i] += num1[n];
                n++;
            }
        }
    }
    console.log(`[${num1}]和[${num2}]的交数组为：`);
    let maxLengthIndex = 0;
    result.forEach(function (value, index) {
        if (value.length > result[maxLengthIndex])
            maxLengthIndex = index;
    });
    console.log(`[${result[maxLengthIndex].split('')}]`);
    result.forEach(function (item) {
        if (item.length > 1 && (!result.includes(item)))
            console.log(`[${result[maxLengthIndex].split('')}]`);
    });
}

//test
find([1, 2, 2, 1], [2, 2])
find([1, 2, 2, 1], [1, 1, 2, 2])
