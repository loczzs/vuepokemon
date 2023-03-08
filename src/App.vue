<template>
  <div class="relative overflow-hidden">
    <header
      v-show="showHeader"
      ref="header"
      class="fixed top-0 left-0 z-20 h-20 w-full"
    >
      <div class="m-auto h-full h-full w-[90%] px-3">
        <div className="h-full flex flex-auto items-center justify-between  ">
          <div class="">
            <h2 class="h2">NTFs</h2>
          </div>

          <div className="nav__menu flex">
            <ul className="flex items-center gap-[2.7rem] mb-0">
              <RouterLink
                :to="item.url"
                class="nav__item cursor-pointer text-[15px] text-[#FFF] no-underline hover:text-white"
                v-for="item in NAV__LINKS"
                :key="item.id"
                active-class="active"
              >
                {{ item.display }}
              </RouterLink>
            </ul>
          </div>

          <div class="flex">
            <div
              @click="visible = !visible"
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
              <DollarCircleOutlined style="font-size: 17px ;color: #f7b54a;" />
              <span class="text-[#f7b54a]">{{ userCoin }}</span>
            </button>
            <span className="mobile__menu">
              <i className="ri-menu-line"></i>
            </span>
          </div>

          <a-drawer
            :width="500"
            :visible="visible"
            class="custom-class"
            title="Cart"
            placement="right"
            @close="visible = !visible"
          >
            <div class="h-full">
              <div class="scrollbar h-[85%] overflow-y-scroll">
                <table style="width: 100%">
                  <tr class="border-b border-gray-500 py-1 text-left">
                    <th class="mb-0 py-[10px] text-xl text-[#fff]">Pokemon</th>

                    <th class="mb-0 py-[10px] text-xl text-[#fff]">Price</th>
                    <th class="mb-0 py-[10px] text-xl text-[#fff]">Action</th>
                  </tr>
                  <tr
                    class="highlight border-b border-gray-500"
                    v-for="item in cart"
                    :key="item.id"
                  >
                    <td class="flex items-center">
                      <img
                        style="height: 70px; width: 70px"
                        :src="item.img"
                        alt=""
                        class="mr-1"
                      />
                      <h1 class="mb-0 text-sm text-[#fff]">{{ item.name }}</h1>
                    </td>

                    <td>
                      <h1 class="mb-0 text-sm text-[#fff]">{{ item.price }}</h1>
                    </td>
                    <td class="text-left">
                      <button
                        @click="deLetecart(item)"
                        class="rounded-sm p-1 text-sm text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        Remove
                      </button>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div class="z-50 mt-5 h-auto bg-[#14141f]">
                <h1 class="mb-2 text-right text-xl text-[#fff]">
                  Total: {{ total }}
                </h1>
                <div class="flex w-full justify-end">
                  <button
                    @click="clearCart()"
                    class="mr-3 rounded-[10px] border border-[#fff] px-[1rem] py-[0.5rem] text-[1rem] text-[#fff] hover:bg-[#5bc0be]"
                  >
                    Clear Cart
                  </button>
                  <button
                    @click="checkPurchase()"
                    class="rounded-[10px] border border-[#fff] px-[1rem] py-[0.5rem] text-[1rem] text-[#fff] hover:bg-[#5bc0be]"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </a-drawer>
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

import { defineComponent, ref } from "vue";
import { DollarCircleOutlined } from "@ant-design/icons-vue";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";
import { CBadge, CButton } from "@coreui/vue";
import Game from "./@Pages/Game.vue";
import Drawer from "./components/Drawer.vue";
import { notification, Button } from "ant-design-vue";
import { h } from "vue";
interface Notification {
  warning: string;
  info: string;
}

</script>
<script lang="ts">
import { mapGetters, mapMutations, mapActions } from "vuex";
import Footer from "./components/Footer.vue"
export default defineComponent({
  data() {
    return {
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
          display: "Contact",
          url: "/contact",
        },
      ],
    };
  },

  mounted() {
    this.setUsercoin();
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
      "setUsercoin",
    ]),
    checkPurchase: function () {
      if (this.cart.length === 0) return;
      if (this.total > this.userCoin) {
        this.showNotification(
          "warning",
          "you don't have enough money to pay let's play the game to get bonus"
        );
        return;
      }
      this.Purchase();
      this.showNotification("info", "Let's play the game to get the money");
      this.visible = true;
    },
    showNotification: function (type: keyof Notification, title: string) {
      const key = `open${Date.now()}`;
      notification[type]({
        message: "Notification Title",
        description: `${title}`,
        btn: h(
          Button,
          {
            type: "primary",
            size: "small",

            onClick: () => {
              this.checkHeader(false);
              this.visible = false;
              notification.close(key);
              setTimeout(() => {
                this.$router.replace({ path: "/Game" });
              }, 700);
            },
          },
          "Go To Game"
        ),
        key,
        onClose: close,
      });
    },
  },

  components: {
    Home,
    Footer,
    DollarCircleOutlined,
    ShoppingCartOutlined,
    Drawer,
    Market,
    Game,
    CBadge,
    CButton,
  },
  computed: {
    ...mapGetters(["showHeader", "userCoin", "cart", "total"]),
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

.animate {
  animation: move 0.5s linear alternate;
}

@keyframes move {
  from {
    right: -200px;
  }

  to {
    right: 0;
  }
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
