import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/pages/home.vue'
import Contact from './components/pages/contact.vue'
import Gallery from './components/pages/gallery.vue'
import Menu from './components/pages/menu.vue'
import Signin from './components/pages/signin.vue'
import Signup from './components/pages/signup.vue'
import Admin from './components/pages/admin.vue'
import Form from './components/components/FormInsertOrUpdate.vue'
import store from "./store/store"
import RoleDirective from "./directives/RoleDirective.js"

//API ROUTES 
Vue.prototype.$BASE_API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
Vue.prototype.$API_URL_FIND_BY_ID = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
Vue.prototype.$API_URL_RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php"

Vue.directive("role", RoleDirective)

Vue.config.productionTip = false


var routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/gallery", component: Gallery },
  { path: "/menu", component: Menu },
  { path: "/signin", component: Signin },
  { path: "/signup", component: Signup },
  { path: "/admin", component: Admin },
  { path: "/form/:id", name: "form", component: Form }
]

var router = new VueRouter({routes})
Vue.use(VueRouter)


new Vue({
  router,
  store,
  created: function() {
    var user = localStorage.getItem("user")
    if(!user) {
      this.$store.commit("changeUser", undefined)
      return
    }
    this.$store.commit("changeUser", JSON.parse(user))
  },
  render: h => h(App),
}).$mount('#app')