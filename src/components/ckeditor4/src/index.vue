<template>
  <div >
    <textarea rows="30" cols="50" :name="'editor'+id">请输入.</textarea>
  </div>
</template>

<script>
// npm install ckeditor4-vue
import Vue from 'vue'

 
// Vue.use( CKEditor );

export default {
  name: "ckeditorTest4",
  data() {
    return {
      editor: null, // 编辑器实例
      lastEditorData: "",
      instance:null,
         editorData: '<p>Content of the editor.</p>',
        editorConfig: {
            // The configuration of the editor.
        }
    };
  },
  components:{
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
     value(t) {
          this.instance.getData() !== t && this.instance.setData(t)
      },
      readOnly(t) {
          this.instance.setReadOnly(t)
      }
  },
  mounted() {
    this.initCKEditor();
    // if (this.height instanceof Number) {
    //   this.styleObj.height = this.height + "px";
    // } else {
    //   this.styleObj.height = this.height;
    // }
  },
  methods: {
    initCKEditor() {
      // debugger
      console.log(CKEDITOR)
      let that = this;
      const t = Object.assign({}, this.config);
      this.value && (t.initialData = this.value);
    
      let config= this.config;
      config.width = 'auto';//编辑器的宽度
      config.height = this.height || 200;//编辑器的高度
     

      //初始化编辑器
      let o=this.instance  =CKEDITOR.replace("editor"+that.id,config );
    

      o.on("instanceReady", () =>{
            const t = this.value;
            o.fire("lockSnapshot"),
            o.setData(t, {
                callback: () =>{
                    that.setUpEditorEvents();
                    const e = o.getData();
                    t !== e ? (that.$once("input", () =>{
                        that.$emit("ready", o)
                    }), that.$emit("input", e)) : that.$emit("ready", o),
                    o.fire("unlockSnapshot")
                }
            })
        })
      o.on('instanceReady',
          function(event) {　　
              var _data = (that.value || "");　　
              if (_data != "") {　　　　
                this.setData(_data);　　
              }　　
              this.document.on("paste",
              function(e) { //重写该ckeditor实例的粘贴事件
                  var items = e.data.$.clipboardData.items; //获取该ckeditor实例的所有剪切板数据
                  for (var i = 0; i < items.length; ++i) { //循环该数据并只获取类型为image/png格式的数据
                      var item = items[i];　　　　
                      if (item.kind == 'file' && item.type == 'image/png') {　　　　　　
                          var imgFile = item.getAsFile();　　　　　　
                          if (!imgFile) {　　　　　　　　
                              return true;　　　　　　
                          }　　　　　　
                          var reader = new FileReader();　　　　　　
                          reader.readAsDataURL(imgFile); //转化为base64格式
                          reader.onload = function(e) { //在控件中插入该图片
                          // debugger
                             o.insertHtml('<img src="' + this.result + '" alt="" />');　　　　
                          }　　
                          return false;　　
                      }　　
                  }　　
              });　　
          });
    },
    setUpEditorEvents() {
      let that = this;
      const t = this.instance;
      t.on("change", e =>{
          const n = t.getData();
          that.value !== n && that.$emit("input", n, e, t)
      }),
      t.on("focus", e =>{
          that.$emit("focus", e, t)
      }),
      t.on("blur", e =>{
          that.$emit("blur", e, t)
      })
  }
  },

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

