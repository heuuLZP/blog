module.exports = {
  base: '/blog/',
  title: '前端知识体系',
  description: '将零碎知识归纳、整合成完成的框架体系',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '正则表达式', link: '/RegExp/' },
    ],
    sidebar: {
      '/RegExp/': [
        ['', '学习笔记'], /* /RegExp/README.html */
        ['first', '第一章：字符匹配'], /* /RegExp/first.html */
        ['first_practise', '第一章练习册'], /* /RegExp/first_practise.html */
        ['second', '第二章：位置匹配'], /* /RegExp/first.html */
        ['second_practise', '第二章练习册'], /* /RegExp/second_practise.html */
        ['third', '第三章：括号的作用'], /* /RegExp/third.html */
        ['third_practise', '第三章练习册'], /* /RegExp/third_practise.html */
        ['fourthly', '第四章：回朔法原理'], /* /RegExp/fourthly.html */
      ]
    }
  }
}
