module.exports = {
    title: 'Vue3知识学习',
    description: 'Vue3知识学习',
	base: '/vue3-start/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
	themeConfig:{
		nav:[
			{text: '首页', link: '/'},
			{text: 'github', link: 'http://www.baidu.com'},
		],
		sidebar:[
			['/test/', '测试页面']
		]
	},
	plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}