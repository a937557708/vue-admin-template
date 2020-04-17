<template>
  <div>
    <el-button @click="html=''">默认按钮{{option.firstName}}</el-button>
    <div v-html="html" v-highlight></div>
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css"; //样式文件
import ElButton from "element-ui/packages/button";
// Vue.directive("highlight", function(el) {
//   let blocks = el.querySelectorAll("pre code");
//   blocks.forEach(block => {
//     hljs.highlightBlock(block);
//   });
// });

export default {
  data() {
    return {
      html: `// Vue-cli生成的工程文件的src/main.js
<pre>import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight',function (el) {
let blocks = el.querySelectorAll('pre code');
blocks.forEach((block)=>{
hljs.highlightBlock(block)
})
})</pre>`
    };
  },
  directives: {
    highlight: {
      inserted: function(el) {
        let blocks = el.querySelectorAll("pre");
        blocks.forEach(block => {
          hljs.highlightBlock(block);
        });
      }
    }
  },
  props: {
    option:{
      type:Object,
      default:()=>{
        return {}
      }
    }
  },
  computed: {},
  components: {
    ElButton
  },
  created() {},
  mounted() {},
  methods: {},
  destroyed() {}
};
</script>

<style scoped>
</style>
