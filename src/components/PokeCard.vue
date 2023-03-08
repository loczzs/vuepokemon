<script setup lang="ts"></script>

<template lang="">
  <div class="mt-2 rounded-[10px] bg-[#343444] hover:mt-1">
    <div
      :style="{ backgroundImage: createBackgroundString }"
      class="mb-[5px] rounded-t-[10px] px-[20px]"
    >
      <img
        :src="PokeinFo.img"
        alt=""
        class="w-full rounded-[10px] rounded-[10px]"
      />
    </div>
    <div class="nft__content p-[20px]">
      <h5 class="mb-[15px] flex items-center justify-between">
        <a class="text-[1.5rem] text-[#fff] no-underline">{{
          PokeinFo.name
        }}</a>
        <div class="flex items-center text-[#fff]">
          <a
            class="flex items-center text-[19px] text-[#fff] no-underline hover:text-white"
            >{{ PokeinFo.price }}
          </a>
          <DollarCircleOutlined style="padding: 0px 4px; font-size: 17px" />
        </div>
      </h5>
      <div class="flex gap-3">
        <div class="creator__info flex w-full items-center justify-between">
          <div>
            <h6>HP</h6>
            <p>{{ PokeinFo.hp }}</p>
          </div>

          <div>
            <h6>DAMAGE</h6>
            <p>{{ PokeinFo.damge }}</p>
          </div>
        </div>
      </div>

      <div class="mt-3 flex items-center justify-between">
        <button
          @click="
            checkMyPokemon
              ? alertowded()
              : checkCart
              ? deLetecart(PokeinFo)
              : addTocart(PokeinFo)
          "
          class="flex items-center gap-1 rounded-[50px] border border-[#5142fc] px-[20px] py-[5px] text-[0.9rem] text-[#fff] transition duration-300 ease-out hover:bg-[#5142fc] hover:ease-in"
        >
          <i class="ri-shopping-bag-line"></i>
          <span>{{
            checkMyPokemon ? "Have owned" : checkCart ? "Added" : "Add To Cart"
          }}</span>
        </button>

        <span class="history__link">
          <a class="text-[0.9rem] text-[#fff] no-underline opacity-[85%]"
            >View History</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { DollarCircleOutlined } from "@ant-design/icons-vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default defineComponent({
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["addTocart", "deLetecart"]),
    alertowded: function () {
      alert("you already own");
    },
  },
  components: {
    DollarCircleOutlined,
  },
  props: {
    PokeinFo: Object,
    // taskData:{
    //     type:Object,
    //     default:()=>{}
    // }
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(to top , ${
        this.PokeinFo && this.PokeinFo.color
      }30%, transparent 100% )`;
    },
    checkCart() {
      let added = true;
      const checkcart = this.cart.findIndex(
        (items: any) => items.id === this.PokeinFo?.id
      );
      if (checkcart === -1) added = false;
      return added;
    },
    checkMyPokemon() {
      let owned = true;
      const checkPoke = this.myPokemon.findIndex(
        (items: any) => items.id === this.PokeinFo?.id
      );
      if (checkPoke === -1) owned = false;
      return owned;
    },
    ...mapGetters(["userCoin", "cart", "myPokemon"]),
  },
});
</script>

<!-- <script lang="ts" >


export default   {
  
  props: {
    PokeinFo: Object,
    // taskData:{
    //     type:Object,
    //     default:()=>{}
    // }
  },
  computed: {
    createBackgroundString() {
      return `linear-gradient(to top , ${this.PokeinFo && this.PokeinFo.color }30%, transparent 100% )`;
    }
  },
};
</script> -->

<style>
.creator__info h6 {
  font-size: 0.7rem;
  color: #fff;
  opacity: 80%;
  margin-top: 0;
  font-weight: 600;
}

.creator__info p {
  font-size: 1.1rem;
  color: #fff;
  opacity: 100%;
  margin-bottom: 0;
  font-weight: 500;
}
</style>
