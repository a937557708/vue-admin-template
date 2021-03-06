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
    editor:null,
    editorValue:'',
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
    let editor=this.editor = new Jodit('#editor', {
          autofocus:true,
          "uploader": {  
              insertImageAsBase64URI:true, 
          },

          "language": "zh_cn",

          "toolbarButtonSize": "small", 
          width: 'auto',
          height: 'auto',
          minHeight: 500, 
      });
      editor.setEditorValue("sdsa")
      editor.e.on("focus",(editor)=>{
         $('#cke_editor1').remove()
      })
      editor.e.on("mousedown",(e)=>{
        // debugger
      })
      editor.e.on("blur",(e)=>{ 
       this.editorValue= editor.getEditorValue(); 
      })
         
      setTimeout(()=>{
           $('#cke_editor1').remove()
      },100)
      this.$nextTick(()=>{
       
      })
   
  },
  methods: {
    
  }
};
</script>

<style scoped>
 

</style>

