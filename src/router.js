import Vue from 'vue';
import Router from 'vue-router';

import RecipesIndex from './views/RecipesIndex.vue';
import RecipesNew from './views/RecipesNew.vue';
import RecipesShow from './views/RecipesShow.vue';

import Signup from './views/Signup.vue';
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'root', component: RecipesIndex },

    { path: '/recipes', name: 'recipes-index', component: RecipesIndex },
    { path: '/recipes/new', name: 'recipes-new', component: RecipesNew },
    { path: '/recipes/:id', name: 'recipes-show', component: RecipesShow },
    
    { path: '/signup', name: 'signup', component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout }
  ]
});