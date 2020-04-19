<template>
 <div v-dialogDrag >
  <div v-if="dialog" class="mini-dialog-container">
    <div class="mini-dialog-mask mini-dialog-mask-show"></div>
    <div
      class="mini-dialog-wrapper mini-dialog-shortcuts-mark mini-dialog-wrapper-show"
      style=" border-radius: 6px;"
      :style="{width:width?width+'px':'420px'}"
    >
      <div v-if="!type" class="mini-dialog-header">
        <span v-text="title?title:'标题'"></span>
        <i>
          <svg viewBox="0 0 1024 1024" version="1.1" width="16" height="16">
            <path
              d="M806.4 172.8l-633.6 633.6c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l633.6-633.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0z"
              fill="#000"
            />
            <path
              d="M172.8 172.8c-12.8 12.8-12.8 32 0 44.8l633.6 633.6c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8L217.6 172.8c-12.8-12.8-32-12.8-44.8 0z"
              fill="#000"
            />
          </svg>
        </i>
      </div>
      <div
        class="mini-dialog-main"
        style="background: rgb(255, 255, 255); min-height: 90px;"
        :style="{'min-height': type?'90px':'',background:contentBgColor,height:height?height+'px':'300px'}"
      >
        <div v-if="type">
          <div class="mini-dialog-shortcuts">
            <i v-html="typeMap[type]"></i>
            <div v-if="dangerouslyUseHTMLString" v-html="message"></div>
            <div v-else v-text="message"></div>
          </div>
        </div>
        <div v-else>
          <div v-if="dangerouslyUseHTMLString" v-html="content"></div>
          <div v-else v-text="content"></div>
          <slot :option="componentsObj"></slot>
        </div>
      </div>
      <div
        class="mini-dialog-footer mini-dialog-noselect"
        :style="{'border-top': type?'none':'#e6e6e6 solid 1px'}"
      >
       <div v-if="!type" class="mini-dialog-cancel">
          <span @click="cancelD">取消</span>
        </div>
        <div class="mini-dialog-ok">
          <span @click="okD">确定</span>
        </div>
       
      </div>
    </div>
  </div>
 </div>
</template>
<script>

