function fbo(n){
    let list=[0,1];
    for(let i=2;i<n;i++){
       list.push(list[i-1]+list[i-2])
    }
    console.log(`斐波纳契数列的前 ${n} 个数字是：${list}`);
    console.log(`斐波纳契数列中第 ${n} 个数是：${list[n-1]}`);
}

//test
fbo(10);
