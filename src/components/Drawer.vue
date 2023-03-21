<template lang="">
  <div>
    <a-drawer
      :width="withz"
      :visible="visible"
      class="custom-class"
      :title="title"
      placement="right"
      @close="()=> this.$emit('closeDrawer')"
    >
      <div v-if="navbar" class="h-full">
        <div v-show="!cartorinfo" class="h-[15%] flex mb-2">
          <img class="h-[100%]" :src="avatar" alt="">
          <div class="flex flex-col justify-center ml-2">
            <span class="text-white mb-0 text-xl font-bold">Ryan Carder</span>
            <div class="text-white font-bold">
              <span class="mr-2 ">win: 0</span>
              <span>lose: 0</span>
            </div>
            <div class="flex mt-1">
            <CIcon v-for="(item, index) in icon" :key="index"
                  :icon=" item"
                  
                  class="h-[25px] cursor-pointer w-[25px] bg-[#5142fc] p-1 rounded-[50%] mr-3"
                />
          </div>


          </div>
        </div>
        <div class="scrollbar h-[70%] overflow-y-scroll">
          <table style="width: 100%">
            <tr class="border-b border-gray-500 py-1 text-left">
              <th class="mb-0 py-[10px] text-xl text-[#fff]">Pokemon</th>

              <th
                v-show="cartorinfo"
                class="mb-0 py-[10px] text-xl text-[#fff]"
              >
                Price
              </th>
              <th
                v-show="cartorinfo"
                class="mb-0 py-[10px] text-xl text-[#fff]"
              >
                Action
              </th>

              <th
                v-show="!cartorinfo"
                class="mb-0 py-[10px] text-xl text-[#fff]"
              >
                Type
              </th>
              <th
                v-show="!cartorinfo"
                class="mb-0 py-[10px] text-xl text-[#fff]"
              >
                Hp
              </th>
              <th
                v-show="!cartorinfo"
                class="mb-0 py-[10px] text-xl text-[#fff]"
              >
                Damage
              </th>
              <th
                v-show="!cartorinfo"
                class="mb-0 py-[10px] text-xl text-[#fff]"
              >
                Skill
              </th>
            </tr>
            <tr
              class="highlight border-b border-gray-500"
              v-for="item in (cartorinfo ? cart : myPokemon ) "
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

              <td v-show="cartorinfo">
                <h1 class="mb-0 text-sm text-[#fff]">{{ item.price }}</h1>
              </td>
              <td v-show="cartorinfo" class="text-left">
                <button
                  @click="deLetecart(item)"
                  class="rounded-sm p-1 text-sm text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Remove
                </button>
              </td>
              <td v-show="!cartorinfo">
                <h1 class="mb-0 text-sm text-[#fff]">
                  {{ item.type.toUpperCase() }}
                </h1>
              </td>
              <td v-show="!cartorinfo">
                <h1 class="mb-0 text-sm text-[#fff]">{{ item.hp }}</h1>
              </td>
              <td v-show="!cartorinfo">
                <h1 class="mb-0 text-center text-sm text-[#fff]">
                  {{ item.damge }}
                </h1>
              </td>
              <td v-show="!cartorinfo">
                <h1 class="mb-0 text-sm text-[#fff]">{{ item.damgeSkill }}</h1>
              </td>
            </tr>
          </table>
        </div>
        <div v-show="cartorinfo" class="z-50 mt-5 h-[30%] flex flex-col justify-end bg-[#14141f]">
          <h1 class="mb-2 text-right text-xl text-[#fff]">
            Total: {{ total }}
          </h1>
          <div class="flex w-full justify-end pb-3">
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
      <div v-else>
       <div class="flex flex-col items-start justify-center gap-9">
        <Nav/>
       </div>
      </div>
    </a-drawer>
  </div>
</template>
<script lang="ts">
import { mapGetters, mapMutations, mapActions } from "vuex";
import avatar from "../images/ava-01.png"
import { CIcon } from "@coreui/icons-vue";
import { notification, Button } from "ant-design-vue";
import { h } from "vue";
import { defineComponent } from 'vue';
import Nav from "../components/Nav.vue"

import {
  cibInstagram,
  cibFacebookF,
  cibTelegramPlane,
  cibTwitter,
  cibDiscord,
} from "@coreui/icons";
interface Notification {
  warning: string;
  info: string;
}
export default     {
  data(){
    return {
      avatar:avatar
    }
  },
  setup() {
    return {
      icon:[cibInstagram,
      cibFacebookF,
      cibTelegramPlane,
      cibTwitter,
      cibDiscord,]
    };
  },
  components:{
    CIcon,
    Nav
  },
  computed:{
    ...mapGetters([ "userCoin", "cart", "total","myPokemon"]),
    width(){
      return "90%";
    }
  },
  methods: {
    ...mapMutations(["Purchase", "clearCart","deLetecart","checkHeader",]),
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
      this.$emit("closeDrawer");
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
              this.$emit("closeDrawer");
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
  props:{
    visible:Boolean,
    title:String,
    withz: String,
    cartorinfo:Boolean,
    navbar:Boolean
  } ,
  

};
</script>
<style lang=""></style>
