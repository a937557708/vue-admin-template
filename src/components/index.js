import ckeditor from './ckeditor5'
import ckeditor4 from './ckeditor4'
import DialogBox from './dialog'
import step from './step'
import neditor from './neditor'
import iframe from './iframe'
import jodit from './jodit'


import Vue from 'vue'
// import './dialog/index'
Vue.use(step)
Vue.use(ckeditor)
Vue.use(ckeditor4)
Vue.use(neditor)
Vue.use(iframe)
Vue.use(jodit)
Vue.prototype.$DialogBox=DialogBox;
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)