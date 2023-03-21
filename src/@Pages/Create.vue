<template lang="">
  <section class="m-auto w-[90%]">
    <div class="mt-10 flex gap-3">
      <div class="w-[25%] px-3">
        <h1 class="mb-[1.5rem] text-[1.25rem] text-white">Preview Item</h1>
        <div class="pointer-events-none">
          <PokeCard :PokeinFo="{ ...item }" />
        </div>
        <div class="mt-3 flex justify-end">
          <button
            @click="checkForm"
            class="cursor-pointer rounded-md border-4 border-[#44234f]
             bg-[#44234f] p-1 px-3 font-bold text-white hover:bg-[#44234f]"
          >
            Create
          </button>
        </div>
      </div>
      <div class="w-[75%]">
        <div class="create__item">
          <form>
            <div class="form__input">
              <label htmlFor="">Upload File</label>

              <input
                type="file"
                class="upload__input"
                accept="image/*"
                @input="(e:any)=>{
                  changeFile(e)
                
            }"
              />
              <p
                v-if="validate.files.vali"
                class="mt-1 text-[0.8rem] font-bold text-red-600"
              >
                {{ validate.files.vali }}
              </p>
            </div>

            <div class="form__input">
              <label htmlFor="">Price</label>
              <input
                type="number"
                placeholder="Enter price for one item (ETH)"
                @blur="changePrice"
                @input="changePrice"
              />
              <p
                v-if="validate.Price.vali"
                class="mt-1 text-[0.8rem] font-bold text-red-600"
              >
                {{ validate.Price.vali }}
              </p>
            </div>

            <div class="flex gap-3">
              <div class="form__input w-1/3">
                <label htmlFor="">HP</label>
                <input
                  placeholder="HP stats"
                  @blur="changeHP"
                  @input="changeHP"
                  type="number"
                />
                <p
                  v-if="validate.HP.vali"
                  :class="{ 'text-blue-600': feeHP }"
                  class="mt-1 text-[0.8rem] font-bold text-red-600"
                >
                  {{ validate.HP.vali }}
                </p>
              </div>
              <div class="form__input w-1/3">
                <label htmlFor="">Damage</label>
                <input
                  @blur="changeDamage"
                  @input="changeDamage"
                  placeholder="Damage stats"
                  type="number"
                />
                <p
                  v-if="validate.Damage.vali"
                  :class="{ 'text-blue-600 ': feeDamage }"
                  class="mt-1 text-[0.8rem] font-bold text-red-600"
                >
                  {{ validate.Damage.vali }}
                </p>
              </div>
              <div class="form__input w-1/3">
                <label htmlFor="">DamageSkill</label>
                <input
                  @blur="changeDamageSkill"
                  @input="changeDamageSkill"
                  placeholder="DamageSkill stats"
                  type="number"
                />
                <p
                  v-if="validate.DamageSkill.vali"
                  :class="{ 'text-blue-600 ': feeDamageSKill }"
                  class="mt-1 text-[0.8rem] font-bold text-red-600"
                >
                  {{ validate.DamageSkill.vali }}
                </p>
              </div>
            </div>
            <div class="form__input w-full">
              <label htmlFor="">Race</label>
              <select @blur="changeType" @input="changeType" class="h-full">
                <option value="all">Please choose your race</option>
                <option value="Fire">Fire</option>
                <option value="electric">Electric</option>
                <option value="water">Water</option>
                <option value="fight">Fight</option>
                <option value="top">Top</option>
                <option value="grass">Grass</option>
              </select>
              <p
                v-if="validate.type.vali"
                class="mt-1 text-[0.8rem] font-bold text-red-600"
              >
                {{ validate.type.vali }}
              </p>
            </div>
            <div class="form__input">
              <label htmlFor="">Name</label>
              <input
                @blur="changeName"
                @input="changeName"
                type="text"
                placeholder="Enter title"
              />
              <p
                v-if="validate.Name.vali"
                class="mt-1 text-[0.8rem] font-bold text-red-600"
              >
                {{ validate.Name.vali }}
              </p>
            </div>

            <div class="form__input">
              <label htmlFor="">Description</label>
              <textarea
                name=""
                id=""
                rows="7"
                placeholder="Enter Description"
                class="w-100"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
    <a-modal v-model:visible="visible" title="Confirm Payment">
      <div>
        <div class="flex items-center justify-between">
          <p class="mb-0 text-[1rem] font-semibold leading-[35px]">
            You must pay
          </p>
          <span
            class="flex items-center gap-1 text-[1.1rem] font-bold text-white"
            >{{ total }} <DollarCircleOutlined class="mt-[2px]"
          /></span>
        </div>
        <div class="mt-3 flex items-center justify-between">
          <p class="mb-0 text-[1rem] font-semibold leading-[35px]">
            Service Fee
          </p>
          <span
            class="flex items-center gap-1 text-[1.1rem] font-bold text-white"
            >100 <DollarCircleOutlined class="mt-[2px]"
          /></span>
        </div>
        <div class="mt-3 flex items-center justify-between">
          <p class="mb-0 text-[1rem] font-semibold leading-[35px]">
            Total Bid Amount
          </p>
          <span
            class="flex items-center gap-1 text-[1.1rem] font-bold text-white"
            >{{ total + 100 }} <DollarCircleOutlined class="mt-[2px]"
          /></span>
        </div>
        <div class="flex w-full justify-center">
          <button
            @click="ConfirmPayment"
            class="m-auto mt-[20px] rounded-[50px] bg-[#5142fc] px-[25px] py-[7px] text-[0.8rem]"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </a-modal>
  </section>
