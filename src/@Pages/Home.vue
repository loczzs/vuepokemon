<template lang="">
    <div class="m-auto h-full h-full w-[90%]">
       
      <HeroSection/>
     <div >
      <PokeTop/>
     </div>
     <div   v-animate-onscroll.repeat="'animate__animated animate__bounce animate__fadeInLeft animate__fast'" >
      <TopSeller/>
     </div>
      
      <Trending/>
      <StepSection/>

     
    </div>
</template>

<script setup lang="ts">
  import HeroSection from "../components/HeroSection.vue"
  import PokeTop from "../components/PokeTop.vue";
  import TopSeller from "../components/TopSeller.vue"
  import Trending from "../components/Trending.vue"
  import StepSection from "../components/StepSection.vue"
</script>
<script lang="ts">


export default {
  mounted(){
    window.scrollTo({
          top:0,
          behavior:"smooth"
      })
      
    
  },
    components:{
        HeroSection,
        PokeTop,
        TopSeller,
        Trending,
        StepSection
        
        
       
    }
}
</script>
<style  scoped>

</style>