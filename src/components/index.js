import ckeditor from './ckeditor5'
import DialogBox from './dialog'

import Vue from 'vue'
// import './dialog/index'
Vue.use(ckeditor)
Vue.prototype.$DialogBox=DialogBox;
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)