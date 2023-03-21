<script setup lang="ts"></script>

<template lang="">
  <div  class="cardcontain relative mt-2 ">
    <div
      @click="
        checkMyPokemon
          ? alertowded()
          : checkCart
          ? deLetecart(PokeinFo)
          : addTocart(PokeinFo)
      "
      class="img absolute top-[-50px] left-0 right-0 bottom-0 cursor-pointer"
    >
      <img
        :src="PokeinFo.img"
        alt=""
        class="w-full rounded-[10px] rounded-[10px]"
      />
    </div>
    <div class="card rounded-[10px] bg-[#343444]">
      <div
        :style="{ backgroundImage: createBackgroundString }"
        class="card1 mb-[5px] overflow-hidden rounded-t-[10px] px-[20px]"
      >
        <img
          :src="PokeinFo.img"
          alt=""
          class="w-full rounded-[10px] rounded-[10px]"
        />
      </div>
      <div class="card2 p-[20px]">
        <h5 class="mb-[15px] flex  items-center justify-between">
          <a class="text-[1.5rem] break text-[#fff] no-underline">{{
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
            :disabled="checkMyPokemon"
            @click="
              checkMyPokemon
                ? alertowded()
                : checkCart
                ? deLetecart(PokeinFo)
                : addTocart(PokeinFo)
            "
            :class="{ ' bg-[#5142fc]': checkMyPokemon }"
            class="flex items-center gap-1 rounded-[50px] border border-[#5142fc] px-[20px] py-[5px] text-[0.9rem] text-[#fff] transition duration-300 ease-out hover:bg-[#5142fc] hover:ease-in"
          >
            <i class="ri-shopping-bag-line"></i>
            <span>{{
              checkMyPokemon
                ? "Have owned"
                : checkCart
                ? "Added"
                : "Add To Cart"
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
.cardcontain {
  transition: all 0.7s;
}
.card {
  transition: all 0.5s;
  z-index: 1000 !important;
  cursor: pointer !important;
}
.cardcontain:hover .card {
  cursor: pointer;
  z-index: 1000;
  transform: rotateX(40deg);
  box-shadow: 1px 17px 18px 5px #6d2e75;
}
.cardcontain:hover .card div img {
  transition: 0.5s all;
  opacity: 0;
}

.cardcontain:hover .img {
  opacity: 1;
  z-index: 10;
}
.img {
  z-index: 1;
  opacity: 0;
}

</style>
