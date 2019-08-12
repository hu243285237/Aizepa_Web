<template>
  <el-container>
    <el-main>
      <!-- 轮播图 -->
      <el-carousel trigger="click" height="480px">
        <el-carousel-item v-for="img in background_imgs" :key="img">
          <img :src="img">
        </el-carousel-item>
      </el-carousel>
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
            <img class="list-img" :src="item.img">
            <p class="solution-content">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import background01 from '../../assets/Images/Carousel/background01.jpg'
import background02 from '../../assets/Images/Carousel/background02.jpg'
import background03 from '../../assets/Images/Carousel/background03.jpg'
import luyou11 from '../../assets/Images/Product/Type01/luyou01.jpg'
import luyou22 from '../../assets/Images/Product/Type01/luyou02.jpg'
import luyou33 from '../../assets/Images/Product/Type01/luyou03.jpg'

export default {
  data () {
    return {
      def: '1',
      background_imgs: [
        background01,
        background02,
        background03
      ],
      // 列表
      array: [
        {
          name: '公司动态',
          content: [
            {
              name: 'title01',
              img: luyou11,
              text: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字'
            },
            {
              name: 'title02',
              img: luyou22,
              text: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字'
            },
            {
              name: 'title03',
              img: luyou33,
              text: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字'
            }
          ]
        },
        {
          name: '行业新闻',
          content: [
            {
              name: 'title01',
              img: luyou33,
              text: '内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字'
            },
            {
              name: 'title02',
              img: luyou11,
              text: '内容文字内容文字内容字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字'
            },
            {
              name: 'title03',
              img: luyou22,
              text: '字内容文文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字,内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字'
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
