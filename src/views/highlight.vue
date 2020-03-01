<template>
 <el-row>
     <el-col :span="24"> 
      <div v-html="html" v-highlight> 
      </div>
     </el-col>
</el-row>
</template>

<script>
import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

export default {
  data(){
      return {
          html:`<code class="language-javascript hljs"><ol class="hljs-ln"><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-comment">// Vue-cli生成的工程文件的src/main.js</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">import</span> hljs <span class="hljs-keyword">from</span> <span class="hljs-string">'highlight.js'</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="3"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line"><span class="hljs-keyword">import</span> <span class="hljs-string">'highlight.js/styles/googlecode.css'</span> <span class="hljs-comment">//样式文件</span></div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="4"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">Vue.directive(<span class="hljs-string">'highlight'</span>,<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">el</span>) </span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="5"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  <span class="hljs-keyword">let</span> blocks = el.querySelectorAll(<span class="hljs-string">'pre code'</span>);</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="6"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  blocks.forEach(<span class="hljs-function">(<span class="hljs-params">block</span>)=&gt;</span>{</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="7"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">    hljs.highlightBlock(block)</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="8"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">  })</div></div></li><li><div class="hljs-ln-numbers"><div class="hljs-ln-line hljs-ln-n" data-line-number="9"></div></div><div class="hljs-ln-code"><div class="hljs-ln-line">})</div></div></li></ol></code>`,
      }
  },
  props: {
   
  },
  computed: {
   
   
  },
  components:{

  },
  created(){

  },
  mounted(){

  },
  methods:{

  },
  destroyed(){

  },
}
</script>

<style scoped>

</style>
