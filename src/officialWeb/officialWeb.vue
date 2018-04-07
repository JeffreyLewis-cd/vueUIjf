<template>
    <div class="officalWeb">
      <div class="offical-top">
          <img src="../assets/pictures/logo_vueUI_jf-02.png" class="offical-top-logo">
        <p class="offical-top-components">组件</p>
        <img src="../assets/pictures/waveBack07.png" class="offical-top-waveback">
      </div>
      <div class="offical-middle">
          <p class="offical-middle-txt">一款基于VUE2.0的、轻量级、模块化的前端 UI 组件库</p>
          <div class="offical-middle-btns">
            <router-link to="/Tutorial" class="offical-middle-primary">开始使用</router-link>
            <a href="#"  class="offical-middle-circle">GitHub</a>
          </div>
      </div>

    </div>

</template>

<script type="text/ecmascript-6">

    export default{
        name: "officalWeb",
        data(){
            return {}
        },
        components: {},
        mounted: function () {

        },
        methods: {},
        computed: {}

    }

</script>

<style lang="scss" scoped>
  @import "../assets/css/initStyle.css";
  .officalWeb  {
    /*background: #E8F0F2;*/
    min-height:600px;
    height:100vh;
    /*background:url("../assets/pictures/waveBack07.png") no-repeat;*/
    /*background-size:contain;*/
    position: relative;
  }
  .offical-top-waveback{
    height:600px;
    width:100%;
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
  }

  .offical-top{
    min-height:130px;
    height:10vh;

  }

  .offical-top-logo{
    height:100px;
    margin-top: 20px;
    margin-left: 100px;
  }
  .offical-top-components{
    float: right;
    height:60px;
    line-height: 60px;
    width:100px;
    text-align: center;
    margin-right: 60px;
    cursor:pointer;
    font-weight: 700;
    color:#42B884
  }

  /*中间部分*/
  .offical-middle{
    width:600px;
    height:200px;
    margin:0 auto;
    margin-top: 300px;
    text-align: center;
    padding-top: 50px;
  }
  .offical-middle-txt{
    color:#8E98C8;
    font-size: 20px;
    width:100%;
  }
  .offical-middle-btns{
    width:310px;
    text-align: center;
    height:50px;
    line-height: 100px;
    margin:50px auto;
  }
  .offical-middle-primary{
    display: block;
    height:50px;
    width:130px;
    line-height: 50px;
    border-radius: 50px;
    text-align: center;
    background-image: linear-gradient(90deg,#00aeff,#3369e7);
    color:#fff;
    float: left;
    cursor:pointer
  }
  .offical-middle-primary:hover{
    background-image: linear-gradient(-90deg,#00aeff,#3369e7);
    color:#fff;
  }
  .offical-middle-circle{
    display: block;
    height:50px;
    width:130px;
    line-height: 50px;
    border-radius: 50px;
    text-align: center;
    float: left;
    border:1px solid #316de9;
    color:#316de9;
    margin-left: 40px;
    cursor:pointer
  }
  .offical-middle-circle:hover{
    color:#42B884;
    border:1px solid #42B884;
  }


</style>
