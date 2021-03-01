# 括号的作用

括号提供了分组
- 在 JavaScript 里引用
- 在正则表达式里引用

## 3-1 分组和分支结构

强调括号内的正则是一个整体，即提供子表达式。

## 3-2 分组引用

### 3.2.1 提取、替换数据

## 3-3 反向引用

`\1`、`\2`、`\3`、`\4` ... `\10` 等等

括号嵌套的规则：以左边括号为准

避免引用不存在的分组，否则将会匹配反向引用的字符本身，比如'\1' 在此时代表的是对1转义。

分组后面有量词：分组最终捕获到的数据是最后一次的匹配。

## 3-4 非捕获括号

如果不想要括号的分组功能，可以使用非捕获括号 `(?:p)` 和 `(?:p1|p2|p3)`

括号里面开始位置的`?:` 只是表示这个括号不再捕获分组。

