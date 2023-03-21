<script setup lang="ts">
import PokeCard from "../components/PokeCard.vue";

</script>
<template>
  <section  class=" ">
    <div class="flex px-3 992:px-1 items-center justify-between text-[#fff] mb-[18px]">
      <h3 class="text-3xl font-semibold text-[#fff] " >Live Auction</h3>
      <span>
        <RouterLink to="/Market">
        <a class="border-b
         border-[#5142fc]
          hover:text-white
           text-[#fff]"
           >Explore more
          </a>
        </RouterLink>
      </span>
    </div>
    <div class="flex w-full 575:flex-col flex-wrap  ">
      <div
        class="mb-5 w-[25%] px-3 992:px-1 col 992:w-1/3 "
        v-for="(item,index) in PokeTop"
        :key="item.id"
        v-animate-onscroll="`animate__animated animate__delay-${speed[index]}s animate__fadeInLeft animate__faster`" 

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
  data(){
    return{
      speed : [0,2,0,1]
    }
  },
  mounted() {
    this.callPokelist();
   
  },
  computed: {
    ...mapGetters(["listPokemon","PokeTop"]),
    
    

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
<style>
@media only screen and (max-width: 767px) {
  .col{
    width: 50%;;
  }
 }
 @media only screen and (max-width: 575px) {
  .col{
    width: 100%;;
  }
}
</style>
