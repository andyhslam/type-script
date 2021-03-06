// 抽离命名空间：把命名空间抽离成一个文件
export namespace B {
  export const a = 2;
}

// 我们在工作中无法避免全局变量造成的污染，TypeScript提供了namespace 避免这个问题出现
// 1. 内部模块，主要用于组织代码，避免命名冲突。
// 2. 命名空间内的类默认私有
// 3. 通过 export 暴露
// 4. 通过 namespace 关键字定义

// TypeScript与ECMAScript2015一样，任何包含顶级import或者export的文件都被当成一个模块。
// 相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的（因此对模块也是可见的）