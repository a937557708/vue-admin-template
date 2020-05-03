import ckeditor from './ckeditor5'
import ckeditor4 from './ckeditor4'
import DialogBox from './dialog'
import step from './step'

import Vue from 'vue'
// import './dialog/index'
Vue.use(step)
Vue.use(ckeditor)
Vue.use(ckeditor4)
Vue.prototype.$DialogBox=DialogBox;
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)