<template>
 <el-row>
     <el-col :span="24"> 
        <ckeditorTest5 id="asdsa" v-model="strHtml"></ckeditorTest5>
     </el-col>
      <el-col :span="24"> 
        <ckeditorTest5 id="asdsa11" v-model="strHtml1"></ckeditorTest5>
     </el-col>
      <el-col :span="24"> 
        <ckeditorTest5 id="asdsawqeq" v-model="strHtml2"></ckeditorTest5>
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
        strHtml2:"撒旦撒"
      }
    },
  props: {
  
  },
  computed: {
    isExternal() {
      return isExternal(this.iconClass)
    },
    iconName() {
      return `#icon-${this.iconClass}`
    },
   
  },
  mounted(){
    Vue.localStorage.set('someNumber', 123)
    console.log(Vue.localStorage)
    console.log(Vue.localStorage.get('someNumber'))
  },
}
</script>

<style scoped>

</style>
