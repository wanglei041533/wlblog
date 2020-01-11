module.exports = {
  title: 'wl的博客',
  description: '欢迎访问我的前端日志',
  // editLinks: true,
  // editLinkText: "本文源码地址",
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  markdown: { //markdown
    lineNumbers: true //显示行号
  },
  themeConfig: {
    repo: 'wanglei041533/wlblog',
    lastUpdated: '更新时间',
    nav: [
      { text: '学习心得', link: '/blog/' },
      { text: '面试总结', link: '/interview/' },
      // { text: 'Github', link: 'https://github.com/wanglei041533/wlblog' }
    ],
    sidebar: {
      '/blog/': [
        {
          title: 'Linux',
          collapsable: false,
          children: [
            'linux'
          ]
        },
        {
          title: 'TypeScript',
          collapsable: false,
          children: [
            'ts-introduce-env',
            'ts-data-types'
          ]
        },
        {
          title: 'php',
          collapsable: false,
          children: [
            'php'
          ]
        },
        {
          title: 'Node.js',
          collapsable: false,
          children: [
            'node'
          ]
        }
      ],
      '/interview/': [
        {
          title:'js面试题',
          collapsable: false,
          children: [
           'js-amd-cmd'
          ]
        },
        {
          title:'css面试题',
          collapsable: false,
          children: [
          
          ]
        },
        {
          title:'html面试题',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title:'框架面试题',
          collapsable: false,
          children: [
           
          ]
        }
      ]
    }
  }
}