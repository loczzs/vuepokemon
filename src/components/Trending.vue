<script setup lang="ts">
import PokeCard from "../components/PokeCard.vue";
</script>
<template>
  <section>
    <div class="flex items-center justify-between text-[#fff] mb-[18px]">
      <h3 class="text-3xl font-semibold text-[#fff] " >Trending</h3>
      <span>
        <RouterLink to="/Market">
        <a class="border-b border-[#5142fc] text-[#fff]">Explore more</a>
      </RouterLink>
      </span>
    </div>
    <div class="flex w-full flex-wrap justify-between">
      <div
        class="mb-[60px] w-[23.75%]"
        v-for="item in liveAution"
        :key="item.id"
      >
        <PokeCard :PokeinFo="item" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { mapGetters, mapMutations, mapActions } from "vuex";
import { Pokemon } from "../interFace/interface";
export default {
  components: { PokeCard },
  mounted() {
    this.callPokelist();
  },
  computed: {
    ...mapGetters(["liveAution"]),
    
    

    // chuyển store.state.name => this.name
  },
  methods: {
    //   ...mapMutations(['setName']),
    ...mapActions(["callPokelist"]),
  },
  component: {
    PokeCard,
  },
};
</script>
<style></style>
