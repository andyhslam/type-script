"use strict";
exports.__esModule = true;
// 命名空间中通过export将想要暴露的部分导出
// 如果不用export导出，是无法读取其值的
var namespace2_1 = require("./namespace2");
var A;
(function (A) {
    A.a = 1;
})(A || (A = {}));
console.log(A.a);
// 嵌套命名空间
var C;
(function (C) {
    var D;
    (function (D) {
        D.d = 3;
    })(D = C.D || (C.D = {}));
})(C || (C = {}));
// 简化命名空间
var CDd = C.D.d;
console.log(CDd, namespace2_1.B);
