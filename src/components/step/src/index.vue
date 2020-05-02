<template>
 <el-row>
   <el-col :span="24">
      <div class="ui-step-wrap">
          <div class="ui-step-bg"></div>
          <div class="ui-step-progress" style=""  :style="{width:(index+1)*width+'px'}"></div>
          <ul class="ui-step">
            <template v-for="(item,i) in title">
              <li class="ui-step-item " :key="i+new Date().getTime()" :class="{active:index>=i}" 
                 style="" :style="{width:width+'px'}">
                  <div class="ui-step-item-title">{{item}}</div>
                  <div class="ui-step-item-num"><span>{{i+1}}</span></div>
              </li>
            </template>
              
          </ul>
      </div>
    </el-col>
 </el-row>
</template>

<script>

import Vue from 'vue'

export default {
  name: "step",
  data() {
    return {
    
    };
  },
  props: {  
    index: {
      type:Number,
      default:0
    },
    title: {
      type:Array,
      default:[]
    },
    width:{
      type:Number,
      default:200
    }
  },
  created() {
    
  },
  watch:{
    
  },
  mounted() {
  
  },
  methods: {
    
  }
};
</script>

<style scoped>
@import url('./step.css');

</style>