import Vue from 'vue'
export default {
  data() {
    return {
      dialog:true,
      typeMap: {
        info:
          '<svg viewBox="0 0 1024 1024" version="1.1" width="30" height="30"><path d="M513.46384 60.225663c-248.292969 0-449.584462 201.299679-449.584462 449.625394 0 248.296039 201.291492 449.594695 449.584462 449.594695 248.28069 0 449.63665-201.299679 449.63665-449.594695C963.099467 261.525342 761.744529 60.225663 513.46384 60.225663zM554.626331 714.465225c0 22.720468-18.416442 41.139979-41.136909 41.139979s-41.136909-18.419512-41.136909-41.139979L472.352513 453.586612c0-22.716374 18.416442-41.135886 41.136909-41.135886s41.136909 18.419512 41.136909 41.135886L554.626331 714.465225zM513.489422 372.423081c-25.719778 0-46.561455-20.845771-46.561455-46.557362 0-25.719778 20.841677-46.560432 46.561455-46.560432s46.561455 20.841677 46.561455 46.560432C560.050878 351.577311 539.2092 372.423081 513.489422 372.423081z" fill="#19b6f8"></path></svg>',
        success:
          '<svg viewBox="0 0 1024 1024" version="1.1" width="30" height="30"><path d="M513.559007 60.225663c-248.299109 0-449.587532 201.299679-449.587532 449.625394 0 248.296039 201.288422 449.594695 449.587532 449.594695 248.27762 0 449.63358-201.299679 449.63358-449.594695C963.192587 261.525342 761.836627 60.225663 513.559007 60.225663zM766.338151 407.245168 485.919507 692.261527c-0.044002 0.045025-0.084934 0.092098-0.127913 0.137123s-0.090051 0.085958-0.134053 0.12996l-0.751107 0.763386c-6.256494 6.359848-14.548344 9.5454-22.967084 9.597589-0.061398 0.001023-0.121773 0.001023-0.183172 0.002047-0.161682 0-0.322341 0.004093-0.485047 0.002047-8.398274 0.068562-16.715707-2.979868-23.057135-9.217942L282.51591 540.491914c-12.999059-12.791327-12.775978-34.097586 0.49835-47.590901 13.281491-13.494339 34.58468-14.06739 47.576575-1.276063l130.36921 128.264269 256.507048-260.722046c12.797467-12.999059 34.100656-12.771885 47.591925 0.502443C778.555403 372.942921 779.129478 394.243039 766.338151 407.245168z" fill="#08ba61"></path></svg>',
        warnning:
          '<svg viewBox="0 0 1024 1024" version="1.1" width="30" height="30"><path d="M513.46384 60.225663c-248.291946 0-449.584462 201.299679-449.584462 449.624371 0 248.296039 201.292516 449.594695 449.584462 449.594695 248.28069 0 449.63665-201.299679 449.63665-449.594695C963.099467 261.525342 761.744529 60.225663 513.46384 60.225663zM473.683834 304.175721c2.690272-35.478026 40.597627-32.423457 40.597627-32.423457s34.488489-2.288113 39.011502 32.225959c0 0 8.162914 181.774997-15.904225 294.366308 0 0-3.746324 14.944364-23.107277 16.22145l0 0.275269c-20.751626-0.539282-24.692379-16.296151-24.692379-16.296151C465.521944 485.947647 473.683834 304.175721 473.683834 304.175721zM513.489422 747.984642c-25.719778 0-46.560432-20.840654-46.560432-46.560432 0-25.710568 20.840654-46.556339 46.560432-46.556339s46.561455 20.845771 46.561455 46.556339C560.050878 727.143988 539.2092 747.984642 513.489422 747.984642z" fill="#f39509"></path></svg>',
        error:
          '<svg viewBox="0 0 1024 1024" version="1.1" width="30" height="30"><path d="M513.559007 60.225663c-248.291946 0-449.587532 201.299679-449.587532 449.625394 0 248.291946 201.295586 449.594695 449.587532 449.594695 248.284783 0 449.632557-201.303772 449.632557-449.594695C963.191564 261.525342 761.84379 60.225663 513.559007 60.225663zM678.729837 644.059712c12.798491 13.003152 12.217253 34.302247-1.272993 47.575552-13.490246 13.275351-34.800597 13.502525-47.590901 0.503467l-116.284423-118.191866-116.278283 118.187773c-12.798491 13.003152-34.093493 12.774955-47.590901-0.499373-13.497409-13.277398-14.063297-34.576493-1.279133-47.575552l117.065206-118.984928L348.433202 406.088832c-12.783141-12.999059-12.218276-34.298154 1.279133-47.576575 13.497409-13.274328 34.792411-13.501502 47.590901-0.49835l116.279307 118.187773 116.2834-118.190843c12.790304-12.999059 34.100656-12.771885 47.590901 0.502443 13.491269 13.274328 14.071484 34.573423 1.272993 47.576575L561.666678 525.07376 678.729837 644.059712z" fill="#d81e06"></path></svg>'
      }
    };
  },
  components: {},
  watch: {},
  directives: {
    dialogDrag: {
      inserted: (el)=>{
        if( !el.draggable && el.fullscreen){
          return;
        }
        const dialogHeaderEl = el.querySelector(".mini-dialog-header");
        const dragDom = el.querySelector(".mini-dialog-wrapper");
        dialogHeaderEl.style.cursor = "move";
        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const sty =
          dragDom.currentStyle || window.getComputedStyle(dragDom, null);

        dialogHeaderEl.onmousedown = e => {
          // 鼠标按下，计算当前元素距离可视区的距离
          const disX = e.clientX - dialogHeaderEl.offsetLeft;
          const disY = e.clientY - dialogHeaderEl.offsetTop;

          // 获取到的值带px 正则匹配替换
          let styL, styT;

          // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
          if (sty.left.includes("%")) {
            styL =
              +document.body.clientWidth * (+sty.left.replace(/\%/g, "") / 100);
            styT =
              +document.body.clientHeight * (+sty.top.replace(/\%/g, "") / 100);
          } else {
            styL = +sty.left.replace(/\px/g, "");
            styT = +sty.top.replace(/\px/g, "");
          }

          document.onmousemove = function(e) {
            // 通过事件委托，计算移动的距离
            const l = e.clientX - disX;
            const t = e.clientY - disY;

            // 移动当前元素
            dragDom.style.left = `${l + styL}px`;
            dragDom.style.top = `${t + styT}px`;

            // 将此时的位置传出去
            // binding.value({x:e.pageX,y:e.pageY})
          };

          document.onmouseup = function(e) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  },
  props: {
    type: String,
    message: String,
    dangerouslyUseHTMLString: Boolean,
    title: String,
    content: String,
    width: Number,
    contentBgColor: String,
    cancel:Function,
    ok:Function,
    height:Number,
    componentsObj:Object
  },
  mounted() {},
  methods: {
    cancelD(){
      
      if(this.cancel){
        this.cancel();
      }else{
        this.dialog=false
      }
    },
    okD(){
      if(this.ok){
        this.ok();
      }else{
        this.dialog=false
      }
    }
  }
};
</script>
<style scoped>
@import url("./dialog.css");
</style>