// 类的修饰符：public private protected
// 使用public 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public
// 使用 private 修饰符 代表定义的变量是私有的，只能在内部访问 不能在外部访问
// 使用 protected 修饰符 代表定义的变量是私有的，只能在内部和继承的子类中访问 不能在外部访问
class Person {
  public age: number = 0
  private name: string
  protected sub: boolean
  static height: string = '180cm'
  constructor(name, age, sub) {
    this.name = name;
    this.age = age;
    this.sub = sub;
    Person.run();
  }
  static run() {
    this.height; // 静态方法内部只能访问静态属性，不能访问构造函数的内部属性(变量)
    return 234;
  }
  // 两个静态方法是可以互相调用的
  static build() {
    this.run();
    return 'build';
  }
}
class Man extends Person {
  constructor() {
    super('lx', 20, false);
    this.sub
  }
}
console.log(Person.height); // 通过类名直接访问其静态属性
console.log(Person.run()); // 通过类名直接访问其静态方法
let p = new Person('lx', 20, false);


// 通过接口去约束类
interface School {
  set(): void
}
interface Teacher {
  run(type: boolean): boolean
}
class A {
  params: string
  constructor(params) {
    this.params = params;
  }
}
// extends: class的继承；implements：约束class的类型
class Student extends A implements School,Teacher {
  run(type: boolean): boolean {
    return type;
  }
  set() {

  }
}
