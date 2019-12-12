import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './main.css'
import routes from './routes'
import hljs from 'highlight.js'


Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


Vue.directive('highlight', function (el) {  //注意这里是highlight；没有带js，因为这里是用来指定指令的
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})



new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})