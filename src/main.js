import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import App from '@/App'
import HomeView from "@/views/HomeView";
import pdvView from "@/views/pdvView";
import museoView from "@/views/museoView";
import pdiView from "@/views/pdiView";
import perfilView from "@/views/perfilView";
import notFound from "@/components/notFound";


const routes=[
    {path:'/', name: "HomeRoute", component: HomeView},
    {path:'/puntos-venta', name: "pdvRoute", component: pdvView},
    {path:'/puntos-intercambio', name: "pdiRoute", component: pdiView},
    {path: '/museo', name: "museoRoute", component: museoView},
    {path:'/perfil', name: "perfilRoute", component: perfilView},

    {path: '/:pathMatch(.*)*', component: notFound}


];
const router =VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes
});

const app=Vue.createApp(App);
app.use(router);
app.mount('#app');
