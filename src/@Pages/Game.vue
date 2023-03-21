<template lang="">
  <div class="bgFight relative h-screen w-full">
    <div class="flex h-screen w-full">
      <div class="w-[25%]">
        <Player
          :Status="{
            injured1,
            heal,
            heal1,
          }"
          :Show="{
            inturn,
            visible,
          }"
          :myPokemonz="{ ...myPokemonz }"
          :HP="PlayerHp"
        />
      </div>

      <div class="relative h-screen w-[50%]">
        <div
          v-show="showVs"
          class="absolute left-[50%] top-[50%] w-[200px] -translate-x-[50%] -translate-y-[50%]"
        >
          <img src="../images/versus-crbn-dsgn-removebg-preview.png" alt="" />
        </div>
        <div class="overflow-hidden">
          <img
          loading="lazy"
            v-show="ShowAttack1"
            class="weapon absolute top-[50%] z-50 h-[250px] w-[250px] -translate-y-[50%]"
            :src="attack"
            alt=""
          />

          <img
          loading="lazy"
            v-show="ShowAttack2"
            class="weapon2 absolute top-[50%] z-50 h-[250px] w-[250px] -translate-y-[50%]"
            :src="attack"
            alt=""
          />
        </div>
        <div
          :class="{ Showbutton: animatbutton }"
          v-show="showButton"
          class="absolute bottom-[20%] right-[50%] translate-x-[50%]"
        >
          <button
            :disabled="ShowAttack1"
            @click="
              normalattack(
                'ShowAttack1',
                'injured2',
                'rivalHp',
                'myPokemonz',
                'rival'
              )
            "
            class="mr-3 w-[80px] rounded-md border-4 border-[#be5229] font-bold bg-[#e3a13c] p-1  hover:scale-110"
          >
            Attack
          </button>
          <button
            :disabled="ShowAttack1"
            @click="
              Skillattack(
                'ShowAttack1',
                'injured2',
                'rivalHp',
                'myPokemonz',
                'rival'
              )
            "
            class="mr-3 w-[80px] rounded-md bg-[#e3a13c] font-bold border-4 border-[#be5229] p-1 hover:scale-110"
          >
            Skill
          </button>
          <button
            :disabled="Healbuttons"
            @click="hEal('heal1', 'myPokemonz', 'PlayerHp')"
            class="w-[80px] rounded-md bg-[#e3a13c] font-bold border-4 border-[#be5229] p-1"
          >
            Heal
          </button>
        </div>
        <div
          v-show="showResult"
          class="result absolute right-[50%] z-50 -translate-y-[50%] translate-x-[50%]"
        >
          <div>
            <img loading="lazy" :src="result" alt="" />
          </div>
          <div v-show="showplusMoney" class="text-center">
            <h1
              v-show="showMoney"
              class="flex items-center justify-center text-xl font-bold text-yellow-500"
            >
              {{ userCoin }} <DollarCircleOutlined class="mr-1" /> +
              200<DollarCircleOutlined />
            </h1>
            <h1
              v-show="!showMoney"
              class="result2 mb-5 flex items-center justify-center text-xl font-bold text-yellow-500"
            >
              {{ userCoin }} <DollarCircleOutlined />
            </h1>
          </div>
          <div v-show="!showMoney" class="text-center">
            <RouterLink to="/">
              <button
                @click="checkHeader(true)"
                class="hover:bg- mr-3 w-[107px] rounded-lg bg-[#327eff] p-2 font-semibold text-white"
              >
                Back To Home
              </button>
            </RouterLink>
            <button
              @click="newGame()"
              class="hover:bg- w-[107px] rounded-lg bg-[#f79000] p-2 font-semibold text-white"
            >
              New Game
            </button>
          </div>
        </div>
      </div>
      <div class="w-[25%]">
        <Rival
          :Status="{
            injured2,
            heal,
            heal2,
          }"
          :Show="{
            inturn,
            visible,
          }"
          :rival="{ ...rival }"
          :HP="rivalHp"
        />
      </div>
    </div>

    <div
      v-show="showmorphing"
      :class="{ bgmodal: showmorphing }"
      class="absolute left-0 right-0 top-0 bottom-0"
    >
      <div v-show="visible" class="h-full">
        <div class="flex h-full items-center justify-center">
          <div
            :class="myPokemon.length > 0 ? 'h-[500px]' : 'h-[120px] w-auto'"
            class="flex h-[500px] w-[50%] flex-col rounded-lg bg-[#14141f] p-4"
          >
            <h1 class="text-2xl text-white mb-4" v-if="myPokemon.length > 0">Choose Your Pokemon</h1>
            <div
              v-if="myPokemon.length > 0"
              class="scrollbar mb-1 flex h-[85%] flex-wrap gap-3 overflow-y-scroll"
            >
              <div
                @click="setMypokemon(item)"
                class="mb-1 w-[23%] cursor-pointer"
                v-for="item in myPokemon"
                :key="item.id"
              >
                <div>
                  <div
                    :style="{
                      background: `linear-gradient(   to top, ${item.color}30%, transparent 100% )`,
                    }"
                    :class="
                      item.id === myPokemonz.id
                        ? 'border-green-600'
                        : 'border-yellow-400'
                    "
                    class="border"
                  >
                    <img :src="item.img" class="h-[150px] w-full" alt="" />
                    <h1 class="text-center font-bold text-white">
                      {{ item.name }}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <h1 class="text-2xl font-extrabold text-white">
                you don't have any pokemon
              </h1>
            </div>
            <div class="mt-2 flex justify-end">
              <RouterLink
                to="/"
                className=" cursor-pointer"
                @click="checkHeader(true)"
              >
                <button
                  class="mr-5 rounded-xl bg-transparent p-2 font-semibold text-[#327eff] hover:bg-white"
                >
                  Back
                </button>
              </RouterLink>
              <button
                v-if="myPokemon.length > 0"
                @click="handleOk()"
                class="hover:bg- rounded-lg bg-[#327eff] p-2 font-semibold text-white"
              >
                Go To Figth
              </button>
              <RouterLink
                v-else
                to="/Market"
                className=" cursor-pointer"
                @click="checkHeader(true)"
              >
                <button
                  class="rounded-lg bg-[#327eff] p-2 font-semibold text-white hover:bg-white hover:text-[#327eff]"
                >
                  Go To Market
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PlusOutlined } from "@ant-design/icons-vue";
import { Pokemon, Data } from "../interFace/interface";
import { defineComponent, ref } from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import Mypoke from "../components/Mypoke.vue";
import attack from "../images/large_1595062539950.png";
import skill1 from "../images/d4z0i3q-b72b6bb5-cb3d-4955-a538-2132a2d2cb4e.png";
import skill2 from "../images/Rasengan.png";
import skill3 from "../images/bom-removebg-preview.png";
import heal from "../images/istockphoto-1154725790-612x612-removebg-preview.png";
import win from "../images/win-removebg-preview.png";
import lose from "../images/loose-va-lose-3-removebg-preview.png";
type Attack = Pick<Data, "ShowAttack1" | "ShowAttack2">;
type Injure = Pick<Data, "injured1" | "injured2">;
import { DollarCircleOutlined } from "@ant-design/icons-vue";
type Heal = Pick<Data, "heal1" | "heal2">;
type Attacker = Pick<Data, "myPokemonz" | "rival">;
type Hp = Pick<Data, "PlayerHp" | "rivalHp">;
import Player from "@/components/Player.vue";
import Rival from "@/components/Rival.vue";


