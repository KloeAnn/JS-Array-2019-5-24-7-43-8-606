// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO

console.log(a instanceof Array)
console.log(b instanceof Array)

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(i in a){
    a[i]=a[i]*2
}
console.log(a)

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "))
console.log(colors.join("+"))
console.log(colors.join(","))


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for(var i=0; i<a.length; i++){
    for(var j=i; j<a.length; j++){
        if(a[i]<a[j]){
            max=a[j];
            a[j]=a[i];
            a[i]=max;
        }
    }
}
console.log(a)

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr) {
    if (!arr.length) return
    if (arr.length === 1) return 1
    var res = {}
    // 遍历数组
    for (var i=0,l=arr.length;i<l;i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1
        } else {
            res[arr[i]]++
        }
    }
    var keys = Object.keys(res)
    var maxNum = 0, maxEle
    for (var i=0,l = keys.length;i<l;i++) {
        if (res[keys[i]] > maxNum) {
            maxNum = res[keys[i]]
            maxEle = keys[i]
        }
    }
    return maxEle
}
console.log(findMost(a))
