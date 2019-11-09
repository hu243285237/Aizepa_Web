<template>
  <el-container>
    <el-main>
      <!-- 联系我们 -->
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
          <p class="menu-title">联系我们</p>
          <el-menu-item index="1" @click="select('联系方式')">联系方式</el-menu-item>
          <el-menu-item index="2" @click="select('人才招聘')">人才招聘</el-menu-item>
          <el-menu-item index="3" @click="select('网站留言')">网站留言</el-menu-item>
        </el-menu>
        <div class="solution">
          <div v-for="item in currentSub" :key="item.name">
            <p class="solution-content">{{ item.text }}</p>
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
          name: '联系方式',
          content: [
            {
              name: 'title01',
              img: SR_010,
              text: '深圳市晟瑞实业有限公司' +
              '\n地址：深圳市龙岗区坂雪岗大道3012号坂田商务大厦726室' +
              '\n电话：0755-85207786' +
              '\n传真：0755-85207781' +
              '\n邮箱：jack.wang@aizepa.com'
            }
          ]
        },
        {
          name: '人才招聘',
          content: [
            {
              name: 'title01',
              img: SR_010,
              text: '职位名称：硬件助理' +
              '\n招聘人数：1位' +
              '\n岗位要求：' +
              '\n1.大专以上学历，电子通信类等相关专业。' +
              '\n2.能熟练使用烙铁，风枪，万用表，示波器等调试工具。' +
              '\n3.熟练产品可靠性测试流程和验证标准,熟悉硬件产品的生产流程,组装工艺,SMT生产工艺,了解硬件的测试方法。' +
              '\n4.能看懂原理图和PCB,会使用PADS和ORCAD等软件。' +
              '\n岗位职责:' +
              '\n1.协助硬件工程师的硬件调试,测试等相关工作。' +
              '\n2.负责公司简单的PCB和原理图制作,BOM制作和管理。' +
              '\n3.跟硬件工程师一起负责公司一些物料的测试和认证。' +
              '\n4.硬件工程师组装样机,调试样机,定制组装标准。' +
              '\n5.解决客户生产过程中的问题,解决一些简单的硬件问题。' +
              '\n6.服从领导安排其它工作，性格开朗，工作沉稳细致，具备出色的沟通能力和执行能力，有较强的团队合作精神与责任心。' +
              '\n\n'
            },
            {
              name: 'title02',
              img: SR_010,
              text: '职位名称：PE工程师' +
              '\n招聘人数：1位' +
              '\n岗位要求：' +
              '\n1.  较强的焊接能力（QFN、0603、0402焊接能力）。' +
              '\n2.  有数模电路、信号与系统基础知识，有基本的调试和问题解决能力；' +
              '\n3、工作责任感强，有较好的钻研精神和团队合作意识；' +
              '\n4、大专及以上学历，通信、计算机、电子等相关专业；1年以上相关工作经验；' +
              '\n5、动手能力强，有电子产品维修经验最佳；' +
              '\n6、会使用PADS、Protel、orCAD等EDA软件，能做一些简单PCB设计；' +
              '\n岗位职责：' +
              '\n1、协助工程师进行前期设计工作的开展，机型新器件打样测试、验证等工作。' +
              '\n2、协助工程师焊接样板和调试样机，及相应BOM制作和贴片资料整理。' +
              '\n3、在工程师的指导下，进行简单电路原理图和PCBLAYOUT工作。' +
              '\n4、完成项目负责人安排的硬件相关工作。' +
              '\n\n'
            },
            {
              name: 'title03',
              img: SR_010,
              text: '职位名称： 业务跟单' +
              '\n招聘人数：1人' +
              '\n岗位要求：' +
              '\n1、年龄20-35岁； 大专以上学历；' +
              '\n2、有1年以上销售跟单或电子行业从业经验；' +
              '\n3、有较强的沟通能力，勤恳愿意付出，有较好的执行力，有团队精神；' +
              '\n岗位职责：' +
              '\n1、处理公司客户的订单、安排备货计划，整个订单出货跟踪直至货物顺利交给客户。' +
              '\n2、根据相应的账期与客户对账，催款及跟进货款回收事宜。' +
              '\n3、与客户保持联系，了解客户需求，建立长期共赢的客户合作关系。' +
              '\n4、做好售后服务工作，并将相关的信息传递到公司的相关部门。' +
              '\n5、按照公司的销售跟单流程，完成公司下达的销售跟单业务。' +
              '\n6、配合上级下达的措施、销售计划和目标，并积极行动。' +
              '\n7、与各同事相互融合，提升公司和谐的工作氛围。' +
              '\n\n'
            }
          ]
        },
        {
          name: '网站留言',
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
      case '联系方式': this.def = '1'; break
      case '人才招聘': this.def = '2'; break
      case '网站留言': this.def = '3'; break
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
  height: 1000px;
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
  white-space: pre-wrap;
}
</style>
