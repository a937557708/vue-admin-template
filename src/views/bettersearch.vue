<template>
 <el-row>
     <el-col  id="test1" :span="24"> 
       Windows PowerShell
版权所有 (C) Microsoft Corporation。保留所有权利。

尝试新的跨平台 PowerShell https://aka.ms/pscore6

PS F:\git_project\vue-admin-template> npm i --save-dev bettersearch
npm WARN @umijs/hooks@1.6.0 requires a peer of react@^16.8.6 but none is installed. You must install peer dependencies yourself.
npm WARN @umijs/use-request@1.1.0 requires a peer of react@^16.8.6 but none is installed. You must install peer dependencies yourself.
npm WARN prosemirror-utils@0.9.6 requires a peer of prosemirror-tables@^0.9.1 but none is installed. You must install peer dependencies yourself.     
npm WARN rollup-plugin-uglify@6.0.4 requires a peer of rollup@>=0.66.0 <2 but none is installed. You must install peer dependencies yourself.
npm WARN vue-admin-template@4.2.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ bettersearch@1.0.1
added 6 packages from 5 contributors in 14
     </el-col>
  
</el-row>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import BetterSearch from 'bettersearch'
import Vue from 'vue'

export default {
  name: 'SvgIcon',
  data() {
      return {
        strHtml: "das2131",
        strHtml1:'sad',
        strHtml2:"撒旦撒",
        editor:{}
      }
    },
  props: {
  
  },
  computed: {

   
  },
  created(){
   
  },
  mounted(){
    
    var betterSearch = new BetterSearch({
    domContainer: '#test1'		//搜索区域
})
    betterSearch.search("field")	//开始搜索，高亮关键字区域
   

  },
  watch:{
    strHtml(val){
      console.log('strHtml:'+val)
    }
  }
}
</script>

<style scoped>

</style>
