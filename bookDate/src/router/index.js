import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: function (resolve) {
        require(['@/views/index.vue'], resolve)
      }
    },
    {
      path: '/write',
      name: 'write',
      component: function (resolve) {
        require(['@/views/write.vue'], resolve)
      }
    },
    {
      path: '/public',
      name: 'public',
      component: function (resolve) {
        require(['@/views/public.vue'], resolve)
      }
    },
    {
      path: '/update',
      name: 'update',
      component: function (resolve) {
        require(['@/views/update.vue'], resolve)
      }
    },
    {
      path: '/info',
      name: 'info',
      component: function (resolve) {
        require(['@/views/info.vue'], resolve)
      }
    },
    {
      path: '/home',
      name: 'home',
      component: function (resolve) {
        require(['@/views/home.vue'], resolve)
      },
      children : [
        {
          path: 'dynamic',
          name: 'dynamic',
          component: function (resolve) {
            require(['@/views/dynamic.vue'], resolve)
          }
        },
        {
          path: 'note',
          name: 'note',
          component: function (resolve) {
            require(['@/views/note.vue'], resolve)
          }
        },
        {
          path: 'board',
          name: 'board',
          component: function (resolve) {
            require(['@/views/board.vue'], resolve)
          }
        },
        {
          path: 'attention',
          name: 'attention',
          component: function (resolve) {
            require(['@/views/attention.vue'], resolve)
          }
        },
        {
          path: 'fan',
          name: 'fan',
          component: function (resolve) {
            require(['@/views/fan.vue'], resolve)
          }
        },
        {
          path: '',
          redirect: 'dynamic'
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
