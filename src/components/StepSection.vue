<template lang="">
  <section>
    <div class="mb-[1.5rem]">
      <h3 class="text-3xl font-semibold text-[#fff]">Buy and Play Poke Game</h3>
    </div>
    <div class="flex justify-between">
      <div
        v-for="(item, index) in STEP__DATA"
        :key="item.id"
        class="mb-[1.5rem] w-[23.5%]"
      >
        <div className="bg-[#343444] rounded-[5px] p-[30px] w-full">
            <div class="p-5 bg-[#5142fc] inline-block rounded-md">
                <CIcon
                  :icon="item.icon"
                  style="color: white"
                  class="h-[25px] w-[25px] "
                />
            </div>
          <div className="  mt-1">
            <h5>
              <a class="text-[#fff] no-underline text-xl">{{ item.title }}</a>
            </h5>
            <p className="mb-0">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { CaretRightFilled } from "@ant-design/icons-vue";
import { CIcon } from "@coreui/icons-vue";
import { cilWallet, cilLibraryAdd, cilImage, cilList } from "@coreui/icons";
export default {
  data() {
    return {
      STEP__DATA: [
        {
          id: 1,
          title: "Setup your wallet",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
          icon: cilWallet,
        },
        {
          id: 2,
          title: "Create your collection",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
          icon: cilLibraryAdd,
        },
        {
          id: 3,
          title: "Add yout NFTs",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
          icon: cilImage,
        },
        {
          id: 4,
          title: "List them for sale",
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequatur aliquid modi quae unde cumque laboriosam quo, in
    reprehenderit quaerat iusto.`,
          icon: cilList,
        },
      ],
    };
  },
  setup() {
    return {
      cilWallet,
      cilLibraryAdd,
      cilImage,
      cilList,
    };
  },
  components:{
    CIcon
  }
};
</script>
<style scoped>
.single__step__item {
  background: #343444;
  border-radius: 5px;
  padding: 30px;
}

.step__title {
  color: #fff;
}

.step__item__content h5 a {
  text-decoration: none;
  color: #fff;
}

.single__step__item span i {
  color: #fff;
  padding: 20px;
  font-size: 1.4rem;
  background: #5142fc;
  border-radius: 5px;
}

.step__item__content {
  margin-top: 20px !important;
}
</style>
>
