module.exports = {
  type: 'HomePageOne',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: '最后更新时间', // string | boolean
  // 作者
  author: '查老师',
  authorAvatar: '/head.png',
  // 备案号
  record: '京ICP备20003712号',
  // 项目开始时间
  startYear: '2019',
  algolia: {
    apiKey: '',
    indexName: 'handout-charles7c'
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // valine 设置
  valineConfig: {
    appId: 'TcTDALg0KK16rRB8uaLRXweF-gzGzoHsz',
    appKey: 'Dobny2eERApIjK2s0RDVsHrx',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, // 
    recordIP: true,
    showComment: false
  },
  // vssueConfig: {
  //   admins: ['recoluan'],
  //   platform: 'github',
  //   owner: 'vuepress-reco',
  //   repo: 'vuepress-reco.github.io',
  //   clientId: '4d81cea3b3d8aac8e88e',
  //   clientSecret: 'd23e8556b6d3c85abffbf4b8d853afb2ea08875a',
  // },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'charles7c/handout',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'pages-source',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'light',
  codeTheme: 'tomorrow'
}