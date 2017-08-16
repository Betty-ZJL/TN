//题目：找出数组 arr 中重复出现过的元素
//例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
function findCF(arr) {
    console.log(`[${arr}]中重复的元素有：`);
    arr = arr.filter((str) => {
        return arr.indexOf(str) != arr.lastIndexOf(str)
    });
    return arr.splice(arr.length / 2, arr.length);
}

//test
console.log(findCF(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']));
