//题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。
// 例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
function shuixianhua() {
    for (i = 100; i <= 999; i++) {
        let nums = i.toString().split('');
        let sum = 0;
        for (let num of nums) {
            sum += parseInt(num) * parseInt(num) * parseInt(num);
        }
        if (i === sum)
            console.log(i);
    }
}


function shuixianhua2() {
    for (let i = 100; i <= 999; i++) {
        a = parseInt(i / 100);
        b = parseInt(i / 10 - a * 10);
        c = i - (a * 100 + b * 10);
        if (i == a * a * a + b * b * b + c * c * c)
            console.log(i);
    }
}

//test
shuixianhua();
console.log('\n')
shuixianhua2();
