<template lang="">
  <section>
    <div class="mb-[1.5rem] px-3">
      <h3 class="text-3xl font-semibold text-[#fff]">Buy and Play Poke Game</h3>
    </div>
    <div class="row flex justify-between flex-wrap">
      <div
        v-for="(item, index) in STEP__DATA"
        :key="item.id"
        class="col mb-[1.5rem] w-1/4 px-3"
      >
        <div className="bg-[#343444] rounded-[5px] p-[30px] pt-[20px] w-full">
          <span
            class="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-[#5142fc]"
          >
            <CIcon
              :icon="item.icon"
              style="color: white"
              class="h-[25px] w-[25px]"
            />
          </span>
          <div className="  mt-1">
            <h5>
              <a class="text-xl text-[#fff] no-underline">{{ item.title }}</a>
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
  components: {
    CIcon,
  },
};
</script>
<style scoped>
.bgicon {
  display: inline-block;
}
@media only screen and (max-width: 1254px) {

.col {
    width: 50% !important;
  }
}
@media only screen and (max-width: 628px) {
.row {
    flex-direction: column;
  }
.col {
    width: 100% !important;
  }
}
</style>
