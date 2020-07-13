(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(s,t,a){"use strict";a.r(t);var v=a(43),e=Object(v.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"位置匹配对应的练习题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位置匹配对应的练习题"}},[s._v("#")]),s._v(" 位置匹配对应的练习题")]),s._v(" "),a("h2",{attrs:{id:"验证密码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证密码问题"}},[s._v("#")]),s._v(" 验证密码问题")]),s._v(" "),a("ul",[a("li",[s._v("规则一：密码长度 6-12 位，由数字、小写字母和大写字母组成")]),s._v(" "),a("li",[s._v("规则二：至少包括 2 种字符。")])]),s._v(" "),a("h4",{attrs:{id:"step-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[s._v("#")]),s._v(" step 1")]),s._v(" "),a("p",[s._v("先写出满足规则一的正则表达式：")]),s._v(" "),a("p",[s._v("横向匹配：长度使用量词 {m,n} 即可；\n纵向匹配：数字、小写字母、大写字母；")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regexp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/[0-9a-zA-Z]{6,12}/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h4",{attrs:{id:"step-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[s._v("#")]),s._v(" step 2")]),s._v(" "),a("p",[s._v("判断包含某一种字符串？")]),s._v(" "),a("p",[s._v("假设要求必须包含数字，该怎么使用正则进行判断呢？")]),s._v(" "),a("p",[s._v("我首先想到的是量词 "),a("code",[s._v("+")]),s._v(", 即至少出现一次")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regexp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/[0-9]+/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regexp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/[0-9]{1,12}/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("但是这种方式不能和 step 1 中的正则表达式合并起来，只能按照顺序逐个检测是否符合规则。"),a("br"),s._v("\n(这里不考虑最笨的暴力枚举)")]),s._v(" "),a("p",[s._v("作者的思路是通过位置来进行判断，即 "),a("code",[s._v("(?=.*[0-9])")])]),s._v(" "),a("p",[s._v("为什么这个正则表达式可以呢？我们来分析下：")]),s._v(" "),a("p",[s._v("这里使用了正向先行断言，子模式是"),a("code",[s._v(".*[0-9]")]),s._v(", 其中")]),s._v(" "),a("ul",[a("li",[a("code",[s._v(".*")]),s._v(" 表示任意字符出现任意次"),a("br"),s._v("\n和 "),a("code",[s._v("[0-9a-zA-Z]{0,11}")]),s._v(" 的作用相同")]),s._v(" "),a("li",[a("code",[s._v("[0-9]")]),s._v(" 表示数字")])]),s._v(" "),a("p",[s._v("合并起来字面意思就是：寻找位于"),a("strong",[s._v("任意字符 + 数字")]),s._v("前面的位置。")]),s._v(" "),a("p",[s._v("翻译成符合人类思维就是：匹配的结果的"),a("strong",[s._v("前面部分")]),s._v("应该是 "),a("strong",[s._v("任意字符 + 数字")]),s._v(" 这种形式。")]),s._v(" "),a("p",[a("strong",[s._v("前面部分")]),s._v("是"),a("strong",[s._v("任意字符 + 数字")]),s._v(" 可以是下面的组合：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("数字开头"),a("br"),s._v("\n1234ab")])]),s._v(" "),a("li",[a("p",[s._v("数字不开头"),a("br"),s._v("\nab1234")])]),s._v(" "),a("li",[a("p",[s._v("数字结尾"),a("br"),s._v("\n1234ab12"),a("br"),s._v("\nab12345")])]),s._v(" "),a("li",[a("p",[s._v("数字不结尾"),a("br"),s._v("\n1234ab"),a("br"),s._v("\nab1234ee")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);