<template>
  <div class="relative overflow-hidden">
    <header
      v-show="showHeader"
      ref="header"
      class="fixed top-0 left-0 z-50 h-20 w-full"
    >
      <div class="m-auto h-full h-full w-[90%] px-3 992:px-1">
        <div className="h-full flex flex-auto items-center justify-between  ">
          <div>
            <h2 class="h2">NTFs</h2>
          </div>

          <div className="nav__menu flex  748:hidden ">
            <ul className="flex items-center gap-[2.7rem] mb-0">
              <Nav />
            </ul>
          </div>

          <div class="flex 748:hidden">
            <div
              @click="
                () => {
                  title ='cart'
                  navbar = true;
                  withz = '500';
                  setDrawer(true, true);
                }
              "
              class="mr-5 flex cursor-pointer items-center text-white"
            >
              <div class="relative">
                <ShoppingCartOutlined style="font-size: 30px; color: #fff" />
                <div
                  v-show="cart.length > 0"
                  class="first-letter: absolute top-[0] right-0 z-50 h-[20px] w-[20px] translate-x-[50%] -translate-y-[35%] rounded-[50%] bg-red-500 px-[1px] text-center leading-[20px]"
                >
                  <h1 class="mb-0 text-[11px] text-white">{{ cart.length }}</h1>
                </div>
              </div>
            </div>
            <button
              className="text-[0.8rem] flex px-[25px] py-[7px] gap-2 text-[#fff] rounded-[50px] items-center border border-[#5242fc]"
            >
              <DollarCircleOutlined style="font-size: 17px; color: #f7b54a" />
              <span class="text-[#f7b54a]">{{ userCoin }}</span>
            </button>
            <div
              @click="
                () => {
                  title ='Profile'
                  navbar = true;
                  withz = '500';
                  setDrawer(true, false);
                }
              "
              class="ml-5 flex cursor-pointer items-center"
            >
              <UserOutlined style="font-size: 30px; color: #fff" />
            </div>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>

          <!-- --------------------------------------------- -->

          <div class="hidden gap-5 748:flex 748:items-center ">
            <div
              className="text-[0.8rem] flex px-[25px] py-[7px] gap-2 text-[#fff] rounded-[50px] items-center border border-[#5242fc]"
            >
              <DollarCircleOutlined style="font-size: 17px; color: #f7b54a" />
              <span class="text-[#f7b54a]">{{ userCoin }}</span>
            </div>
            <div
              @click="
                () => {
                  title='cart'
                  withz = '90%';
                  navbar = true;
                  setDrawer(true, true);
                }
              "
              class="flex cursor-pointer items-center text-white"
            >
              <div class="relative">
                <ShoppingOutlined style="font-size: 30px; color: #fff" />
                <div
                  v-show="cart.length > 0"
                  class="first-letter: absolute top-[0] right-0 z-50 h-[20px] w-[20px] translate-x-[50%] -translate-y-[35%] rounded-[50%] bg-red-500 px-[1px] text-center leading-[20px]"
                >
                  <h1 class="mb-0 text-[11px] text-white">{{ cart.length }}</h1>
                </div>
              </div>
            </div>
            
            <div
              class="cursor-pointer"
              @click="
                () => {
                  withz = '300';
                  navbar = false;
                  setDrawer(true, true);
                }
              "
            >
              <MenuFoldOutlined style="font-size: 30px; color: #483ec3" />
            </div>
          </div>

          <!-- drawer -->
          <div class="hidden">
            <Drawer
              :visible="visible"
              :title="title"
              :cartorinfo="cartorinfo"
              @closeDrawer="visible = !visible"
              :withz="withz"
              :navbar="navbar"
            />
          </div>
        </div>
      </div>
    </header>

    <div>
      <RouterView />
    </div>
    <div>
      <Footer />
    </div>
  </div>
  <!-- <Game/> -->
</template>

<script setup lang="ts">
import Home from "./@Pages/Home.vue";
import Market from "./@Pages/Market.vue";
import Drawer from "./components/Drawer.vue";
import { defineComponent, ref } from "vue";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuFoldOutlined,
  ShoppingOutlined,
} from "@ant-design/icons-vue";

import { CBadge, CButton } from "@coreui/vue";
import Game from "./@Pages/Game.vue";
import { notification, Button } from "ant-design-vue";
import { h } from "vue";
</script>
<script lang="ts">
import { mapGetters, mapMutations, mapActions } from "vuex";
import Footer from "./components/Footer.vue";
import { Data, Pokemon } from "./interFace/interface";
import Nav from "./components/Nav.vue";
export default defineComponent({
  data() {
    return {
      withz: "500",

      navbar: true,
      visible: false,
      NAV__LINKS: [
        {
          id: 1,
          display: "Home",
          url: "/",
        },
        {
          id: 2,
          display: "Market",
          url: "/Market",
        },
        {
          id: 3,
          display: "Game",
          url: "/Game",
        },
        {
          id: 4,
          display: "Create",
          url: "/Create",
        },
      ],
      cartorinfo: true,
      title: "Profile",
    };
  },

  mounted() {
    this.checkHeader(true);
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        (this.$refs.header as HTMLElement).classList.add("header__shrink");
      } else {
        (this.$refs.header as HTMLElement).classList.remove("header__shrink");
      }
    });
  },
  unmounted() {
    window.removeEventListener("scroll", () => {
      return;
    });
  },
  methods: {
    ...mapMutations([
      "checkHeader",
      "Purchase",
      "addTocart",
      "deLetecart",
      "clearCart",
    ]),

    setDrawer: function (visible: boolean, cartorinfo: boolean) {
      this.visible = visible;

      this.cartorinfo = cartorinfo;
    },
  },

  components: {
    Home,
    Footer,
    DollarCircleOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    Market,
    Game,
    CBadge,
    CButton,
    Drawer,
    MenuFoldOutlined,
    ShoppingOutlined,
    Nav,
  },
  computed: {
    ...mapGetters(["showHeader", "userCoin", "cart", "total", "myPokemon"]),
  },
});
</script>

<style>
tr.highlight td {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}

body {
  background-color: #14141f !important;
}

section,
footer {
  padding: 60px 0px;
}

.header__shrink {
  background: #14141f;
  box-shadow: 3px 3px 6px -3px #e250e5;
}

.h2 {
  font-size: 41px;
  background: linear-gradient(-45deg, #e250e5, #4b50e6, #e250e5, #4b50e6);
  background-size: 100% 100%;
  background-clip: text;
  -webkit-text-stroke: 3px transparent;
  -webkit-text-fill-color: #14141f;
  margin-bottom: 10px;
}

p {
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  opacity: 85%;
  line-height: 35px;
}

a {
  text-decoration: none;
  color: unset;
}

a:hover {
  color: unset;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ant-badge-count {
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
  min-width: 15px !important;
}

.ant-scroll-number-only {
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.ant-scroll-number-only p {
  margin-bottom: 2px !important;
  line-height: normal;
  color: white !important;
  opacity: 1 !important;
}

.ant-drawer-header {
  background: #14141f !important;
  border-bottom: 1px solid #e250e5 !important;
  box-shadow: none !important;
}

.ant-drawer-body {
  background: #14141f !important;
}

.ant-drawer-close {
  color: white !important;
}

.ant-drawer-title {
  color: white !important;
}

.active {
  color: #aa45b3 !important;
}
</style>
