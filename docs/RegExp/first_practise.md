# 字符匹配对应的练习题

正则类的问题可以拆解成固定的套路：`纵向模糊匹配` + `横向模糊匹配`。

对应到具体知识点就是：`元字符`、`字符组`、`量词`、`分支结构`。

## 一、16 进制颜色值

给定字符串(以下字符串中不一定都是正确的十六进制)

```
#ffbbad #f1234 #Fc01DF #FFF #ffE
```

要求匹配正确的十六进制颜色值。

分析：

1.起始字符是`#`   
2.十六进制的字符范围是 `0-9`, `a-f`, `A-F`   
  根据纵向模糊匹配，可以使用字符组： `[0-9a-fA-F]`
3.字符只能是 `3` 位或者 `6` 位
  根据横向模糊匹配，可以使用量词和分支结构

:candy: 
```js
var regex = /(#[0-9a-fA-F]{6})|((#[0-9a-fA-F]{3})\s)|(#[0-9a-fA-F]{3}$)/g;
var string = "#ffbbad #f1234 #Fc01DF #FFF #ffE";
console.log( string.match(regex) );
// => ["#ffbbad", "#Fc01DF", "#FFF ", "#ffE"]
```

**勘误**

书中给出的正则表达式是 `/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g`，这个是不够准确的，因为当字符串中含有不正确的十六进制时，就会匹配到意外的情况。

比如 `#f1234` ，因为只有5位，所以这是个错误的十六进制颜色值，但是用书中的正则表达式会匹配出来 `#f12`, 这是不符合期望的。

为什么会匹配出来 `#f12`?   
答：因为分支结构是惰性的，所以优先匹配出现6次的字符`[0-9a-fA-F]{6}`，`#f1234` 中除了 `#` 只有5个字符，所以不满足规则，继续匹配出现3次的字符`[0-9a-fA-F]{3}`，`#f1234` 中具有满足此规则的字符串`#f12`，所以就匹配到了。


**优化**

我的正则中使用了 `\s` 和 `$` 这两个元字符：
- `(#[0-9a-fA-F]{3})\s`
  在后面加上 `\s` 的作用就是，确保3位的16进制颜色值后面必须是一个空格，这样就能避免把4位或者5位，截断成3位。
- `(#[0-9a-fA-F]{3})$`
  在后面加上 `$` 的作用就是，确保3位的16进制颜色值后面是字符串的结尾，避免遗漏最后一个匹配结果。

## 二、匹配时间

以 24 小时制为例。

要求匹配：
```
23:59
02:07
```

分析：

1.数字的范围是`0-9`
2.第一位只能是`0`、`1`、`2`
3.第二位依赖于第一位的选择：
- [0][0-9]
- [1][0-9]
- [2][0-3]

汇总为 [01][0-9]|[2][0-3]

4.第三位[0-5]
5.第四位[0-9]

:candy: 
```js
var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( regex.test("23:59") );
console.log( regex.test("02:07") );
// => true
// => true
```

如果也要求匹配 "7:9", 也就是说时分前面的 "0" 可以忽略。


:candy: 
```js
var regex = /^([2][0-3]|1[0-9]|0?[0-9]):([1-5][0-9]|0?[0-9])$/;
console.log( regex.test("23:59") );
console.log( regex.test("02:07") );
console.log( regex.test("7:9") );
// => true
// => true
// => true
```

## 三、匹配日期

以 `yyyy-mm-dd` 格式为例。

要求匹配:

```
2017-06-10
```

分析：
1.年 [0-9]{4}
但实际上 1970 之前的年份用的场景比较少，这里就只考虑 1970 以及之后的年份。

[1][9][7-9][0-9]|[2-9][0-9]{3}

2.月：01-12
[0][1-9]|[1][0-2]

3.天：每个月的天数是不一样的

[0][1-9]|[12][0-9]|[3][01]

这个其实还是不够准确的，因为每个月天数不一样，后续会补充一个更完整的。


:candy: 
```js
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log( regex.test("2017-06-10") );
// => true
```

## 四、匹配id

要求从

```html
<div id="container" class="main"></div>
```

提取出 `id="container"`

分析：

1.整体可以看成是id="x"，其中只有 x 是变量，所以进一步分析 x   
2.id 的值   
- id 的值不得包含空白字符（whitespace，包括空格和制表符等）
- 使用除 ASCII 字母、数字、_、- 和 . 以外的字符可能会造成兼容性问题，因为 HTML 4 中不允许使用它们。虽然这个限制在 HTML5 中被解除了，但为兼容性考虑 ID 应该以字母开头。

通过上述描述可以发现，x 推荐的值是 `ASCII 字母`、`数字`、`_`、`-` 和 `.`组合而成的


:candy: 
```js
var regex = /id="([-_a-zA-Z0-9\.])*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container"
```

但是一般id 的值可以用 `.` 来匹配，因为可以默认id的值是正确的。

注意：`*` 是贪婪匹配，`.` 可以匹配到 `"`，所以会把 class 也匹配进来，只要变成惰性模式就行了

:candy: 
```js
var regex = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container"
```


另外一种方法，使用脱字符`^`,把 `"` 排除

:candy: 
```js
var regex = /id="[^"]*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// => id="container"
```