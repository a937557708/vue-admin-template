<template>
 <el-row>
     <el-col :span="24"> 
       <input refs="fileref" type="file" style="display:none" id="people-export" ref="inputer" @change="fileUpload"/>
        <el-button type="primary" @click="clickFile">上传文件</el-button>
     </el-col>
</el-row>
</template>

<script>
import Vue from 'vue'

export default {
  data(){
      return {
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
    debugger
  },
  methods:{
    clickFile(){
        document.getElementById(this.$refs.inputer.id).click()
    },
    fileUpload(event){
      // 上传文件
      console.log(event);
      
      let file = event.target.files
      let formData = new FormData()
      formData.append('category', 'settingPic')
      formData.append('file', file[0])
      console.log(formData);
      // 文件上传
      this.$axios({
        method: "POST",
        url:  '/file/upload',
        data: formData
      }).then((res) => {
        let data = res.data
        if(data.status==200) {
          console.log(data);
        } else {
          this.$message.error(data.message || '操作失败')
        }
        this.uploadLoading = false
      }).catch((e)=>{
        this.uploadLoading = false
        alert(e)
      })
      
    },
  },
  destroyed(){

  },
}
</script>

<style scoped>

</style>