export default {
  data(): Data {
    return {
      inturn: true,
      visible: true,
      showButton: false,
      rival: {} as Pokemon,
      myPokemonz: {} as Pokemon,
      ShowAttack1: false,
      injured2: false,
      injured1: false,
      attack: attack,
      skills: [skill1, skill2, skill3],
      ShowAttack2: false,
      PlayerHp: 100,
      rivalHp: 100,
      heal1: false,
      heal2: false,
      heal: heal,
      result: win,
      showResult: false,
      showmorphing: true,
      showMoney: true,
      showVs: true,
      animatbutton: true,
      showplusMoney: true,
    } as Data;
  },

  mounted() {
    this.callPokelist();
    this.checkHeader(false);
    this.myPokemonz = this.myPokemon[0];

    // this.rival = this.myPokemon[0];
  },

  computed: {
    ...mapGetters(["myPokemon", "listPokemon", "userCoin"]),
    Healbuttons: function () {
      if (this.PlayerHp === 100) {
        return true;
      }
      return false;
    },
  },

  methods: {
    ...mapMutations(["checkHeader", "pluscoin"]),
    ...mapActions(["callPokelist"]),

    normalattack: function (
      ShowAttack: keyof Attack,
      Injure: keyof Injure,
      beingattackedHp: keyof Hp,
      Attacked: keyof Attacker,
      beingattacked: keyof Attacker
    ) {
      if (Attacked === "myPokemonz") this.Showbutton(false);

      this.attack = attack;
      this[ShowAttack] = true;
      setTimeout(() => {
        this[ShowAttack] = false;
        this.injure(Injure);
        this.HPAfternormalAttack(
          Attacked,
          beingattacked,
          beingattackedHp,
          "damge"
        );
      }, 700);
    },

    Showbutton: function (payload: boolean) {
      this.showButton = payload;
    },
    Skillattack: function (
      ShowAttack: keyof Attack,
      Injure: keyof Injure,
      beingattackedHp: keyof Hp,
      Attacked: keyof Attacker,
      beingattacked: keyof Attacker
    ) {
      if (Attacked === "myPokemonz") this.Showbutton(false);
      this.attack = this.skills[Math.floor(Math.random() * this.skills.length)];
      this[ShowAttack] = true;

      setTimeout(() => {
        this[ShowAttack] = false;
        this.injure(Injure);
        this.HPAfternormalAttack(
          Attacked,
          beingattacked,
          beingattackedHp,
          "damgeSkill"
        );
      }, 700);
    },
    playEr2: function () {
      const sections = [this.normalattack, this.Skillattack, this.hEal];
      const section = sections[Math.floor(Math.random() * sections.length)];

      setTimeout(() => {
        if (section === this.Skillattack) {
          section("ShowAttack2", "injured1", "PlayerHp", "rival", "myPokemonz");
        } else if (section === this.normalattack) {
          section("ShowAttack2", "injured1", "PlayerHp", "rival", "myPokemonz");
        } else if (section === this.hEal) {
          section("heal2", "rival", "rivalHp");
        }
      }, 500);
    },
    HPAfternormalAttack: function (
      Attacked: keyof Attacker,
      beingattacked: keyof Attacker,
      beingattackedHp: keyof Hp,
      typedamge: keyof Pick<Pokemon, "damge" | "damgeSkill">
    ) {
      let hpAfterbeingattacked =
        this[beingattacked].hp - this[Attacked][typedamge];

      if (hpAfterbeingattacked < 0) hpAfterbeingattacked = 0;

      this[beingattackedHp] = Math.floor(
        (hpAfterbeingattacked * 100) / this[beingattacked].hp100
      );

      this[beingattacked] = {
        ...this[beingattacked],
        hp: hpAfterbeingattacked,
      };
      if (hpAfterbeingattacked === 0) {
        this.showrEsult(beingattacked);
        return;
      }

      setTimeout(() => {
        if (Attacked === "myPokemonz") {
          this.inturn = !this.inturn;
          setTimeout(() => {
            this.playEr2();
          }, 500);
          return;
        }
        this.Showbutton(true);
        this.inturn = true;
      }, 1000);
    },
    showrEsult: function (beingattacked: keyof Attacker) {
      this.showmorphing = true;
      this.showResult = true;

      if (beingattacked === "myPokemonz") {
        this.result = lose;
        this.showplusMoney = false;
        this.showMoney = false;
      } else {
        this.result = win;
        this.showMoney = true;
        this.showplusMoney = true;
        setTimeout(() => {
          this.showMoney = false;

          setTimeout(() => {
            this.pluscoin();
          }, 500);
        }, 2000);
      }
    },
    hEal: function (
      payload: keyof Heal,
      beingHeal: keyof Attacker,
      navHeal: keyof Hp
    ) {
      if (navHeal === "rivalHp" && this[navHeal] === 100) {
        this.playEr2();
        return;
      }
      this[payload] = true;
      setTimeout(() => {
        this[payload] = false;
        this.heaLing(beingHeal, navHeal);
        if (payload === "heal1") {
          this.playEr2();
          this.Showbutton(false);
        }
      }, 1200);
      this.inturn = !this.inturn;
      this.Showbutton(true);
    },
    heaLing: function (beingHeal: keyof Attacker, navHeal: keyof Hp) {
      let plusHP: number = this[beingHeal].hp + 400;

      if (plusHP > this[beingHeal].hp100) {
        plusHP = this[beingHeal].hp100;
      }
      this[beingHeal] = { ...this[beingHeal], hp: plusHP };
      this[navHeal] = Math.floor(
        (this[beingHeal].hp * 100) / this[beingHeal].hp100
      );
    },

    injure: function (payload: keyof Injure) {
      this[payload] = true;

      setTimeout(() => {
        this[payload] = false;
      }, 1000);
    },
    setMypokemon: function (Pokemon: Pokemon) {
      this.myPokemonz = { ...Pokemon };
    },
    handleOk: function () {
      this.visible = false;
      this.showmorphing = false;
      this.setRival();
    },
    setRival: async function () {
      const sleep = (ms: any) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      for (var i = 0; i < 50; i++) {
        this.rival = {
          ...this.listPokemon[
            Math.floor(Math.random() * this.listPokemon.length)
          ],
        };
        await sleep(25);
      }
      this.showButton = true;
      this.showVs = false;
      setTimeout(() => {
        this.animatbutton = false;
      }, 1000);
    },
    newGame: function () {
      this.myPokemonz = this.myPokemon[0];
      this.visible = !this.visible;
      this.showResult = false;

      this.PlayerHp = 100;
      this.rivalHp = 100;
      this.showVs = true;
      this.animatbutton = true;
    },
  },
  components: {
    Mypoke,
    PlusOutlined,
    Player,
    Rival,
    
    DollarCircleOutlined,
  },
};
</script>

