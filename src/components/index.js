import ckeditor from './ckeditor5'
import DialogBox from './dialog'
import step from './step'

import Vue from 'vue'
// import './dialog/index'
Vue.use(step)
Vue.use(ckeditor)
Vue.prototype.$DialogBox=DialogBox;
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)