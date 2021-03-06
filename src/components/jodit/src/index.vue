<template>
 <el-row>
   <el-col :span="24">
       <textarea id="editor"></textarea>
    </el-col>
 </el-row>
</template>

<script>

import Vue from 'vue'
//npm install jodit
// import 'jodit/build/jodit.js'
import {Jodit} from 'jodit'
import 'jodit/build/jodit.css'
export default {
  name: "jodit",
  data() {
    return {
    editor:null
    };
  },
  props: {  
     
  },
  created() {
    
  },
  watch:{
   
  },
  mounted() {
    console.log(Jodit)
    this.editor = new Jodit('#editor', {
         "autofocus":false,

          "uploader": {  
              insertImageAsBase64URI:true, 
          },

          "language": "zh_cn",

          "toolbarButtonSize": "small", 
          width: 'auto',
          height: 'auto',
          minHeight: 500, 
      });
      setTimeout(()=>{
         $('#cke_editor1').remove()
      },300)
      this.$nextTick(()=>{
       
      })
      // editor.setEditorValue("asdasda")
      // let ette=editor.getEditorValue();
      // debugger
  },
  methods: {
    
  }
};
</script>

<style scoped>
 

</style>

