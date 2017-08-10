//题目：查找斐波纳契数列中第 N 个数。

//第一种方法
function fbo(n) {
    let list = [0, 1];
    for (let i = 2; i < n; i++)
        list.push(list[i - 1] + list[i - 2]);
    if (n == 1) list = [0];
    console.log(`斐波纳契数列的前 ${n} 个数字是：${list}`);
    console.log(`斐波纳契数列中第 ${n} 个数是：${list[n - 1]}\n`);
}

//test
fbo(10);


//第二种方法
function fbo2(n) {
    let a = 0, b = 1, c;
    for (let i = 0; i < n - 2; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    if (n == 1) c = a;
    if (n == 2) c = b;
    console.log(`斐波纳契数列中第 ${n} 个数是：${c}`);
}

//test
fbo2(10);
