<template>
  <div>
    <vue2-editor v-model="strHtml" useCustomImageHandler @imageAdded="handleImageAdded" :id='id' 
    :editorToolbar="customToolbar" :disabled='!!disabled'></vue2-editor>
  </div>
</template>
<script>
  import { VueEditor } from 'vue2-editor'
  export default {
    name: 'Vue2Editor',
    props: ['content','disabled'],
    data() {
      return {
        strHtml: this.content,
        id: this.uniqueId(),
        customToolbar:[
            [{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            [{'align': ['','center','right','justify']}],
            ['blockquote'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            ['link', 'image'],
            ['clean'],                                     // remove formatting button
        ]
      }
    },
    components: {
      'vue2-editor': VueEditor
    },
    watch: {
      strHtml(newval) {
        //实时监控编辑器内容变化，使父组件能够实时获取输入内容
        this.$emit('change', newval);
      },
      content(newval) {
        //父组件实时更新数据流向子组件
        this.strHtml = newval
      }
    },
    methods: {
      handleImageAdded(file, Editor, cursorLocation, resetUploader) {
       debugger
        //把获取到的图片url 插入到鼠标所在位置 回显图片
        Editor.insertEmbed(cursorLocation, 'image', url);
        resetUploader();
      },
      uniqueId() {
        let rdNum = ('' + Date.now()).slice(-8);
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_';
        let len = str.length;
        let res = '';
        for (let i = 0; i < 8; i++) {
          res += str[Math.floor(Math.random() * len)];
        }
        return res + rdNum;
      },
    },
  }
</script>