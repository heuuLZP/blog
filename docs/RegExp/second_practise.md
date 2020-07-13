# 位置匹配对应的练习题

## 验证密码问题

- 规则一：密码长度 6-12 位，由数字、小写字母和大写字母组成
- 规则二：至少包括 2 种字符。

#### step 1

先写出满足规则一的正则表达式：

横向匹配：长度使用量词 {m,n} 即可；
纵向匹配：数字、小写字母、大写字母；

```js
const regexp = /[0-9a-zA-Z]{6,12}/;
```

#### step 2

判断包含某一种字符串？

假设要求必须包含数字，该怎么使用正则进行判断呢？

我首先想到的是量词 `+`, 即至少出现一次

```js
const regexp = /[0-9]+/;
```

或者

```js
const regexp = /[0-9]{1,12}/;
```

但是这种方式不能和 step 1 中的正则表达式合并起来，只能按照顺序逐个检测是否符合规则。   
(这里不考虑最笨的暴力枚举)

作者的思路是通过位置来进行判断，即 `(?=.*[0-9])`

为什么这个正则表达式可以呢？我们来分析下：

这里使用了正向先行断言，子模式是`.*[0-9]`, 其中
- `.*` 表示任意字符出现任意次   
  和 `[0-9a-zA-Z]{0,11}` 的作用相同
- `[0-9]` 表示数字

合并起来字面意思就是：寻找位于**任意字符 + 数字**前面的位置。

翻译成符合人类思维就是：匹配的结果的**前面部分**应该是 **任意字符 + 数字** 这种形式。

**前面部分**是**任意字符 + 数字** 可以是下面的组合：

- 数字开头   
  1234ab

- 数字不开头   
  ab1234

- 数字结尾   
  1234ab12   
  ab12345

- 数字不结尾   
  1234ab   
  ab1234ee