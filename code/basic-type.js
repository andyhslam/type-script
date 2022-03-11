var str = 'TS';
var muban = "web ".concat(str);
console.log(muban);
var num = Infinity;
console.log(num);
var b = true;
var ba = Boolean(1);
var bao = new Boolean(1);
console.log(ba);
// 4.空值类型
var uv = undefined;
var nv = null;
console.log(uv, nv);
function fnVoid() {
    console.log(123);
}
fnVoid();
// 5.null和undefined类型
var u = undefined;
var n = null;
// void和undefined和null的最大区别
// undefined和null是所有类型的子类型，也就是说undefined和null类型的变量，可以赋值给其它类型的变量；而void类型的不能。
var v = undefined;
var s = '123';
s = v;
