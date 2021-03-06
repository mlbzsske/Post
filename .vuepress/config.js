module.exports = {
  title: 'T-T',
  description: 'fengT-T的Github Page',
  dest: 'docs',
  base: '/Post/',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: 'auto',
    nav: [
      { text: 'JavaScript', link: '/JavaScript/' },
      { text: 'Other', link: '/Other/' },
      {
        text: '科学装逼', 
        items: [
          { text: '编程装逼技巧', link: '/装逼/' },
          { text: 'web装逼技巧', link: '/web/' }
        ]
      },
      { text: 'CoCoMusic', link: 'https://github.com/xtuJSer/CoCoMusic' },
    ]
  },
  plugins: [
    [ 
      '@vuepress/google-analytics',
      {
        'ga': 'UA-136247470-1'
      }
    ]  
  ],
  evergreen: true
}