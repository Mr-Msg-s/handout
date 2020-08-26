module.exports = {
  'zh': [
    { text: 'Java', 
      icon: 'reco-api',
      items: [
        { 
          text: 'Java基础', items: [
            { text: '语法入门', link: '/views/java/1_intro/' },
            { text: '面向对象', link: '/views/java/2_oop/' },
            { text: '高级特性', link: '/views/java/3_core/' }
          ],
        },
        {
          text: 'Java Web开发', items: [
            { text: '数据库MySQL', link: '1' },
            { text: '前端基础', link: '2' },
            { text: 'Web API', link: '3' }
          ]
        },
        {
          text: 'Java 框架开发', items: [
            { text: 'MyBatis', link: '1' },
            { text: 'Spring', link: '2' },
            { text: 'Spring MVC', link: '3' },
            { text: 'Spring Boot', link: '4' }
          ]
        },
        {
          text: '微服务架构开发', items: [
            { text: '基于Dubbo', link: '1' },
            { text: 'Spring Cloud', link: '2' }
          ]
        }
      ]
    },
    { text: 'Python', 
      icon: 'reco-api',
      items: [
        { 
          text: 'Pygame从入门到精通', link: '/views/python/pygame/'
        },
        {
          text: 'Python基础', items: [
            { text: '语法入门', link: '/views/python/1_intro/' }
          ]
        }
      ]
    },
    { text: '产品设计', 
      icon: 'reco-blog',
      items: [
        { 
          text: 'Axure原型设计', link: '/views/pm/axure4prototype/'
        }
      ]
    },
    { text: '小程序', link: '/views/categories/', icon: 'reco-blog'},
    { text: '大数据', link: '/views/bigdata/', icon: 'reco-category'},
    { text: '杂文', link: '/views/other/', icon: 'reco-rss'},
    { text: '支持查老师', link: '/views/support/', icon: 'reco-sticky'},
  ]
}