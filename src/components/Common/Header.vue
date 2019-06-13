<template>
  <div class="header">
    <el-container>
      <el-header height="80px">
        <a class="icon" href="#">
          <img width="150px" height="50px" src="../../assets/Images/Logo/logo.jpg">
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
            <template slot="title">产品中心</template>
            <el-menu-item index="2-1">工业路由</el-menu-item>
            <el-menu-item index="2-2">网关CPE</el-menu-item>
            <el-menu-item index="2-3">车载产品</el-menu-item>
            <el-menu-item index="2-4">定位器</el-menu-item>
            <el-menu-item index="2-5">远程管理平台</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">解决方案</el-menu-item>
          <el-menu-item index="4">服务支持</el-menu-item>
          <el-menu-item index="5">公司介绍</el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
  </div>
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
  margin-left: 240px;
  margin-right: 240px;
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
</style>
