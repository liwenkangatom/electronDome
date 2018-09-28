var a = '这是3000毫秒之前'
console.log(a)
setTimeout(() => {
    a= '这是3000毫秒之后'
    console.log(a)
}, 3000);
a = '这是之后'
const demo = (backfun) => {
    a = '这是函数里面'
    backfun(a)
}
demo()