</template>
<script lang="ts">
import PokeCard from "../components/PokeCard.vue";
import avartar from "../images/avatar_default-removebg-preview.png";
import { DollarCircleOutlined } from "@ant-design/icons-vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { notification, Button } from "ant-design-vue";
import { h } from "vue";
type Item = {
  id: string;
  name: string;
  type: string;
  img: string | ArrayBuffer | null | undefined;
  color: string;
  damge: number | string;
  damgeSkill: number | string;
  hp: number | string;
  hp100: number;
  price: number | string;
};
interface Notification {
  warning: string;
  info: string;
}
export default {
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      
    });
  },

  data() {
    return {
      visible: false,

      item: {
        color: "rgb(120,116,110)",
        damge: "???",
        damgeSkill: "???",
        hp: "???",
        hp100: 1000,
        id: Date.now().toString(),
        img: avartar,
        name: "???",
        price: "???",
        type: "",
      } as Item,
      validate: {
        files: {
          vali: "",
          // fn:this.changePrice
        },
        Price: {
          vali: "",
          fn: this.changePrice,
        },
        HP: {
          vali: "",
          fn: this.changeHP,
        },
        Damage: {
          vali: "",
          fn: this.changeHP,
        },
        DamageSkill: {
          vali: "",
          fn: this.changeDamageSkill,
        },
        type: {
          vali: "",
          fn: this.changeType,
        },

        Name: {
          vali: "",
          fn: this.changeName,
        },
      },
      feeHP: false,
      feeDamage: false,
      feeDamageSKill: false,
      total: 0,
      // checkValidate:false
    };
  },
  components: {
    PokeCard,
    DollarCircleOutlined,
  },
  computed: {
    ...mapGetters(["userCoin"]),
  },
  methods: {
    ...mapMutations(["listAftercreate","setUsercoinz"]),
    ConfirmPayment: function () {
      this.visible = false;
      const coinAfterpay = this.userCoin - (this.total + 100);
      if (coinAfterpay < 0) {
        this.showNotification(
          "warning",
          "you don't have enough money to pay let's play the game to get bonus"
        );
        return
      };
      this.showNotification("info", "Create success let's go to the market");
     this.setUsercoinz(coinAfterpay)
      this.listAftercreate(this.item);
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
              
            
             
             
               type === "info" ? this.$router.replace({ path: "/Market" }):this.$router.replace({ path: "/Game" });
             
            },
          },
          "let'go"
        ),
        key,
        
      });
    },
    changePrice: function (e: any) {
      let Price = e?.target?.value;

      if (Price > 2500 || Price < 1000 || !this.validate.Price.vali) {
        this.validate.Price.vali =
          "the price should not be less than 1000 and up to 2500";
      } else {
        this.validate.Price.vali = " ";
      }
      if (Price.length > 4) return;

      const newItem = { ...this.item, price: Price };
      this.item = newItem;
    },
    changeHP: function (e: any) {
      const HP = e?.target?.value;
      if (HP < 500 || HP > 2500 || !this.validate.HP.vali) {
        this.feeHP = false;
        this.validate.HP.vali =
          "the HP should not be less than 1000 and up to 2500";
      } else {
        this.feeHP = true;
        this.validate.HP.vali = `you have to pay ${Math.floor(
          HP / 2
        )} coin for ${HP} HP`;
      }
      if (HP.length > 4) return;
      const newItem = { ...this.item, hp: Number(HP), hp100: Number(HP) };
      this.item = newItem;
    },
    changeDamage: function (e: any) {
      const Damage = e?.target?.value;

      if (Damage < 70 || Damage > 250 || !this.validate.Damage.vali) {
        this.feeDamage = false;
        this.validate.Damage.vali =
          "the Damage should not be less than 70 and up to 250";
      } else {
        this.feeDamage = true;
        this.validate.Damage.vali = `you have to pay ${Math.floor(
          Damage
        )} coin for ${Damage} Damage`;
      }
      if (Damage.length > 3) return;
      const newItem = { ...this.item, damge: Number(Damage) };
      this.item = newItem;
    },
    changeDamageSkill: function (e: any) {
      const skill = e?.target?.value;
      if (skill < 200 || skill > 350 || !this.validate.DamageSkill.vali) {
        this.feeDamageSKill = false;
        this.validate.DamageSkill.vali =
          "the DamageSkill should not be less than 200 and up to 350";
      } else {
        this.feeDamageSKill = true;
        this.validate.DamageSkill.vali = `you have to pay ${skill} coin for ${skill} Damage`;
      }
      if (skill.length > 3) return;
      const newItem = { ...this.item, damgeSkill: Number(skill) };
      this.item = newItem;
    },
    changeFile: function (e: any) {
      this.validate.files.vali = " ";
      const file = e.target.files[0];

      if (!file) return;

      // Lưu file vào field hinhAnh của hook form

      // Xử lý hiển thị hình ảnh ra giao diện
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file); // bất đồng bộ
      fileReader.onload = (evt) => {
        // Đọc file thành công
        // evt.target.result: string base64
        const newItem = { ...this.item, img: evt?.target?.result };
        this.item = newItem;
      };
    },
    changeType: function (e: any) {
      const type = e?.target?.value;
      let color = "";

      if (type === "all") {
        this.validate.type.vali = "Please select race";
        return;
      } else {
        this.validate.type.vali = " ";
      }
      if (type === "Fire") {
        color = "rgba(232,132,78,0.3)";
      } else if (type === "electric") {
        color = "rgba(248,206,84,0.3)";
      } else if (type === "water") {
        color = "rgba(57,140,176,0.3)";
      } else if (type === "top") {
        color = "rgba(162,129,159,0.3)";
      } else {
        color = "rgba(148,202,173,0.3)";
      }

      const newItem = { ...this.item, type: type, color: color };
      this.item = newItem;
    },
    changeName: function (e: any) {
      const name = e?.target?.value;
      if (name.length > 15 || name.length < 5 || !this.validate.Name.vali) {
        this.validate.Name.vali =
          "the length of the name should not be more than 15 and less than 5";
      } else {
        this.validate.Name.vali = " ";
      }
      if (name.length > 15) return;
      const newItem = { ...this.item, name: name };
      this.item = newItem;
    },
    checkForm: function () {
      let check = true;
      const falsecontent = "please check the value again";
      const item = this.item;
      let validate = this.validate;
      if (item.price > 2500 || item.price < 1000 || !validate.Price.vali) {
        validate.Price.vali = falsecontent;
        check = false;
      }
      if (item.hp > 2500 || item.hp < 500 || !validate.HP.vali) {
        validate.HP.vali = falsecontent;
        check = false;
      }
      if (item.damge > 250 || item.damge < 70 || !validate.Damage.vali) {
        validate.Damage.vali = falsecontent;
        check = false;
      }
      if (
        item.damgeSkill > 350 ||
        item.damgeSkill < 200 ||
        !validate.DamageSkill.vali
      ) {
        validate.DamageSkill.vali = falsecontent;
        check = false;
      }
      if (
        item.name.length > 15 ||
        item.name.length < 5 ||
        !validate.Name.vali
      ) {
        validate.Name.vali = falsecontent;
        check = false;
      }
      if (!item.type) {
        validate.type.vali = falsecontent;
        check = false;
      }
      if (item.img === avartar || !validate.files.vali) {
        validate.files.vali = falsecontent;
        check = false;
      }

      if (check) {
        this.visible = true;
        this.total =
          Math.floor(Number(item.hp) / 2) +
          Number(item.damge) +
          Number(item.damgeSkill);
      }
    },
    
    
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
.anticon-close {
  color: rebeccapurple !important;
}
.ant-modal-title {
  color: white !important ;
  font-size: 1.6rem !important;
}
.ant-modal-header {
  background-color: #14141f !important;
  border: none !important;
}
.ant-modal-body {
  background-color: #14141f;
}
.ant-modal-footer {
  display: none;
}
.form__input input,
.form__input textarea,
.form__input select {
  width: 100%;
  padding: 7px 25px;
  color: #fff;
  font-size: 0.8rem;
  background: transparent;
  border: 1px solid rgba(221, 221, 221, 0.171);
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}
.form__input select option {
  background-color: #14141f;
  border-bottom: 1px solid black;
  color: white;
  font-size: 15px;
}

.form__input {
  margin-bottom: 15px;
}

.input__error {
  color: rgb(242, 128, 128);
  font-size: 0.8rem;
  font-weight: 600;
}
.form__input label {
  color: #fff;
  margin-bottom: 10px;
}

.form__input .upload__input {
  padding: 40px 25px;
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

@media only screen and (max-width: 576px) {
  .create__item {
    margin-top: 20px;
  }
}
</style>
