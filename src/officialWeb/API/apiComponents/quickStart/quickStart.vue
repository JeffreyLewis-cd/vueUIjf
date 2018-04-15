<template>
  <div class="quick-start">
    <H3 class="jf-devIntro-title">快速开始</H3>
    <H3>使用前准备</H3>
    <p>在使用之前，推荐学习 Vue 和 ES2015 ，并正确配置 Node.js v6.x 或以上版本 </p>
    <p>VV-UI 基于 Vue.js 2.x+ 版本开发，所以有必要了解以下基础知识： </p>
    <ul>
      <li v-for="(pageItem,index) in singlePages" :key="index" v-html="pageItem.pageItem"></li>
    </ul>
    <H3>使用前准备</H3>
    <p>Vue.js 提供一个官方命令行工具 vue-cli，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。
      只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。</p>
      <pre>
        <code>
    > npm install vue-cli -g
    > cd 目录路径
    > vue init webpack 工程名字          <工程名字不能用中文>
    > npm install
        </code>
      </pre>
    <H3>标准开发</H3>
    <p>实际项目中，往往会使用 webpack，rollup 或者 gulp 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用
      &lt;script &gt; 标签全局引入的方式使用。</p>
    <H3>全局组件使用</H3>
    <p>可以在项目的入口文件中引入所有组件或所需组件</p>
    <pre><code>
    import vueuijf from 'vueuijf' // 引入组件库

    Vue.use(jfUI); </code>
    </pre>

    <H3>单个组件按需使用</H3>
    <p>可以局部注册所需的组件，适用于与其他框架组合使用的场景</p>
    <pre><code>
    import { jfButton } from 'vueuijf'

    export default {
      components: {
        jfButton
      }
    } </code>
    </pre>

  </div>

</template>

<script type="text/ecmascript-6">

  export default{
    name: "quick-start",
    data(){
      return {
        singlePages: [
          {
            pageItem: '<a  class="linkToOutside" href="https://cn.vuejs.org/v2/guide/components.html">Vue 组件</a>'
          }, {
            pageItem: '<a  class="linkToOutside" href="https://cn.vuejs.org/v2/guide/single-file-components.html">单文件组件</a>'
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

<style scoped>


</style>
