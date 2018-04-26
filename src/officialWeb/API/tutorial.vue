<template>
  <div class="jf-tutorial-page">
    <div class="jf-tutorial-nav">
      <router-link to="/" class="jf-tutorial-nav-logo">
        <img src="../../assets/pictures/logo_vueUI_jf-02.png" class="jf-tutorial-nav-logo-pic">
      </router-link>
      <p class="offical-top-components">组件</p>

    </div>
    <div class="jf-tutorial-body">
      <div class="jf-tutorial-body-box">
        <div  class="jf-tutorial-body-left">
          <h4 class="jf-tutorial-title4">开发指南</h4>
          <ul>
            <li v-for="(devItem,index) in devIntro" :key="index" class="jf-tutorial-ul-li"
             :class="{'jf-tutorial-ul-li-active':leftItem_intro==index}" @click="introItem(index)">{{devItem.title}}</li>
          </ul>
          <div>
            <router-link :to="/updateLog">点击测试</router-link>
          </div>

        </div>
        <div  class="jf-tutorial-body-right">
          <Introduce v-show="leftItem_intro===0"></Introduce>
          <Install v-show="leftItem_intro===1"></Install>
          <QuickStart v-show="leftItem_intro===2"></QuickStart>
          <router-view class="jf-tutorial-view"></router-view>
        </div>

      </div>
    </div>
    <div class="jf-tutorial-footer"></div>
  </div>

</template>

<script type="text/ecmascript-6">
//  导入正文右侧详细内容组件--install-page
  import Introduce from "../API/apiComponents/devIntro/introduce.vue"
  import Install from "../API/apiComponents/install/install.vue"
  import QuickStart from "../API/apiComponents/quickStart/quickStart.vue"

  export default{
    name: "",
    data(){
      return {
        devIntro:[
          {
            title:"介绍",
            field:"introduce"
          },
          {
            title:"安装",
            field:"introduce"
          },
          {
            title:"快速上手",
            field:"introduce"
          },
          {
            title:"更新日志",
            field:"introduce"
          },
        ],
        leftItem_intro:0,
      }
    },
    components: {
      Introduce,
      Install,
      QuickStart
    },
    mounted: function () {
      this.autoBodyHeight() ;    //屏幕高度自适应--针对body部分
    },
    methods: {
      introItem(index){
        this.$set(this.$data,"leftItem_intro",index);
      },
      //屏幕高度自适应--针对body部分
      autoBodyHeight(){
        let screenH=window.innerHeight;
        let bodyRight=document.getElementsByClassName("jf-tutorial-body-right")[0];
        let bodyH=(screenH-80-100-100)+"px";
        bodyRight.style.minHeight=bodyH;
      }

    },
    computed: {}

  }

</script>

<style lang="scss" scoped>
  @import "../../assets/css/initStyle.css";
  @import "../../assets/css/apiStyle.scss";


</style>
