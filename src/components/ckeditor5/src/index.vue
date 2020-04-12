<template>
  <div class="hello">
    <div class="goods-editor">
      <!-- 工具栏容器 -->
      <div :id="'toolbar-container'+id"></div>

      <!-- 编辑器容器 -->
      <div :id="'editor'+id" class="editorClass" :style="styleObj">
        <!-- <p>This is the initial editor content.</p> -->
      </div>
    </div>
  </div>
</template>

<script>
// npm install --save @ckeditor/ckeditor5-build-classic
import CKEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn"; //中文包

export default {
  name: "ckeditorTest5",
  data() {
    return {
      editor: null, // 编辑器实例
      styleObj: {
          height:400+'px'
      }, lastEditorData: {
          type: String,
          default:''
      },
      instance:null
    };
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
            removePlugins: ["MediaEmbed"], //除去视频按钮
            language: "zh-cn", // 中文
            ckfinder: {
              uploaded: 1,
              url: "/"
              // 后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
            },
            initialData:''
          }
        }
      
    },
    disabled:{
      type: Boolean,
      default: !1
    }

  },
  created() {
    
  },
  watch:{
    value(t, e) {
        t !== e && t !== this.lastEditorData && this.instance.setData(t)
    },
    disabled(t) {
        this.instance.isReadOnly = t
    }
  },
  mounted() {
    this.initCKEditor();
    if (this.height instanceof Number) {
      this.styleObj.height = this.height + "px";
    } else {
      this.styleObj.height = this.height;
    }
  },
  methods: {
    initCKEditor() {
      let that = this;
      const t = Object.assign({}, this.config);
      this.value && (t.initialData = this.value);
      class UploadAdapter {
        constructor(loader) {
          this.loader = loader;
        }
        upload() {
          //重置上传路径
          return new Promise((resolve, reject) => {
            that.editor;
            let data = this.loader.data;
            resolve({
              default: data
            });
          });
        }
        abort() {}
      }
      //初始化编辑器
      CKEditor.create(document.querySelector("#editor"+that.id), t )
        .then(editor => {
          const toolbarContainer = document.querySelector("#toolbar-container"+that.id);
          toolbarContainer.appendChild(editor.ui.view.toolbar.element);
          // 加载了适配器
          editor.plugins.get("FileRepository").createUploadAdapter = loader => {
            // debugger
            return new UploadAdapter(loader);
          };
          editor.model.document.on("change:data", function(e) {
            // console.log(editor.getData());
            const n = that.lastEditorData = editor.getData();
             that.$emit("input", n, e, editor)
            // $("#" + editorId).val(editor.getData());
          });
          that.editor = editor; // 将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
          that.instance =editor;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style >
.ck-editor__editable_inline {
  min-height: 200px;
}
.ck-content .table {
    margin: 1em auto;
    display: table;
    float: left;
}
</style>

