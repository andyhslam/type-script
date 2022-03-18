// TS进阶用法Record & Readonly
type Person3 = {
  name: string;
  age: number;
  text: string;
}
type readonly = Readonly<Person3>

// 源码实现
type ReadonlyOne<T> = {
  readonly [P in keyof T]: T[P];
};

// keyof T 等价于 type key = 'name' | 'age' | 'text'


// 源码实现
type RecordOne<K extends keyof any, T> = {
  [P in K]: T;
};

// keyof any 等价于 type key = string | number | symbol(内部定义的)

type K = 'A' | 2 | 'C'
type record = Record<K, Person3> // 使用Record约束对象的键和值
const obj1: record = {
  A: { name: 'lx', age: 18, text: '巾帼枭雄' },
  2: { name: 'zw', age: 20, text: '巾帼枭雄' },
  C: { name: 'zyn', age: 22, text: '巾帼枭雄' },
}