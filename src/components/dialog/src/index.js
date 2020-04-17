



import Vue from "vue/dist/vue.js";
import dialogVue from './index.vue';

let instance=null;


const initInstance = (option) => {
  let param='';
  let components= { dialogVue };
  let componentsStr='';
  for(let key in option){
    if(key=='components'){
      for(let ckey in option[key]){
        componentsStr+=`<${ckey}></${ckey}>`;
        components[ckey]=option[key][ckey];
      }
    }else{
      param+=`:${key}="option.${key}"`;
    }
  }
  let dialogNew= Vue.extend({
    template: `<dialogVue ${param}>${componentsStr}</dialogVue>`,
    components:components,
    data: function () {
      return  {
        option
      };
    }
  });
  instance=new dialogNew({
    el: document.createElement("div")
  });
};
const showNextMsg = (option,callback) => {
  if (!instance) {
    initInstance(option);
  }
  // instance.$mount("body");
  document.body.appendChild(instance.$el);
  instance.callback=callback
};

const DialogBox = function(options, callback) {
  showNextMsg(options,callback);
};

DialogBox.info = (options) => {
  return DialogBox(options);
};

DialogBox.success = (options) => {
  options.type='success'
  return DialogBox(options);
};

DialogBox.warn = (options) => {
  options.type='warn'
  return DialogBox(options);
};

DialogBox.error = (options) => {
  options.type='error'
  return DialogBox(options);
};
DialogBox.close = () => {
  instance
 debugger
};

export default DialogBox;
export { DialogBox };
