<template>
  <el-row>
    <el-col id="aaaaaa"  :span="24">
      <el-tabs v-model="currentTabIndex"  type="border-card">
        <el-tab-pane  label="消息中aaaa心">
          <span slot="label"  @contextmenu.prevent="onContextmenu">
            <i class="el-icon-date"></i> 我的行程
          </span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="消息中心">
           <span slot="label"  @contextmenu.prevent="onContextmenu">
            <i class="el-icon-date"></i> 消息中心
          </span>
            消息中心</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        <el-tab-pane label="消息中心1">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理2">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿3">定时任务补偿</el-tab-pane>
        <el-tab-pane label="消息中心2">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理5">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿6">定时任务补偿</el-tab-pane>
        <el-tab-pane label="消息中心7">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理8">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿81">定时任务补偿</el-tab-pane>

        <el-tab-pane label="定时任务补偿116">定时任务补偿</el-tab-pane>
        <el-tab-pane label="消息中心117">消息中心</el-tab-pane>
        <el-tab-pane label="角色管理118">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务22补偿81">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
// tab页 存在右键和 滚动
//npm install vue-contextmenujs
import Vue from "vue";
import Contextmenu from "vue-contextmenujs"
Vue.use(Contextmenu);
export default {
  data() {
    return {
      currentTabIndex: ""
      // define the default value
    };
  },
  components: {},
  props: {},
  watch: {
    value(val) {
      debugger;
    }
  },
  computed: {},
  mounted(){
     
  },
  methods: {
    onContextmenu(event) {
        let that=this;
      this.$contextmenu({
        items: [
          {
            label: "返回(Baaa)",
            onClick: () => {
              alert(that.currentTabIndex)
              console.log("返回(B)");
            }
          },
       
        ],
        event, //x: event.clientX, //y: event.clientY,
        customClass: "class-a",
        zIndex: 3,
        minWidth: 230
      });
      return false;
    }
  }
};
</script>

<style scoped>
</style>
