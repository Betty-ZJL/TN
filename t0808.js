//题目：将一个正整数分解质因数。 例如：输入90,打印出90=2335。
function zhiyinshu(n) {
    let i = 2;
    let flag = 1;
    let result=`${n}=`;
    while (flag) {
        if (n == i) {
            result+=i;
            flag = 0;
        } 
        else if (n % i == 0) {
            result+=i;
            n = n / i;
        } 
        else {
            i = i + 1;
        }
    }
    console.log(result);
}

//test
zhiyinshu(90);
