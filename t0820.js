/*
判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}
 */

function findMost(str) {
    let itemcount = {};
    let chs = [];
    let arr = str.split('');
    arr.forEach(function (item) {
        if (itemcount.hasOwnProperty(item))
            itemcount[item]++;
        else {
            itemcount[item] = 1;
            chs.push(item);
        }
    });
    let max = itemcount[chs[0]];
    chs.forEach(function (item) {
        if (itemcount[item] > max)
            max = itemcount[item];
    });
    let result = {};
    chs.forEach(function (item) {
        if (itemcount[item] == max)
            result[item] = max;
    });
    console.log(`${str}  =>`);
    console.log(result);
}

//test
findMost('abcsbaddbizdbas');
findMost('aaaaabbdbdbb');
