//题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。
function findNum(arr) {
    for (let num of arr) {
        if (arr.indexOf(num) == arr.lastIndexOf(num)) {
            console.log(`[${arr}]中只出现一次的数字是：${num}`);
            break;
        }
    }
}

//test
findNum([1, 2, 1, 3, 2]);
