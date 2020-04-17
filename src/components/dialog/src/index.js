



import Vue from "vue/dist/vue.js";
import dialogVue from './index.vue';

let instance=null;


const initInstance = (option) => {
  let param='';
  let components= { dialogVue };
  let componentsStr='';
  let comBoj=(option.components||{});

  comBoj.forEach(elementP => {
    let comStr='';
    let name=elementP.name;
    let params=elementP.params;
    
    params.forEach(element => {
      comStr+=`:${element}="scope.${element}"`;
    });
    componentsStr+=`   <template slot-scope="scope"><${name} ${comStr}></${name}>  </template>`;
    components[name]=elementP.component

  })

  let data=(option.data|| {});
  for(let key in data){
    param+=`:${key}="option.${key}"`;
  }
  let dialogNew= Vue.extend({
    template: `<dialogVue ${param}>${componentsStr}</dialogVue>`,
    components:components,
    data: function () {
      return  {
        option:data
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
};

export default DialogBox;
export { DialogBox };
