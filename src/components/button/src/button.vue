<template>
    <button class="jf_button"
            :class="[
    'jf_button-'+type,'jf_button-size-'+size]">
      <slot>{{btnDefault}}</slot>
    </button>

</template>

<script>
  export default {
    name: 'jfButton',
    props: {
      size: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'default'
      },
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        btnDefault:"默认按钮"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jf_button {
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    -webkit-appearance: none;
    box-sizing: border-box;
    margin: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-size: 14px;
    overflow: hidden;
  }
  .jf_button-default{
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
  }
  .jf_button-default:hover{
    background: rgba(63,170,245,.05);
    border-color: rgba(63,170,245,.8);
    color: #3faaf5;
  }
  .jf_button-primary{
    background: #3FAAF5;
    border: 1px solid #3FAAF5;
    color: #fff
  }
</style>
