<template lang="">
  <div class="relative">
    <div class="absolute left-2 cursor-pointer">
      <RouterLink
        v-show="!Show.visible"
        to="/"
        className=" cursor-pointer"
        @click="checkHeader(true)"
      >
        <img class="w-[70px] hover:scale-110" :src="backtohome" alt="" />
      </RouterLink>
    </div>
    <div class="flex h-screen items-center justify-end">
      <div class="xh relative" v-show="!Show.visible">
        <div :class="{ injure: Status.injured1 }">
          <div
            v-show="Show.inturn"
            class="arrow-down absolute top-[0] left-[50%] -translate-x-[50%] border-t-[20px] border-green-400"
          ></div>
          <img :src="myPokemonz?.img" alt="" class="  mt-5 h-[215px] w-[215px]" />

          <img
            v-show="Status.injured1"
            class="absolute top-0 right-0 left-0 bottom-0 translate-y-[30%]"
            src="../images/vetcao-removebg-preview.png"
            alt=""
          />
          <div
            v-show="Status.heal1"
            class="Heal h-500px absolute top-[15%] left-0 right-0 bottom-0 w-full"
          >
            <div
              class="flex items-center justify-center font-extrabold text-green-500"
            >
              <img class="h-[40px] w-[40px]" :src="Status.heal" alt="" />
            </div>
            <div class="flex items-center justify-center">
              <img class="h-[40px] w-[40px]" :src="Status.heal" alt="" />
              <img class="h-[40px] w-[40px]" :src="Status.heal" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-show="!Show.visible"
      class="absolute bottom-0 h-[150px] w-full bg-[#14141f] p-2"
    >
      <div class="flex justify-between gap-5">
        <div class="xh h-[134px] w-[23%]">
          <img :src="myPokemonz.img" class=" h-full w-full" alt="" />
        </div>
        <div class="relative mt-3 w-[76%]">
          <div class="relative h-[30px] w-full rounded-2xl bg-[#4a206a]">
            <div
              :style="{ width: HP + '%' }"
              class="HP h-full rounded-2xl bg-[#f13e6e]"
            >
              <h1
                class="absolute top-[50%] left-[50%] mb-0 -translate-y-[50%] -translate-x-[50%] text-sm text-white"
              >
                {{ myPokemonz.hp }} / {{ myPokemonz.hp100 }}
              </h1>
            </div>
            <div class="mt-5 flex gap-5">
              <div class="flex items-center">
                <img class="h-[30px] w-[30px]" :src="sword" alt="" />
                <h1 class="mb-0 text-xl text-white">
                  : {{ myPokemonz.damge }}
                </h1>
              </div>
              <div class="flex items-center">
                <CIcon
                  :icon="cilAperture"
                  style="color: #e29104"
                  class="h-[30px] w-[30px]"
                />

                <h1 class="mb-0 ml-1 text-xl text-white">
                  : {{ myPokemonz.damgeSkill }}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { CIcon } from "@coreui/icons-vue";
import { cibBathasu, cilAperture, cilHeart } from "@coreui/icons";
import { HeartFilled } from "@ant-design/icons-vue";
import backtohome from "../images/back-removebg-preview.png";
import sword from "../images/sword.png";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      Hp100z: 100,
      sword: sword,
      backtohome,
    };
  },
  props: {
    myPokemonz: Object,
    Show: Object,
    Status: Object,
    HP: Number,
  },
  setup() {
    return {
      cibBathasu,
      cilAperture,
      cilHeart,
    };
  },

  computed: {
    showHP: function () {
      return this?.myPokemonz?.hp;
    },
    Hp100: function () {
      if (this.Hp100z === 100) {
        this.Hp100z === this?.myPokemonz?.hp;
        return this?.myPokemonz?.hp;
      } else {
        return this.Hp100z;
      }
    },
  },
  methods: {
    ...mapMutations(["checkHeader"]),
  },
  components: {
    CIcon,
    HeartFilled,
  },
};
</script>
<style scoped>
@keyframes xh {
  from {
    margin-bottom: 50px;
  }
  to {
    margin-bottom: 0px;
  }
}

.xh {
  animation: xh 0.5s linear both;
  transform: rotateY(180deg);
}
@keyframes injure {
  from {
    transform: rotate(0deg);
    margin-left: 0px;
  }
  to {
    transform: rotate(20deg);
    margin-left: 100px;
  }
}
@keyframes HP {
  from {
    width: 0%;
  }
  to {
    width: HP + "%";
  }
}
.HP {
  transition: all 10s;
  animation: HP 1s linear alternate both;
}

.injure {
  animation: injure 0.5s linear alternate;
  animation-iteration-count: 1;
}
@keyframes heal {
  from {
    top: 15%;
    opacity: 1;
  }
  to {
    top: -10%;
    opacity: 0;
  }
}
.Heal {
  animation: heal alternate 1s linear both;
}
</style>
