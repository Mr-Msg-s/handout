module.exports = {
  'zh': Object.assign({}, {
    '/views/java/1_intro/': getJavaIntroSidebar('Java语法入门'),
    '/views/java/2_oop/': getJavaOOPSidebar('Java面向对象'),
    '/views/java/3_core/': getJavaCoreSidebar('Java高级特性'),
    '/views/python/pygame/': getPythonPygameSidebar('Pygame从入门到精通'),
    '/views/python/1_intro/': getPythonIntroSidebar('Python语法入门'),
    '/views/pm/axure4prototype/': getPmAxureSidebar('Axure原型设计'),
    '/views/bigdata/': getBigDataSidebar(),
    '/views/other/': getOtherSidebar(),
    '/views/support/': getSupportSidebar()
  })
}
function getJavaIntroSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'day01_初识Java',
        'day02_变量和数据类型',
        'day03_选择结构',
        'day04_循环结构',
        'day05_综合复习',
        'day06_多重循环及程序调试',
        'day07_一维数组',
        'day08_二维数组',
        'day09_项目实战-吃货联盟'
      ]
    },
    {
      title: '附录',
      collapsable: false,
      children: [
        '初识Java附录_JDK安装',
        '变量和数据类型附录_Eclipse初识',
        'Java基础R_常用资源清单'
      ]
    }
  ]
}

function getJavaOOPSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}

function getJavaCoreSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'Java基础X_Lombok入门',
        '集合框架附录_List面试题'
      ]
    }
  ]
}

function getPmAxureSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'Axure介绍',
        'Axure安装、汉化'
      ]
    }
  ]
}

function getBigDataSidebar(){
  return [
    '',
    '1_项目整体介绍',
    '2_召回模块核心算法讲解',
    '3_排序模块核心算法讲解',
    '4_推荐流程详解(上)',
    '5_推荐流程详解(中)',
    '6_推荐流程详解(下)'
  ]
}

function getOtherSidebar(){
  return [
    '',
    '杂文_汇集名校课，助你成良木'
  ]
}

function getSupportSidebar(){
  return [
    ''
  ]
}

function getPythonPygameSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'day01_Pygame起步'
      ]
    }
  ]
}

function getPythonIntroSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'day01_初识Python'
      ]
    }
  ]
}