<template>
  <el-container>
    <el-main>
      <!-- 新闻资讯 -->
      <div class="content">
        <el-menu
        :default-active="def"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
          <p class="menu-title">新闻资讯</p>
          <el-menu-item index="1" @click="select('公司动态')">公司动态</el-menu-item>
          <el-menu-item index="2" @click="select('行业新闻')">行业新闻</el-menu-item>
        </el-menu>
        <div class="solution">
          <div v-for="item in currentSub" :key="item.name">
            <!-- <img class="list-img" :src="item.img">
            <p class="solution-content">{{ item.text }}</p> -->
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import SR_010 from '../../assets/Images/Product/苹果 OTG 转接线/SR-010.png'

export default {
  data () {
    return {
      def: '1',
      // 列表
      array: [
        {
          name: '公司动态',
          content: [
            {
              name: 'title01',
              img: SR_010,
              text: ''
            },
            {
              name: 'title02',
              img: SR_010,
              text: ''
            },
            {
              name: 'title03',
              img: SR_010,
              text: ''
            }
          ]
        },
        {
          name: '行业新闻',
          content: [
            {
              name: 'title01',
              img: SR_010,
              text: ''
            },
            {
              name: 'title02',
              img: SR_010,
              text: ''
            },
            {
              name: 'title03',
              img: SR_010,
              text: ''
            }
          ]
        }
      ],
      // 当前选择的列表
      current: {},
      currentSub: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 给予名称来选择
    select (name) {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].name === name) {
          this.current = this.array[i]
          this.currentSub = this.current.content
        }
      }
    }
  },
  mounted () {
    let name = this.$route.params.name
    this.select(name)
    switch (name) {
      case '公司动态': this.def = '1'; break
      case '行业新闻': this.def = '2'; break
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

.el-main {
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  padding: 0px;
  overflow: hidden;
}

.content {
  width: 100%;
  height: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.el-menu {
  width: 300px;
  height: 100%;
  float: left;
}

.menu-title {
  color: white;
  font-size: 26px;
  margin: 0px 0px 10px 0px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #363636;
}

.el-menu-item {
  font-size: 16px;
}

.solution {
  height: 100%;
  margin-left: 320px;
  margin-right: 20px;
}

.solution-title {
  font-size: 26px;
  font-weight: 600;
}

.solution-content {
  text-align: left;
}

.list-img {
  width: 200px;
  height: 100px;
  float: left;
}
</style>
