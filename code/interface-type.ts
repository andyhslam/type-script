// 两个接口(interface)名称一样会合并的
interface Person {
  gender: string,
  func(): number,
  cb(): void,
}
// 可选属性：可选式操作符?
// 任意属性 [propName: string]
// 联合类型：|
// 注意：一旦定义任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// readonly 只读属性是不允许被赋值的，只能读取
interface Person {
  age?: number,
  readonly name: string,
  salary: string | number,
  [propName: string]: any,
}

// 用接口定义一个对象
const man:Person = {
  gender: 'Male',
  name: 'lx',
  age: 20,
  salary: 10000,
  zyn: 'ivu',
  func: (): number => 123,
  cb: () => {
    console.log(100);
  }
}

console.log(man);

// 接口组合使用
interface A {
  name: string
}
interface B extends A{
  age: number
}
let p:B = {
  name: 'zm',
  age: 18
}

