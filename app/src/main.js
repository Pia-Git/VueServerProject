import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = ''; //input url from firebase here
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  next();
  /*next( response => {
    response.json = () => { return {messages: response.body } }
  });*/
});

new Vue({
  el: '#app',
  render: h => h(App)
})
