<template>
  <el-row>
    <el-col :span="24">
      水水水水
      <highlight />
      <div id="sadsa"></div>
    </el-col>
  </el-row>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from "@/utils/validate";
import highlight from "./highlight";
import ckeditor5 from "./ckeditor5";
import tes404 from "./404";

import vue from "vue/dist/vue.js";

import Vue from "vue";
export default {
  name: "SvgIcon",
  props: {},
  computed: {
    isExternal() {
      return isExternal(this.iconClass);
    },
    iconName() {
      return `#icon-${this.iconClass}`;
    }
  },
  components: {
    highlight
  },
  created() {},
  mounted() {
    // 创建构造器
    // console.log(highlight);
    // highlight.components["tes404"] = tes404;
    // var com1 = Vue.extend({
    //   template: `<highlight></highlight>`,
    //   components: { highlight }
    // });

    // var instance = new com1({
    //   el: document.createElement("div")
    // });

    // var com1 = Vue.extend(highlight);
    // var instance = new com1({
    //   el: document.createElement("div")
    // });
    // // 创建 Profile 实例，并挂载到一个元素上（坑！！！！！！！！！！）
    // console.log(instance);
    // $("#sadsa").html(instance.$el);

    // 创建构造器
    // var Profile = vue.extend({
    //   template: `<highlight :firstName="firstName"></highlight>`,
    //   components: { highlight },
    //   data: function() {
    //     return {
    //       firstName: "Walter",
    //       lastName: "White",
    //       alias: "Heisenberg"
    //     };
    //   }
    // });
    // // const extendComponent = new Profile().$mount()
    // // 创建 Profile 实例，并挂载到一个元素上。
    // new Profile().$mount("#sadsa");
    console.log("instance", this.$DialogBox);
    this.$DialogBox({
      components: [
        {
          name: "highlight",
          component: highlight,
          params: ['option']
        }
      ],
      data:{
        componentsObj:{
          firstName:'da'
        },
        firstName:'da',
        height: 400,
        ok() {
          this.dialog = false;
        }
      }
      // draggable:true,
    });
  },
  render() {}
};
</script>

<style scoped>
</style>
