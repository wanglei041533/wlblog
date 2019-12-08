# 数据类型
## 原始数据类型
主要学习了五种原始数据类型：包括布尔值、数字、字符串、null、undefined。
### 布尔
```js
let isOK: boolean = false; // 正确 
let isFinish: boolean = new Boolean(1); // 这种方式不对，通过new关键字创建的都是对象类型
```
### 数值
```js
let num: number = 6;
```
### 字符串
```js
let str: number = 'xiaoming';
```
### 空值
JavaScript没有空值（Void）的概念，在TypeScript中，可以用void表示没有任何返回值的函数。
```js
function person(name: string): void {
  console.log(name);
};
```
Null 和 Undefined
```js
let u: undefined = undefined;
let n: null = null;
```
undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给number类型的变量。
```js
let n: number = undefined;
```

## 任意值
任意值（any）表示可以赋值为任意类型的数值。
```js
let data: any = 'xiaoming';
data = 3;

```
变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。
```js
let something; // 等价于 let something: any
```
如果变量在声明的时候赋值但为制定类型，默认是赋值的类型。
```js
let something = 'xiaoming'; // 等价于 let something: string = 'xiaoming';
```

## 联合类型
联合类型表示取值可以为多种类型中的一种。
```js
let number: string | number;
number = 'one';
number = 1;
```
联合类型并不确定是哪一种类型，所以只能访问这些类型共有的属性或者方法
```js
function getLength(something: string | number): number {
  return something.length; // 会报错，因为number没有length属性
}

function getString(something: string | number): string {
  return something.toString(); // 正确，toString()是公共方法
}
```

## 对象的类型 -- 接口
在TypeScript中，使用接口（Interfaces）来定义对象的类型。
```js
interface Person {
  name: string;
  age: number;
}
// 形状必须和接口一致，属性方法不能多，也不能少
// 接口名称一般大写
let xiaoming: Person = {
  name: 'xiaoming',
  age: 18
}
```
### 可选属性
有时候不需要和接口形状完全一致，此时可用可选属性
```js
interface Person {
  name: string;
  age?: number;
}
let tom: Person = {
  name:'xiaoming'
  // age属性可以没有，但是仍然不能出现接口中未定义的其他属性
}
```
### 任意属性
需要任意的属性，可以用如下方式定义
```js
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom: Person = {
  name: 'xiaoming',
  sex: 'man'
}
```
一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
```js
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}
let tom: Person = {
  name: 'xiaoming',
  age: 14,
  sex: 'man' // 报错，任意属性是string类型，其他属性也要是string类型，age类型是number
}
```

### 只读属性
属性只能在创建的时候赋值，用readonly定义
```js
interface Person {
  readonly name: string;
}
let tom: Person = {
  name: 'xiaoming'
}
tom.name = 'haha'; // 报错，只能在对象创建的时候赋值
```

## 数组类型
```js
let arr1: numner[] = [1,2,3,4];
let arr2: Array<number> = [1,2,3,4];
let arr3: any[] = ['sdfsdf',1,{}];
```