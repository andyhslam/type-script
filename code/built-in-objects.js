// ECMAScript的内置对象：Boolean、Number、string、RegExp、Date、Error
var reg = /^2/;
var d = new Date();
var err = new Error('错误');
// DOM 和 BOM 的内置对象：Document、HTMLElement、Event、NodeList 等
var list = document.querySelectorAll('#list li');
var body = document.body;
var div = document.querySelector('div');
console.log(div);
document.body.addEventListener('click', function (e) {
    console.log(e);
});
// 定义Promise：如果我们不指定返回的类型TS是推断不出来返回的是什么类型
function promise() {
    return new Promise(function (resolve, reject) {
        resolve(1);
    });
}
promise().then(function (res) {
    console.log(res);
});
