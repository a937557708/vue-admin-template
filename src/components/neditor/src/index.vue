<template>
 <el-row>
     <el-col :span="24"> 
      <script type="text/plain" :id="'neditor_'+id" style="margin-bottom:100px;height:300px"></script>
     </el-col>
  
</el-row>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'neditor',
  data() {
      return {
        editor: {}
      }
    },
  props: {
   height: {
      type: [String, Number],
      default: 200
    },
    id:{
      type: [String, Number],
      default:new Date().getTime()
    },
    value : {
      type:String,
      default :'请输入...'
    },
    config: {
        type: Object,
        default:()=>{
          return {
          
          }
        }
      
    },
    disabled:{
      type: Boolean,
      default: !1
    }
  },
  computed: {

   
  },
  created(){
   
  },
  mounted(){
   
     let that=this;
     let id='neditor_'+that.id;
    debugger
    this.$nextTick(()=>{

      this.editor=UE.getEditor(id, Object.assign( that.config,{
          //toolbars:[['FullScreen', 'Source', 'Undo', 'Redo','Bold']],//这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
          lang:"zh-cn",
          initialFrameHeight: that.height,
          initialFrameWidth:'100%',
          initialContent: that.value,
          readonly:that.disabled
          //更多其他参数，请参考neditor.config.js中的配置项
      }));
      setTimeout(() => {
        this.editor.addListener("ready", () => {
          that.isReady = true;
          that.$emit("ready", this.editor);
          that.editor.setContent(that.value);
          that.editor.addListener("contentChange", () => {
            that.$emit("input", that.editor.getContent());
          });
        });
      }, 1000);
    })
    
   

  },
  watch:{
     value(t) {
           this.editor.getContent() !== t && this.instance.setContent(t)
      },
      disabled(t) {
          this.editor.setEnabled()
      }
  },
  destroyed(){
     this.editor.destroy();
  }
}
</script>

<style scoped>

</style>
