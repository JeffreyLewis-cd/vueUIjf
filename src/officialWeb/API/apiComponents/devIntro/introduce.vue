<template>
  <div class="apiComponentsDetail introduce-page">
    <H3 class="jf-devIntro-title">vueUIjf 组件库介绍</H3>
    <p>vueUIjf 是一款基于Vue.js 2.0 的前端UI组件库，只用于学习交流，非商业用途；
      主要的灵感借鉴于
      <a class="linkToOutside" href="https://github.com/monkeyWangs">monkeyWang</a>
      的
      <a class="linkToOutside" href="https://vv-ui.github.io/VV-UI/#/">VV-UI</a>,
      在此表示感谢！</p>
    <H3>vueUIjf 特性</H3>
    <ul>
      <li v-for="(proItem,index) in properties" :key="index">{{proItem.proItem}}</li>
    </ul>
    <H3>浏览器支持</H3>
    <ul>
      <li v-for="(broItem,index) in browsers" :key="index" v-html="broItem.broItem"></li>
    </ul>
    <H3>浏览器支持</H3>
    <p>如果您在使用 <code>vueUIjf</code> 时遇到问题，或者有好的建议，欢迎给我们提
      <a class="linkToOutside" href="https://github.com/JiangFan6/vueUIjf/issues">Issues</a>或者
      <a class="linkToOutside" href="https://github.com/JiangFan6/vueUIjf/pulls">Pull requests</a>
    </p>
  </div>

</template>

<script type="text/ecmascript-6">

  export default{
    name: "introduce-page",
    data(){
      return {
        properties: [
          {
            proItem: "基于 Vue 开发的 UI 组件"
          },
          {
            proItem: "使用 npm + webpack + babel 的工作流，支持 ES2015"
          },
          {
            proItem: "提供友好的 API，可灵活的使用组件"
          },
        ],
        browsers: [
          {
            broItem: "现代浏览器和 IE9 及以上"
          },
          {
            broItem: "<a class='linkToOutside' href='http://electron.atom.io/'>Electron</a>"
          },
          {
            broItem: '<a class="linkToOutside" href="http://nwjs.io">NW.js</a>'
          },
        ]
      }
    },
    components: {},
    mounted: function () {

    },
    methods: {},
    computed: {}

  }

</script>

<style lang="scss">
  @import "../../../../assets/css/apiStyle.scss";


</style>
