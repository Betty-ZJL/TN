/*
给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
给定 [1,2,[1,2]]，返回 [1,2,1,2]。
给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。
 */

// 方法一
function includeArr(item) {
    for (let it of item)
        if (Array.isArray(it))
            return true;
    return false;
}

function change(arr) {
    while (includeArr(arr)) {
        let result = [];
        arr.forEach(function (item) {
            if (Array.isArray(item))
                item.forEach(function (value) {
                    result.push(value);
                });
            else
                result.push(item);
        });
        arr = result;
    }
    console.log(arr);
}

//test
change([1, 2, [1, 2]]);
change([1, 2, [1, 2], [3, 4]]);
change([4, [3, [2, 1]]]);


// 方法二
function flatten(arr) {
    arr = [].concat(...arr);
    return arr.some(Array.isArray) ? flatten(arr) : arr;
}

//test
console.log(flatten([1, 2, [1, 2]]));
console.log(flatten([1, 2, [1, 2], [3, 4]]));
console.log(flatten([4, [3, [2, 1]]]));

