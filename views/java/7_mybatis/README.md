---
title: 引言
date: 2020-05-18
---

**C：** 在Java Web开发中，我们将后台开发分为了三层/四层架构，分别是`表现层`、`业务层`、`持久层`。`持久层`中最初我们使用原生JDBC来进行数据库操作，代码实现简直不要太"啰嗦"。后来随着学习深入，我们对原生JDBC进行了封装，也就是所谓的`DAO(Data Access Object)模式`，通过接口、实现类、实体类、数据库连接和关闭工具类、以及封装公用增删改查操作来实现持久层的代码优化。

但即使这样，DAO模式内还是要编写大量的SQL语句，并且还要处理好Java对象和SQL语句/数据库的映射(设值和取值)关系，下面是我截取的一段没有封装常用操作的DAO模式代码，你感受一下。

```java
/**
 * 根据条件查询宠物
 */
public List<Pet> findByParams(Map<String,Object> params) throws Exception {
    // 获取连接对象
    Connection conn = BaseDao.getConnection();
    
    // SQL语句拼接
    StringBuffer sqlBuffer = new StringBuffer(" select * from pet where 1 = 1 ");
    // 参数拼接
    List<Object> params = new ArrayList<>();
    // 根据store_id查询
    if(EmptyUtils.isNotEmpty(params.get("store_id"))){
        sqlBuffer.append(" and store_id = ? ");
        params.add(params.get("store_id"));
    }
    // 根据name模糊查询
    if(EmptyUtils.isNotEmpty(params.get("name"))){
        sqlBuffer.append(" and name like CONCAT('%',?,'%') ");
        params.add(params.get("name"));
    }
    // .......
    
    // 参数赋值
    PreparedStatement ps = conn.prepareStatement(sqlBuffer.toString());
    for(int i = 0; i < params.size(); i++){
		ps.setObject((i+1), params.get(i));
    }
    // 解析结果集
    ResultSet rs = ps.executeQuery();
    List<Pet> petList = new ArrayList<>();
    while(rs.next()) {
        Pet pet = new Pet(
            rs.getInt("id"),
            rs.getInt("owner_id"),
            rs.getInt("store_id"),
            rs.getString("name"),
            rs.getString("type_name"),
            rs.getInt("health"),
            rs.getInt("love"),
            rs.getDate("birthday")
        );
        petList.add(pet);
    }
    
    // 释放资源
    BaseDao.closeAll(conn, ps, rs);
    return petList;
}
```

有"麻烦"，自然就要考虑更优的解决方案，在行业内随之诞生了大量的持久层框架，比较有名的例如：Hibernate、JPA、MyBatis、MyBatis Plus等，各有各的优劣势，在此我不谈论它们的区别(以后专门抽一章节来谈谈)，只说一个现象：在国内来讲MyBatis系列应用相对广泛，所以那没什么好说的了，直接学吧？

开玩笑的，其实MyBatis在国内应用广泛的原因是因为相对于Hibernate等，它可以更加灵活的编写SQL语句，对于需求变动比较频繁，业务比较复杂，高并发要求较高的应用，优势显而易见。国内这两年互联网发展的挺快，互联网用户群体基数大，而国外人群规模相对较少，相比于国内开发者，他们更关注实现效率而非极致的性能。

好了，那么从本阶段我们就开始学习`MyBatis`吧。

### 反馈交流
如果在阅读学习中遇到什么问题，或者发现了什么不得了的Bug，可以在 码云上提 [Issues](https://gitee.com/Charles7c/handout/issues) ，或者给查老师发送邮件进行沟通charles7c@126.com
