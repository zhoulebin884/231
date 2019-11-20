import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import class1 from '@/components/class'
import transition from "../components/transition";
import listedr from "../components/listedr"
// import Vue from 'vue'
// import App from './App'
import ElementUI from 'element-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
Vue.use(ElementUI);
// import router from './router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/class',
      name:'class',
      component:class1
    },
    {
      path:'/transition',
      name:'transition',
      component:transition
    },
    {
      path:'/listedr',
      name:'listedr',
      component:listedr
    }
  ]
})
