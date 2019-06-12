<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
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
/* .el-menu > .el-menu-item {
  float: right;
} */
</style>
