import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

var app = new Vue({
  el: "#app",
  
  data: {
     registerActive: false,
     emailLogin: "",
     passwordLogin: "",
     emailReg: "",
     passwordReg: "",
     confirmReg: "",
     emptyFields: false
  },
  
  methods: {
     doLogin() {
        if (this.emailLogin === "" || this.passwordLogin === "") {
           this.emptyFields = true;
        } else {
           alert("You are now logged in");
        }
     },
     
     doRegister() {
        if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
           this.emptyFields = true;
        } else {
           alert("You are now registered");
        }
     }
  }
});

export default router;
