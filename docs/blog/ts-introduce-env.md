# Typescript简介和环境配置
## 什么是TypeScript
TypeScript是JavaScript的一个超集，主要提供了类型系统和对ES6的支持，它由Microsoft开发，代码开源于GitHub上。
## Typescript环境配置
TypeScript 的命令行工具安装方法如下：
```js
npm install -g typescript
```
验证是否安装成功，执行命令
```js
tsc
```
编译tsc文件，执行命令
```js
tsc hello.ts
```
TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。但仍会生成编译之后的文件。
例如，在hello.ts文件中
```js
function person(name: string) {
  return 'hello' + name
};
let name1 = 'xiaoming';
person(name);
```
```js
function person(name: string) {
  return 'hello' + name
};
let name1 = [1,2,3];
person(name);
```
执行编译命令```tsc hello.ts```,编译后的文件都是
```js
function person(name) {
    return 'hello' + name;
}
;
var name1 = [1, 2, 3];
person(name1);
```
只不过第二种会出现报错提示
```js
hello.ts:5:8 - error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```