<style scoped>
.h1 {
  color: red;
}
.bgmodal {
  background: rgba(0, 0, 0, 0.5);
}
@keyframes loadimg {
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
}
.bgFight {
  
  animation: loadimg 2s both alternate linear;
  background: url("../images/4455.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
@keyframes attack {
  from {
    left: 0;
  }
  to {
    left: 100%;
  }
}
@keyframes attack2 {
  from {
    right: 0;
  }
  to {
    right: 100%;
  }
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
.h2 {
  font-size: 41px;
  background: linear-gradient(-45deg, #e250e5, #4b50e6, #e250e5, #4b50e6);
  background-size: 100% 100%;
  background-clip: text;
  -webkit-text-stroke: 3px transparent;
  -webkit-text-fill-color: #14141f;
  margin-bottom: 0;
}


.weapon {
  transition: all 1s;
  widows: 100px;
  height: 100px;
  animation: attack 0.7s linear both;
}
.weapon2 {
  transform: translateY(-50%) rotateY(180deg);
  transition: all 1s;

  widows: 100px;
  height: 100px;
  animation: attack2 0.7s linear both;
}
@keyframes arrow {
  from {
    top: -10px;
  }
  to {
    top: 0px;
  }
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  /* border-top: 20px solid lightgreen; */
  animation: arrow 0.5s linear alternate infinite;
}
@keyframes result {
  from {
    top: 70%;
  }
  to {
    top: 40%;
  }
}
.result {
  animation: result 1s alternate linear both;
}
@keyframes button {
  from {
    bottom: 50%;
  }
  to {
    bottom: 20%;
  }
}
.Showbutton {
  animation: button 1s alternate linear both;
}
</style>
>
