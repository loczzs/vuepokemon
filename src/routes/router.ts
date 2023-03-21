import * as vR from "vue-router";
import DashboardVue from "@pages/Dashboard.vue";
import Pnf from "@pages/NotFoundPage.vue";
import Home from "@/@Pages/Home.vue";
import Market from "@/@Pages/Market.vue"
import Game from "@/@Pages/Game.vue"
import Create from "@/@Pages/Create.vue";

//Create a router and then export it

const _routes:Array<vR.RouteRecordRaw> = [
//Path & Component are mandatory.
{
    path:"/",
    component:Home,
    name:"home"
},
{
  path:"/Market",
  component:Market,
  name:"market"
},
{
  path:"/Game",
  component:Game,
  name:"game"
},
{
  path:"/Create",
  component: Create,
  name:"Create"
},

];

const router = vR.createRouter({
  history: vR.createWebHistory(), //WebHash history will add hash before every route
  routes: _routes, //Send the routes here.
  // linkActiveClass:'vue-active',
});

export default router;
