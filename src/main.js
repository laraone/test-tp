import MyTpComponent from './components/MyTpComponent.vue'

export function install (Vue, router) {
  Vue.component('MyTpComponent', MyTpComponent)

  router.addRoutes([
    {
      path: '/my-test-tp',
      component: MyTpComponent
    }
  ])
}
