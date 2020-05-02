<template>
<section id="container">
    <div style="padding:30px">
    <step :index="index" :title="title"></step>
    </div>
</section>
</template>

<script>

export default {
  name: 'SvgIcon',
  data() {
    return {
        index:3,
        title: ["填写申请表", "上传资料", "待确认", "已确认", "预约完成"]
    };
  },
  props: {
   
  },
  computed: {
   
   
  },
  mounted(){
     let url = '/FileService/Export/Task/download', param;

 
  }
}
</script>

<style scoped>

</style>
