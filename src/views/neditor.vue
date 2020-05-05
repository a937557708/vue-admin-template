<template>
 <el-row>
     <el-col :span="24"> 
      <neditor v-model="strHtml"  :height="500"></neditor>
     </el-col>
  
</el-row>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '@/utils/validate'
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
