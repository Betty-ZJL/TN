/*
数组去重
例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
 */

function deleteCHong(arr) {
    let result = [];
    arr.forEach(function (value) {
        if (!result.includes(value))
            result.push(value)
    });
    console.log(`[${arr}]=>[${result}]`);
}

//test
deleteCHong(['s', 'a', 's', 'b', 'a', 1, '1', 1]);
