<template lang="">
  <section class="mt-[120px] flex justify-between text-white">
    <div class="hero__content">
      <h2 class="text-[2.5rem] font-bold leading-[55px] text-[#fff]">
        Discover a new era of cool <br />
        <span> {{ PokeContent }} </span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt
        quidem, explicabo <br />
        optio culpa vitae quo natus minima voluptatibus commodi.
      </p>

      <div class="mt-10 flex items-center gap-4">
        <button
          class="flex items-center gap-1 rounded-[50px] border border-[#5142fc] bg-transparent px-[25px] py-[7px] text-[0.9rem] outline-none"
        >
          <RocketOutlined />
          
          <RouterLink to="/Market">
            <a class="text-[#fff] hover:text-white">Explore</a>
          </RouterLink>
        </button>
        <button
          class="flex items-center gap-1 rounded-[50px] border border-[#5142fc] bg-transparent px-[25px] py-[7px] text-[0.9rem] outline-none"
        >
          <EditOutlined />
          <a class="text-[#fff]">Create</a>
        </button>
      </div>
    </div>
    <div class="w-[500px] overflow-hidden">
      <video
        :src="video"
        class="video h-auto w-full rounded-[7px]"
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { RocketOutlined } from "@ant-design/icons-vue";
import { EditOutlined } from "@ant-design/icons-vue";
import video from "../video/Home Video.mp4"
</script>
<script lang="ts">
export default defineComponent({
  data() {
    return {
      PokeContent: "",
      Content1: "Collectible Pokemon.",
      Content2: "Play Pokemon Game.",
    };
  },
  mounted() {
    this.changeText(this.Content1);
  },
  methods: {
    changeText: async function (ts: string) {
      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      let html: string = "";
      for (var i = 0; i < ts.length; i++) {
        html += ts[i];
        this.PokeContent = html + " " + "|";
        await sleep(100);
      }

      setTimeout(() => {
        this.deleteText(ts);
      }, 300);
      // this.deleteText(ts)
    },
    deleteText: async function (ts: string) {
      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      let html: string = ts;
      for (var i = 0; i < ts.length; i++) {
        html = html.slice(0, -1);
        this.PokeContent = html + " " + `|`;
        await sleep(150);
      }
      if (ts === this.Content2) {
        this.changeText(this.Content1);
        return;
      }
      this.changeText(this.Content2);
    },
  },
  components: {
    RocketOutlined,
    EditOutlined,
  },
});
</script>

<style scoped>
h2 {
  line-height: 55px;
  font-size: 2.5rem;
}

h2 span {
  background: linear-gradient(-45deg, #e250e2, #4b50e6, #e250e2, #4b50e6);
  background-size: 100% 100%;
  background-clip: text;
  -webkit-text-stroke: 3px transparent;
  -webkit-text-fill-color: #14141f;
  margin-right: 7px;
  display: inline-block;
}
</style>
