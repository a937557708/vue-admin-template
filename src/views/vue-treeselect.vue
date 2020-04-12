<template>
  <el-row>
    <el-col :span="6">
      <treeselect v-model="value" :multiple="false" :options="options" />
    </el-col>
  </el-row>
</template>

<script>
// 官网 https://vue-treeselect.js.org
// npm install --save @riophae/vue-treeselect
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: [
        {
          id: "a",
          label: "a",
          children: [
            {
              id: "aa",
              label: "aa"
            },
            {
              id: "ab",
              label: "ab"
            }
          ]
        },
        {
          id: "b",
          label: "b"
        },
        {
          id: "c",
          label: "c"
        }
      ]
    };
  },
  components: { Treeselect },
  props: {
    
  },
  watch:{
      value(val){
        debugger
      }
  },
  computed: {
   
  }
};
</script>

<style scoped>
</style>
