//题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function deleteVal(str, val) {
    let result = [];
    let arr = str.split('->');
    for (let item of arr)
        if (item != val)
            result.push(item);
    return result.join('->');
}

//test
console.log(deleteVal('1->2->3->3->4->5->3', 3));
