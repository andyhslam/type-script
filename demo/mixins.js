var people1 = { name: 'lx' };
var people2 = { age: 30 };
var people3 = { sex: 'female' };
// 此时 people4 会被推断成一个交差类型 Name & Age & sex;
var people4 = Object.assign(people1, people2, people3);
// console.log(people1);
// console.log(people4);
// 2.类的混入
// 首先声明两个mixins类 （严格模式要关闭不然编译不过）
var Adt = /** @class */ (function () {
    function Adt() {
    }
    Adt.prototype.changeType = function () {
        this.type = !this.type;
    };
    return Adt;
}());
var Bgm = /** @class */ (function () {
    function Bgm() {
    }
    Bgm.prototype.getName = function () {
        return this.name;
    };
    return Bgm;
}());
// 定义实现类：没使用extends而是使用implements。 把类当成接口
var Cat = /** @class */ (function () {
    function Cat() {
        // 为将要mixin进来的属性方法创建出占位属性
        this.type = false;
        this.name = 'lx';
    }
    return Cat;
}());
// 创建帮助函数，做混入操作。它会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码
// Object.getOwnPropertyNames()获取对象自身的属性；除去它继承来的属性，对它所有的属性遍历，它是一个数组，遍历它所有的属性名
mixins(Cat, [Adt, Bgm]);
function mixins(curCls, itemCls) {
    itemCls.forEach(function (item) {
        // console.log(item);
        Object.getOwnPropertyNames(item.prototype).forEach(function (name) {
            // console.log(name);
            curCls.prototype[name] = item.prototype[name];
        });
    });
}
var cba = new Cat();
console.log(cba.type);
cba.changeType();
console.log(cba.type);
