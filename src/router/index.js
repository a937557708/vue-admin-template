import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
 
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/test',
    component: () => import('@/views/test.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  },
  {
    path: '/ckeditor5',
    component: () => import('@/views/ckeditor5.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  },
  {
    path: '/vue2Editor',
    component: () => import('@/views/vue2Editor.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  },
  {
    path: '/codemirror',
    component: () => import('@/views/codemirror.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  },
  {
    path: '/highlight',
    component: () => import('@/views/highlight.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  }, {
    path: '/ajaxfileupload',
    component: () => import('@/views/ajaxfileupload.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  },{
    path: '/uploader',
    component: () => import('@/views/uploader.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  },
  ,{
    path: '/treeselect',
    component: () => import('@/views/vue-treeselect.vue'),
    name: 'Menu1-2-1',
    meta: { title: 'Menu1-2-1' }
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
