<template>
  <el-header height="80px">
    <a class="icon" href="#">
      <img width="80px" height="50px" src="../../assets/Images/Logo/logo2.png">
      <span class="title">深圳市晟瑞实业有限公司</span>
    </a>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#000000"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">关于我们</template>
        <el-menu-item index="2-1">公司简介</el-menu-item>
        <el-menu-item index="2-2">公司文化</el-menu-item>
        <el-menu-item index="2-3">公司使命</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">产品中心</template>
        <el-menu-item index="3-1">车载产品</el-menu-item>
        <el-menu-item index="3-2">工业路由/DTU</el-menu-item>
        <el-menu-item index="3-3">网关&CPE</el-menu-item>
        <el-menu-item index="3-4">定位器</el-menu-item>
        <el-menu-item index="3-5">消费类</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">解决方案</template>
        <el-menu-item index="4-1">车载 T-BOX方案</el-menu-item>
        <el-menu-item index="4-2">智慧交通解决方案</el-menu-item>
        <el-menu-item index="4-3">能源监测解决方案</el-menu-item>
        <el-menu-item index="4-4">化工管道监控解决方案</el-menu-item>
        <el-menu-item index="4-5">电梯物联网解决方案</el-menu-item>
      </el-submenu>
      <el-menu-item index="5">新闻资讯</el-menu-item>
      <el-submenu index="6">
        <template slot="title">联系我们</template>
        <el-menu-item index="6-1">联系方式</el-menu-item>
        <el-menu-item index="6-2">人才招聘</el-menu-item>
        <el-menu-item index="6-3">网站留言</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-header {
  margin-left: 10%;
  margin-right: 10%;
}

.icon {
  height: inherit;
  float: left;
}

.icon > img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.el-menu {
  height: 65px;
  float: right;
  top: 50%;
  transform: translateY(-50%);
}

.title {
  color:black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0px;
  margin-left: 10px;
}

a {
  text-decoration: none;
}
</style>
